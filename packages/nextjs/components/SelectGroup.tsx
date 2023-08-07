import React from "react";
import { GroupCard } from "../components/GroupCard";
import { useAccount } from "wagmi";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";

export const SelectGroup = () => {
  const { address } = useAccount();

  function handleClick() {
    // make this navigate to the group info/Data part
    // based off the group name maybe render Data.tsx with relevant props
    console.log("cards been clicked");
  }

  const { data: groups } = useScaffoldContractRead({
    contractName: "YourContract",
    functionName: "getGroups",
  });

  console.log("here our groups", groups);

  return (
    <>
      {groups?.map(group => {
        if (group.groupOwner === address) {
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
        }
      })}
    </>
  );
};
