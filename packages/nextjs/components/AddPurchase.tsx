import React, { useState } from "react";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

// import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";
interface CheckboxData {
  name: string;
}

export const AddPurchase = () => {
  // first chooseBeneficiaries
  // second log purchase

  const [personName, setPersonName] = useState("");
  const [purchaseName, setPurchaseName] = useState("");
  const people: string[] = [];

  // checkBoxData is array
  const [checkboxData, setCheckboxData] = useState<CheckboxData[]>([]);

  function handleCheck(name: string) {
    setCheckboxData(prevData => prevData.concat({ name }));
  }

  // submits form, both checkButtons and logPurchase
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  // this is for the checkButton submition
  const { submitChecks } = useScaffoldContractWrite({
    contractName: "YourContract",
    functionName: "chooseBeneficiaries",
    args: [checkboxData],
    onBlockConfirmation: txnReceipt => {
      console.log("game created", txnReceipt.blockHash);
    },
  });

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
    return <div key={person}>{person}</div>;
  });

  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Add a purchase!</h2>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Purchase Name"
              className="input input-bordered w-full max-w-xs"
              value={purchaseName}
              onChange={e => setPurchaseName(e.target.value)}
            />
            <input
              placeholder="Buyer's Name"
              className="input input-bordered w-full max-w-xs"
              value={personName}
              onChange={e => setPersonName(e.target.value)}
            />
            {listItems.map((name, index) => (
              <div key={index}>
                <label className="flex">
                  {/* make this fill out formData depending on who is checked */}
                  <input
                    type="checkbox"
                    className="checkbox"
                    onChange={() => {
                      handleCheck(name);
                      {
                        /* fix the fact we can pass name as an arg */
                      }
                    }}
                  />
                  {name}
                </label>
              </div>
            ))}
            <div className="py-5">
              <button type="submit" className="btn">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
