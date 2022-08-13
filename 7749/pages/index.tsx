import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import YourFuture from "../components/YourFuture";
import WeCanHelp from "../components/WeCanHelp";
import Logo from "../assets/logo.svg";
import YourFutureIcon from "../assets/your-future.svg";
import WeCanHelpIcon from "../assets/we-can-help.svg";
const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>
          0x7749 | Helping software engineers thriving in career development
        </title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="container mx-auto md max-w-7xl">
        <div className="relative flex pt-4 items-center justify-between ">
          <div className="">
            <Logo />
          </div>
        </div>
        <div className="flex justify-center pt-20 pb-40">
          <div>
            <h1 className="font-semibold text-4xl text-center ">
              Helping software engineers thriving in career development
            </h1>
          </div>
        </div>
        <div className="text-center pb-10">
          <YourFutureIcon className="mx-auto"></YourFutureIcon>
          is no where without career development
        </div>
        <div className="mx-auto max-w-6xl">
          <YourFuture />
        </div>
        <div className="text-center pt-20">
          <WeCanHelpIcon className="mx-auto" />
          The software industry is high demand, it need YOU. Starting to build
          your career development with our help.
        </div>
        <div className="mx-auto max-w-6xl">
          <WeCanHelp />
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  );
};

export default Home;
