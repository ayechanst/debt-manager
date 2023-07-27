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
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Add Someone!</h2>
          <form onSubmit={handleSubmit}>
            <input
              className="input input-bordered w-full max-w-xs"
              id="createGameInput"
              value={personName}
              onChange={e => setPersonName(e.target.value)}
              type="string"
              required
            />
            <div className="py-5">
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
          </form>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};
