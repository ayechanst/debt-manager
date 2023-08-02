import React, { useState } from "react";
import { useRouter } from "next/router";

export const CreateAccount = () => {
  const [chooseOption, setChooseOption] = useState(true);
  const [joinCard, setJoinCard] = useState(false);
  const [accountCard, setAccountCard] = useState(false);

  const router = useRouter();

  function handleClick() {
    router.push("./home");
  }

  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        {chooseOption && (
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Create or Join an Account</h2>
              <p>Creating an account lets you host iGUBs, while joining an iGUB lets you join the party immediately</p>
              <div className="card-actions justify-end">
                <button
                  onClick={() => {
                    setChooseOption(!chooseOption);
                    setAccountCard(!accountCard);
                  }}
                  className="btn"
                >
                  Create Account
                </button>
                <button
                  className="btn"
                  onClick={() => {
                    setChooseOption(!chooseOption);
                    setJoinCard(!joinCard);
                  }}
                >
                  Join Existing
                </button>
              </div>
            </div>
          </div>
        )}

        {joinCard && (
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Enter Join Code</h2>
              <div className="card-actions justify-end">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="createGameInput"
                  type="string"
                  required
                />
                <button
                  onClick={() => {
                    setChooseOption(!chooseOption);
                    setJoinCard(!joinCard);
                  }}
                  className="btn"
                >
                  Back
                </button>
                <button className="btn">Join</button>
              </div>
            </div>
          </div>
        )}

        {accountCard && (
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Create an Account</h2>
              <div className="card-actions justify-end">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="createGameInput"
                  type="string"
                  required
                />
                <button
                  onClick={() => {
                    setChooseOption(!chooseOption);
                    setAccountCard(!accountCard);
                  }}
                  className="btn"
                >
                  Back
                </button>
                <button className="btn">Create</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
