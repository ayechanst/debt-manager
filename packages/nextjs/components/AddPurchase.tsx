import React, { useRef, useState } from "react";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

// import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";
interface CheckboxData {
  name: string;
}

export const AddPurchase = () => {
  const people: string[] = [];
  const [personName, setPersonName] = useState("");
  const [purchaseName, setPurchaseName] = useState("");
  const [checkboxData, setCheckboxData] = useState<CheckboxData[]>([]);

  // submits form, both checkButtons and logPurchase
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  // this is for the checkButton submition
  const { writeAsync } = useScaffoldContractWrite({
    contractName: "YourContract",
    functionName: "chooseBeneficiaries",
    args: [],
    onBlockConfirmation: txnReceipt => {
      console.log("game created", txnReceipt.blockHash);
    },
  });

  // start loading people from smart contract
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
  // end loading people from smart contract

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
                  <input type="checkbox" className="checkbox" />
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
