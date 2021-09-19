import Link from "next/link";

import Layout from "../components/Layout";
import Image from "next/image";
import MetaTags from "@/components/MetaTags";
const Page404 = () => {
  return (
    <Layout>
      <MetaTags pageTitle="OMDB - Page not found" />
      <div className="container mx-auto my-5 md:my-7 xl:my-10 grid justify-center h-full gap-y-4 text-center">
        <h3 className="text-5xl break-words select-none font-black ">
          Errrrrr 404
        </h3>
        <h3 className="text-5xl break-words select-none font-medium">
          It is a shame we could not find the page you were looking for
        </h3>

        <div className="w-60 h-60 relative m-auto rounded-full overflow-hidden">
          <Image
            src="/assets/keycap_yoshi.png"
            alt="render Keycap Dinosaurio"
            layout="fill"
            objectFit="cover"
            quality="100"
          />
        </div>
        <span className="text-2xl break-words select-none font-normal">
          Seems you got lost, but no worries, you will find way back home if you
          click next button
        </span>
      </div>
      <div className="grid gap-y-10 my-5 md:my-7 xl:my-10">
        <Link passHref href="/">
          <div
            data-testid="take-me-home-button"
            className="cursor-pointer bg-g4m-gray-default text-g4m-black-default py-2 px-6 rounded-full font-body text-xl font-black w-fit-content justify-between h-fit-content m-auto"
          >
            Take me back home
          </div>
        </Link>
      </div>
    </Layout>
  );
};

export default Page404;
