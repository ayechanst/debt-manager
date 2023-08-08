import React, { useState } from "react";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

interface Props {
  groupTitleProps: string;
}

export const AddPerson: React.FC<Props> = props => {
  const { groupTitleProps } = props;
  const [personName, setPersonName] = useState("");

  const { writeAsync } = useScaffoldContractWrite({
    contractName: "YourContract",
    functionName: "createPerson",
    args: [personName, groupTitleProps],
    onBlockConfirmation: txnReceipt => {
      console.log("person created", txnReceipt.blockHash);
    },
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    writeAsync({ args: [personName, groupTitleProps] });
  }

  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Add Someone!</h2>
          <div>group being sent from: {groupTitleProps}</div>
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
