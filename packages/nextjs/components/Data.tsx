import React from "react";
import { DataCard } from "../components/DataCard";
import ReactDOMServer from "react-dom/server";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";

// this component might not be displayed depending on how things go
export const Data: React.FC = () => {
  const people: string[] = [];

  const { data: peopleObject } = useScaffoldContractRead({
    contractName: "YourContract",
    functionName: "getPeople",
  });

  if (peopleObject) {
    const objLength = peopleObject?.length;
    for (let i = 0; i < objLength; i++) {
      people.push(peopleObject?.[i]);
    }
  }

  /* const listItems: JSX.Element[] = people.map(person => {
   *   return <li key={person}>{person}</li>;
   * });
   */

  // this is an object with one array full of Edge Structs
  const { data: debtObject } = useScaffoldContractRead({
    contractName: "YourContract",
    functionName: "getDebts",
  });

  const debts = debtObject;

  function getSomeonesDebt(person: string) {
    let accruedDebt = 0;
    debts?.forEach(edge => {
      if (person !== edge.nameOfBuyer) {
        if (edge.nameOfBeneficiary === person) {
          accruedDebt += Number(edge.debtAmount);
        }
      }
    });
    return accruedDebt;
  }

  function getSomeonesPurchases(person: string) {
    let purchaseAmount = 0;
    debts?.forEach(edge => {
      if (edge.nameOfBuyer === person) {
        purchaseAmount += Number(edge.debtAmount);
      }
    });
    return purchaseAmount;
  }

  function getSomeonesBalance(person: string) {
    const debt = getSomeonesDebt(person);
    const spendings = getSomeonesPurchases(person);
    return spendings - debt;
  }

  const ayechansDebt = getSomeonesDebt("ayechan");
  const ayechansPurchases = getSomeonesPurchases("ayechan");
  const ayechansBalance = getSomeonesBalance("ayechan");

  console.log("debts obj:", debts);
  console.log("ayechan's debt", ayechansDebt);
  console.log("ayechan's spendings", ayechansPurchases);
  console.log("ayechan's balance", ayechansBalance);

  return (
    <>
      {people.map(person => {
        const personBalance = getSomeonesBalance(person);
        const personSpendings = getSomeonesPurchases(person);
        return <DataCard name={person} balance={personBalance} spendings={personSpendings} />;
      })}
    </>
  );
};
