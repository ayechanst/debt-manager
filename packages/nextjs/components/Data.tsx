import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";

export const Data = () => {
  // figure out what arguments to pass
  const people: string[] = [];

  const { data: peopleObject } = useScaffoldContractRead({
    contractName: "YourContract",
    functionName: "getPeople",
  });

  if (peopleObject) {
    const objLength = peopleObject?.length;
    for (let i = 0; i < objLength; i++) {
      people.push(peopleObject?.[i]);
    }
  }

  const listItems: JSX.Element[] = people.map(person => {
    return <li key={person}>{person}</li>;
  });

  return (
    <>
      <ul>{listItems}</ul>
    </>
  );
};
