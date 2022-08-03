import { trpc } from "@/utils/trpc";
import type { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  const { data, isLoading } = trpc.useQuery(["hello", { text: "Theo" }]);

  if (isLoading) return <div>Loading..</div>;

  if (!data) return <></>;

  return <div>Hello</div>;
};

export default Home;
