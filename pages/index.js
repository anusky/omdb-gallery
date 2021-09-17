import SearchInput from "../components/SearchInput";
import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";

const HomeContainer = () => {
  return (
    <Layout>
      <section className="container mx-auto">
        <SearchInput />
      </section>
    </Layout>
  );
};

export default function Home({ fallback }) {
  return <HomeContainer />;
}
