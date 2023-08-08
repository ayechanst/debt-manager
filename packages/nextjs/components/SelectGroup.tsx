import React from "react";
import { useRouter } from "next/router";
import { GroupCard } from "../components/GroupCard";
import { useAccount } from "wagmi";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";

export const SelectGroup = () => {
  const { address } = useAccount();
  const router = useRouter();

  const { data: groups } = useScaffoldContractRead({
    contractName: "YourContract",
    functionName: "getGroups",
  });

  return (
    <>
      {groups?.map(group => {
        if (group.groupOwner === address) {
          const nameOfGroup = group.groupName;
          return (
            <>
              <button
                className="flex items-center justify-center bg-white rounded-lg shadow-md p-4 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  router.push({
                    pathname: "./groups",
                    query: { propsToPass: nameOfGroup },
                  });
                }}
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
