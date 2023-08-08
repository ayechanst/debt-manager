import React, { useState } from "react";
import { useRouter } from "next/router";
import { AddPerson } from "../components/AddPerson";
import { AddPurchase } from "../components/AddPurchase";
import { DataCard } from "../components/DataCard";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";

export const Data: React.FC = () => {
  const [addPerson, setAddPerson] = useState(false);
  const [addPurchase, setAddPurchase] = useState(false);
  const router = useRouter();
  const groupTitleProps = router.query.propsToPass;

  const { data: peopleArray } = useScaffoldContractRead({
    contractName: "YourContract",
    functionName: "getPeople",
  });

  const peopleInGroup: string[] = [];
  peopleArray?.forEach(person => {
    if (person.groupMemberOf == groupTitleProps) {
      peopleInGroup.push(person.name);
    }
  });

  const { data: debtObject } = useScaffoldContractRead({
    contractName: "YourContract",
    functionName: "getDebts",
  });

  console.log(debtObject);

  function getSomeonesDebt(person: string) {
    let accruedDebt = 0;
    debtObject?.forEach(edge => {
      if (edge.edgeOf == groupTitleProps) {
        if (person !== edge.nameOfBuyer) {
          if (edge.nameOfBeneficiary == person) {
            console.log("beneficiary: ", person);
            accruedDebt += Number(edge.debtAmount);
          }
        }
      }
    });
    return accruedDebt;
  }

  /* function getSomeonesPurchases(person: string) {
   *   let purchaseAmount = 0;
   *   debts?.forEach(edge => {
   *     if (edge.nameOfBuyer === person) {
   *       purchaseAmount += Number(edge.debtAmount);
   *     }
   *   });
   *   return purchaseAmount;
   * }
   */

  /* function getSomeonesBalance(person: string) {
   *   const debt = getSomeonesDebt(person);
   *   const spendings = getSomeonesPurchases(person);
   *   return spendings - debt;
   * }
   */

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start"></div>
        <div className="navbar-center">
          <a className="btn btn-ghost normal-case text-xl">{groupTitleProps}</a>
        </div>
        <div className="navbar-end">
          <div className="px-10">
            <button onClick={() => setAddPerson(!addPerson)} className="btn">
              Add Person
            </button>

            <button onClick={() => setAddPurchase(!addPurchase)} className="btn">
              Add Purchase
            </button>
          </div>
        </div>
      </div>
      {peopleInGroup.map(person => {
        const personsDebt = getSomeonesDebt(person);
        return <DataCard key={person} name={person} balance={personsDebt} />;
      })}
      {/* pass in an identifier prop */}
      {addPerson && <AddPerson groupTitleProps={groupTitleProps as string} />}
      {/* fix this thing */}
      {addPurchase && <AddPurchase groupTitleProps={groupTitleProps as string} />}
    </>
  );
};
