//import React, { useState } from "react";
//import { useRouter } from "next/router";
import { JoinGroup } from "../components/JoinGroup";
import { MakeGroup } from "../components/MakeGroup";

export const CreateAccount = () => {
  //  const router = useRouter();

  /* function handleClick() {
   *   router.push("./home");
   * }
   */

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="flex space-x-4">
          <div>
            <MakeGroup />
          </div>
          <div>
            <JoinGroup />
          </div>
        </div>
      </div>
    </>
  );
};
