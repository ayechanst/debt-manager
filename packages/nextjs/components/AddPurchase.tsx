import React, { useState } from "react";

// import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

interface DataProps {
  names: string[];
}

export const AddPurchase: React.FC<DataProps> = ({ names }) => {
  // first chooseBeneficiaries
  // second log purchase

  const [personName, setPersonName] = useState("");
  const [purchaseName, setPurchaseName] = useState("");

  // submits form
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

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
            {names.forEach(name => {})}
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
