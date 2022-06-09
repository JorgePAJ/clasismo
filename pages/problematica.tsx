import type { NextPage } from "next";
import Navbar from "../components/navbar";
import Problem from "../components/problem";

const Problematica: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Problem />
    </div>
  );
};

export default Problematica;
