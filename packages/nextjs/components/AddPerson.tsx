import React, { useState } from "react";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

export const AddPerson = () => {
  const [personName, setPersonName] = useState("");
  const [walletId, setWalletId] = useState("");

  const { writeAsync } = useScaffoldContractWrite({
    contractName: "YourContract",
    functionName: "createPerson",
    args: [personName, walletId],
    onBlockConfirmation: txnReceipt => {
      console.log("person created", txnReceipt.blockHash);
    },
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    writeAsync({ args: [personName, walletId] });
  }

  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Add Someone!</h2>
          <form onSubmit={handleSubmit}>
            <div className="flex space-y-3 flex-col">
              <input
                className="input input-bordered w-full max-w-xs"
                placeholder="Person's name"
                id="createGameInput"
                value={personName}
                onChange={e => setPersonName(e.target.value)}
                type="string"
                required
              />
              <input
                className="input input-bordered w-full max-w-xs"
                placeholder="Person's wallet address"
                id="createGameInput"
                value={walletId}
                onChange={e => setWalletId(e.target.value)}
                required
              />
            </div>
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
