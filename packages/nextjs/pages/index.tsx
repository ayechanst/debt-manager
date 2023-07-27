import Link from "next/link";
import { AddPerson } from "../components/AddPerson";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <AddPerson />
    </>
  );
};

export default Home;
