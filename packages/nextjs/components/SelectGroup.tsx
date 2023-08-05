import React from "react";
import { GroupCard } from "../components/GroupCard";
import { useAccount } from "wagmi";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";

export const SelectGroup = () => {
  const { address } = useAccount();

  function handleClick() {
    console.log("cards been clicked");
  }

  const { data: groups } = useScaffoldContractRead({
    contractName: "YourContract",
    functionName: "getGroups",
    args: [address],
  });

  console.log("here our groups", groups);

  return (
    /* use props for each group in person's id, render their groups */
    <>
      {groups?.map(group => {
        const nameOfGroup = group.groupName;
        return (
          <>
            <button
              className="bg-white rounded-lg shadow-md p-4 hover:bg-gray-100 cursor-pointer"
              onClick={handleClick}
            >
              <GroupCard nameOfGroup={nameOfGroup} />
            </button>
          </>
        );
      })}
    </>
  );
};
