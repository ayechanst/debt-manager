import React, { useState } from "react";
import { AddPerson } from "../components/AddPerson";
import { AddPurchase } from "../components/AddPurchase";
import { Data } from "../components/Data";
import { SelectGroup } from "../components/SelectGroup";

const Main = () => {
  const [addPerson, setAddperson] = useState(false);
  const [addPurchase, setAddPurchase] = useState(false);

  function handleAddPerson() {
    setAddperson(!addPerson);
  }

  function handleAddPurchase() {
    setAddPurchase(!addPurchase);
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
                <button onClick={handleAddPerson} className="btn btn-secondary">
                  Add Person
                </button>
              </li>
              <li>
                <a>View Balances </a>
              </li>
              <li>
                <button onClick={handleAddPurchase} className="btn btn-secondary">
                  Add Purchase
                </button>
              </li>
            </ul>
          </div>
          {/* Page content here */}
          <SelectGroup />
          <div className="flex flex-row-reverse">
            {/* depending on what grou is selected, render the correct data */}
            <Data />
            <div className="flex flex-col">
              {addPerson && <AddPerson />}
              {addPurchase && <AddPurchase />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
