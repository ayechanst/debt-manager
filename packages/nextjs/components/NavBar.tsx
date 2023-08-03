import React, { useState } from "react";
import { AddPerson } from "../components/AddPerson";
import { AddPurchase } from "../components/AddPurchase";
import { Data } from "../components/Data";

export const NavBar = () => {
  const [addPerson, setAddperson] = useState(false);
  const [addPurchase, setAddPurchase] = useState(false);

  function handleAddPerson() {
    setAddperson(!addPerson);
  }

  function handleAddPurchase() {
    setAddPurchase(!addPurchase);
  }

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-300">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2"> iGub </div>
          <div className="flex-none hidden lg:block">
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
        </div>
        {/* Page content here */}
        <div className="flex flex-row-reverse">
          <Data />
          <div className="flex flex-col">
            {addPerson && <AddPerson />}
            {addPurchase && <AddPurchase />}
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
