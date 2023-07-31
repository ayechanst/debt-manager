import React, { useState } from "react";
import ReactDOMServer from "react-dom/server";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

export const AddPurchase = () => {
  const people: string[] = [];
  const [personName, setPersonName] = useState("");
  const [purchaseName, setPurchaseName] = useState("");
  const [purchaseAmount, setPurchaseAmount] = useState(0);
  const amountAsBigInt = BigInt(purchaseAmount);
  const [checkboxData, setCheckboxData] = useState<string[]>([]);

  const htmlStringToString = checkboxData.reduce((acc, htmlString) => {
    const regex = /<div>(.*?)<\/div>/g;
    const matches = htmlString.match(regex);
    const stringsWithoutDivs = matches.map(match => match.replace(/<\/?div>/g, ""));
    return [...acc, ...stringsWithoutDivs];
  });

  // submits form, both checkButtons and logPurchase
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    writeAsync({ args: [amountAsBigInt, personName, purchaseName, ...htmlStringToString] });
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

  const { writeAsync } = useScaffoldContractWrite({
    contractName: "YourContract",
    functionName: "logPurchase",
    args: [amountAsBigInt, personName, purchaseName, ...htmlStringToString],
    onBlockConfirmation: txnReceipt => {
      console.log("purchase logged", txnReceipt.blockHash);
    },
  });

  console.log("strings: ", htmlStringToString);

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
            {listItems.map((name, index) => (
              <div key={index}>
                <label className="flex">
                  <input
                    type="checkbox"
                    className="checkbox"
                    onChange={() => {
                      const jsxAsString = ReactDOMServer.renderToString(name);
                      handleCheckbox(jsxAsString);
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
