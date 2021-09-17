import Breadcrumb from "@/components/Breadcrumb";
import Layout from "@/components/Layout";
import MetaTags from "@/components/MetaTags";
import MovieCard from "@/components/MovieCard";
import { useRouter } from "next/dist/client/router";

import useSwr from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function MoviesPage({}) {
  const router = useRouter();
  const { data } = useSwr(
    router.query.id ? `/api/movies/${router.query.id}` : null,
    fetcher
  );
  return (
    <Layout>
      {data && (
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
      )}
    </Layout>
  );
}
