import React from "react";
import { DataCard } from "../components/DataCard";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";

// this component might not be displayed depending on how things go
export const Data: React.FC = () => {
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
      {/* for each person render a card with info */}
      <DataCard />
      <ul>{listItems}</ul>
    </>
  );
};
