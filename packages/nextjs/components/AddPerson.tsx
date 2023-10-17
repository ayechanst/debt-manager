import React, { useState } from 'react';
import { useScaffoldContractWrite } from '~~/hooks/scaffold-eth';

interface Props {
  groupTitleProps: string;
}

export const AddPerson: React.FC<Props> = props => {
  const { groupTitleProps } = props;
  const [personName, setPersonName] = useState('');
  const [personAddress, setPersonAddress] = useState('');

  const { writeAsync } = useScaffoldContractWrite({
    contractName: 'YourContract',
    functionName: 'createPerson',
    args: [personName, groupTitleProps, personAddress],
    onBlockConfirmation: txnReceipt => {
      console.log('person created', txnReceipt.blockHash);
    },
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    writeAsync();
  }

  return (
    <>
      <div className="card w-96 h-full bg-base-100 shadow-xl m-3">
        <div className="card-body">
          <h2 className="card-title">Add Someone!</h2>
          <form onSubmit={handleSubmit}>
            <div className="flex space-y-1 flex-col">
              <input
                className="input input-bordered w-full max-w-xs"
                placeholder="Person's name"
                value={personName}
                onChange={e => setPersonName(e.target.value)}
                type="string"
                required
              />
            </div>
            <div className="flex space-y-1 flex-col">
              <input
                className="input input-bordered w-full max-w-xs"
                placeholder="Person's address"
                value={personAddress}
                onChange={e => setPersonAddress(e.target.value)}
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
