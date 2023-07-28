import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";

export const Data = () => {
  // figure out what arguments to pass
  const people: string[] = [];

  const { data: peopleArray } = useScaffoldContractRead<{
    data: string[] | undefined;
  }>({
    contractName: "YourContract",
    functionName: "getPeople",
  });

  peopleArray?.forEach((item: string) => {
    people.push(item);
  });

  const listItems = people.map(person => {
    <li key={person}>{person}</li>;
  });

  return (
    <>
      <ul>{listItems}</ul>
    </>
  );
};
