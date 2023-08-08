import React, { useState } from "react";
import { MakeGroup } from "../components/MakeGroup";
import { SelectGroup } from "../components/SelectGroup";

const Main = () => {
  const [addGroup, setAddGroup] = useState(false);

  function handleAddGroup() {
    setAddGroup(!addGroup);
  }

  return (
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-base-300">
            <div className="flex-1 px-2 mx-2"> iGub </div>
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <li>
                <button className="btn btn-secondary" onClick={handleAddGroup}>
                  Add Group
                </button>
              </li>
            </ul>
          </div>
          {/* Page content here */}
          <div className="grid grid-cols-3 gap-4">
            <SelectGroup />
            <div className="flex flex-col">{addGroup && <MakeGroup />}</div>
          </div>
          <div className="flex flex-row-reverse">
            {/* depending on what group is selected, render the correct data */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
