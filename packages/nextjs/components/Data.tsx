import React, { useState } from "react";
import { useRouter } from "next/router";
import { AddPerson } from "../components/AddPerson";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";

export const Data: React.FC = () => {
  const [addPerson, setAddPerson] = useState(false);
  const router = useRouter();
  const groupTitleProps = router.query.propsToPass;

  // we need to get people from the group with the same name
  const { data: peopleArray } = useScaffoldContractRead({
    contractName: "YourContract",
    functionName: "getPeople",
  });

  const peopleInGroup: object[] = [];
  peopleArray?.forEach(person => {
    if (person.groupMemberOf == groupTitleProps) {
      peopleInGroup.push(person);
    }
  });
  console.log("here are all the people: ", peopleArray);
  console.log("here are the people in group: ", peopleInGroup);

  /* const { data: debtObject } = useScaffoldContractRead({
   *   contractName: "YourContract",
   *   functionName: "getDebts",
   * }); */

  /* function getSomeonesDebt(person: string) {
   *   let accruedDebt = 0;
   *   debts?.forEach(edge => {
   *     if (person !== edge.nameOfBuyer) {
   *       if (edge.nameOfBeneficiary === person) {
   *         accruedDebt += Number(edge.debtAmount);
   *       }
   *     }
   *   });
   *   return accruedDebt;
   * }
   */

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
      {/* {people.map(person => {
          const personBalance = getSomeonesBalance(person);
          const personSpendings = getSomeonesPurchases(person);
          return <DataCard name={person} balance={personBalance} spendings={personSpendings} />;
          })} */}

      <div className="navbar bg-base-100">
        <div className="navbar-start"></div>
        <div className="navbar-center">
          <a className="btn btn-ghost normal-case text-xl">{groupTitleProps}</a>
        </div>
        <div className="navbar-end">
          <button onClick={() => setAddPerson(!addPerson)} className="btn btn-ghost btn-circle">
            Add Person
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>
      {/* pass in an identifier prop */}
      {addPerson && <AddPerson groupTitleProps={groupTitleProps as string} />}
    </>
  );
};
