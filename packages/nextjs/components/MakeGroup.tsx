import React, { useState } from "react";
import { useRouter } from "next/router";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

export const MakeGroup = () => {
  const router = useRouter();
  const [groupName, setGroupName] = useState("");

  const { writeAsync } = useScaffoldContractWrite({
    contractName: "YourContract",
    functionName: "createGroup",
    args: [groupName],
    onBlockConfirmation: txnReceipt => {
      console.log("group created", txnReceipt.blockHash);
    },
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    writeAsync({ args: [groupName] });
    router.push("./home");
  }

  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Make a New Group</h2>
          <p>What is the name of your epic group?</p>
          <form onSubmit={handleSubmit}>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="createGameInput"
              onChange={e => setGroupName(e.target.value)}
              type="string"
              required
            />
            <div className="card-actions justify-end py-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
