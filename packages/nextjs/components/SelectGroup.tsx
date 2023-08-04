/* import { useAccount } from "wagmi"; */
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";

export const SelectGroup = () => {
  /* const { address } = useAccount(); */

  const { data: groups } = useScaffoldContractRead({
    contractName: "YourContract",
    functionName: "getGroups",
  });

  console.log("owners groups: ", groups);

  function handleClick() {
    console.log("cards been clicked");
  }
  return (
    /* use props for each group in person's id, render their groups */
    <>
      <button className="bg-white rounded-lg shadow-md p-4 hover:bg-gray-100 cursor-pointer" onClick={handleClick}>
        <div className="text-xl font-bold">Card Title</div>
        <p className="text-gray-600">Some information goes here...</p>
      </button>
    </>
  );
};
