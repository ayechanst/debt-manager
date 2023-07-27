import React, { useState } from "react";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

export const AddPerson = () => {
  const [personName, setPersonName] = useState("");
  const { writeAsync } = useScaffoldContractWrite({
    contractName: "YourContract",
    functionName: "createPerson",
    args: [personName],
    onBlockConfirmation: txnReceipt => {
      console.log("person created", txnReceipt.blockHash);
    },
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    writeAsync({ args: [personName] });
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="py-5">Enter person's name:</div>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="createGameInput"
            value={personName}
            onChange={e => setPersonName(e.target.value)}
            type="string"
            required
          />
          <div className="py-5">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
