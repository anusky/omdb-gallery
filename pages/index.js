import SearchInput from "../components/SearchInput";
import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";

const HomeContainer = () => {
  return (
    <Layout className="container mx-auto">
      <SearchInput />
    </Layout>
  );
};

export default function Home({ fallback }) {
  return <HomeContainer />;
}
