import React from 'react';
import { useRouter } from 'next/router';
import { GroupCard } from '../components/GroupCard';
import { useAccount } from 'wagmi';
import { useScaffoldContractRead } from '~~/hooks/scaffold-eth';

export const SelectGroup = () => {
  const { address } = useAccount();
  const router = useRouter();

  const { data: groups } = useScaffoldContractRead({
    contractName: 'YourContract',
    functionName: 'getGroups',
  });

  return (
    <>
      {groups?.map(group => {
        // modify this so also invited people can see the group pop up
        // not sure if this is done yet i dont think so
        if (group.groupOwner === address) {
          const nameOfGroup = group.groupName;
          return (
            <>
              <button
                className="flex items-center justify-center rounded-lg shadow-md hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  router.push({
                    pathname: './groups',
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
