import React, { useState } from 'react';
import { MakeGroup } from '../components/MakeGroup';
import { SelectGroup } from '../components/SelectGroup';

export const Home = () => {
  const [addGroup, setAddGroup] = useState(false);

  function handleAddGroup() {
    setAddGroup(!addGroup);
  }

  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <div className="flex flex-col items-center">
          <div>
            {addGroup && (
              <div>
                <MakeGroup />
              </div>
            )}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <SelectGroup />
          </div>
          <div className="py-3">
            <button className="btn btn-secondary" onClick={handleAddGroup}>
              Add Group
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
