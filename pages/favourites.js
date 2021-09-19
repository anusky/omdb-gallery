import Breadcrumb from "@/components/Breadcrumb";
import FavouriteMoviesList from "@/components/FavouriteMoviesList";
import { ICON_ID_LIST } from "@/components/Icons";
import Layout from "@/components/Layout";
import { getFavouriteMoviesList } from "@/utils/favourites";
import { useEffect, useState } from "react";

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
            icon: ICON_ID_LIST.HEART,
            disabled: true,
          }}
        />
        <FavouriteMoviesList favList={favList} />
        {/* <pre>{JSON.stringify(favList, null, 2)}</pre> */}
      </section>
    </Layout>
  );
}
