import Breadcrumb from "@/components/Breadcrumb";
import FavouriteMoviesList from "@/components/FavouriteMoviesList";
import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import { getFavouriteMoviesList } from "../../../utils/favourites";

export default function FavouitesPage() {
  const [favList, setFavList] = useState([]);
  useEffect(() => {
    setFavList(getFavouriteMoviesList());
  }, []);
  return (
    <Layout>
      <section className="container mx-auto p-6 grid gap-y-4">
        <Breadcrumb
          slugStructure={{
            text: `My Favourites`,
            slug: `/favourites`,
            disabled: true,
          }}
        />
        <FavouriteMoviesList favList={favList} />
        {/* <pre>{JSON.stringify(favList, null, 2)}</pre> */}
      </section>
    </Layout>
  );
}
