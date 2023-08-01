import React from "react";
import { DataCard } from "../components/DataCard";
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

  const listItems: JSX.Element[] = people.map(person => {
    return <li key={person}>{person}</li>;
  });

  // this is an object with one array full of Edge Structs
  const { data: debtObject } = useScaffoldContractRead({
    contractName: "YourContract",
    functionName: "getDebts",
  });

  const debts = debtObject;

  function getSomeonesDebt(person: string) {
    let accruedDebt = 0;
    debts?.forEach(edge => {
      if (edge.nameOfBeneficiary === person) {
        accruedDebt += Number(edge.debtAmount);
      }
    });
    return accruedDebt;
  }

  function getSomeonesPurchases(person: string) {
    let purchaseAmount = 0;
    debts?.forEach(edge => {
      if (edge.nameOfBuyer === person) {
        // readind too many spendings
        purchaseAmount += Number(edge.purchaseAmount);
      }
    });
    return purchaseAmount;
  }

  function getSomeonesBalance(person: string) {
    const debt = getSomeonesDebt(person);
    const spendings = getSomeonesPurchases(person);
    return debt - spendings;
  }

  const ayechansDebt = getSomeonesDebt("ayechan");
  const ayechansPurchases = getSomeonesPurchases("ayechan");
  const ayechansBalance = getSomeonesBalance("ayechan");

  console.log("debts obj:", debts);
  console.log("ayechan's debt", ayechansDebt);
  console.log("ayechan's spendings", ayechansPurchases);
  console.log("ayechan's debt", ayechansBalance);

  return (
    <>
      {/* for each person render a card with info */}
      <DataCard />
      <ul>{listItems}</ul>
    </>
  );
};
