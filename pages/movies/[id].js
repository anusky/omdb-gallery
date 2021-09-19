import Breadcrumb from "@/components/Breadcrumb";
import Layout from "@/components/Layout";
import Loader from "@/components/Loader";
import MetaTags from "@/components/MetaTags";
import MovieCard from "@/components/MovieCard";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";

import useSwr from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function MoviesPage({}) {
  const router = useRouter();
  const { data } = useSwr(
    router.query.id ? `/api/movies/${router.query.id}` : null,
    fetcher
  );

  useEffect(() => {
    if (data?.Error) {
      router.push("/404");
    }
  }, [data]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <Layout>
      {data && !data.Error ? (
        <section className="container mx-auto p-6 grid gap-y-4">
          <MetaTags
            customMetaTags={{
              ogTitle: data.Title,
              ogDescription: data.Plot,
              ogUrl: `/movies/${data.imdbID}`,
              ogImage: data.Poster,
              ogType: "video.movie",
              ...data,
            }}
            pageTitle={data.Title}
          />
          <Breadcrumb
            slugStructure={{
              text: `${data.Type} - ${data.Title}`,
              slug: `/movies/${data.imdbID}`,
              disabled: true,
            }}
          />
          <MovieCard {...data} />
        </section>
      ) : (
        <Loader />
      )}
    </Layout>
  );
}
