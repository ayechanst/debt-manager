import React, { useState } from "react";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

interface Props {
  groupTitleProps: string;
}

export const AddPurchase: React.FC<Props> = props => {
  const { groupTitleProps } = props;
  const [personName, setPersonName] = useState("");
  const [purchaseName, setPurchaseName] = useState("");
  const [purchaseAmount, setPurchaseAmount] = useState(0);
  const amountAsBigInt = BigInt(purchaseAmount);
  const [checkboxData, setCheckboxData] = useState<string[]>([]);

  // submits form, both checkButtons and logPurchase
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    writeAsync();
  }

  function handleCheckbox(name: string) {
    setCheckboxData(prevNames => {
      // if the array has the name, remove it
      if (prevNames.includes(name)) {
        return prevNames.filter(n => n !== name);
      } else {
        // if the array doesn't, add it
        return [...prevNames, name];
      }
    });
  }

  // fix this thing
  const { writeAsync } = useScaffoldContractWrite({
    contractName: "YourContract",
    functionName: "logPurchase",
    args: [amountAsBigInt, personName, purchaseName, checkboxData, groupTitleProps],
    onBlockConfirmation: txnReceipt => {
      console.log("purchase logged", txnReceipt.blockHash);
    },
  });

  // start loading people from smart contract
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
              placeholder="Purchase Amount"
              className="input input-bordered w-full max-w-xs"
              value={purchaseAmount}
              onChange={e => setPurchaseAmount(e.target.value)}
            />
            <input
              placeholder="Buyer's Name"
              className="input input-bordered w-full max-w-xs"
              value={personName}
              onChange={e => setPersonName(e.target.value)}
            />
            {peopleInGroup?.map((name, index) => (
              <div key={index}>
                <label className="flex">
                  <input type="checkbox" className="checkbox" onChange={() => handleCheckbox(name)} />
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
