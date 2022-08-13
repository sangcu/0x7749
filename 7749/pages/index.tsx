import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import YourFuture from "../components/YourFuture";
import WeCanHelp from "../components/WeCanHelp";
import Logo from "../assets/logo.svg";
import YourFutureIcon from "../assets/your-future.svg";
import WeCanHelpIcon from "../assets/we-can-help.svg";
import ImInIcon from "../assets/im-in.svg";
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

      <main className="container mx-auto md max-w-6xl">
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
          is nowhere without career development
        </div>
        <div className="mx-auto max-w-6xl">
          <YourFuture />
        </div>
        <div className="mx-auto pt-40 lg:w-96">
          <WeCanHelpIcon className="mx-auto" />
          <p className="text-center">
            The software industry is high demand, it need YOU. Starting your
            career development with our help.
          </p>
        </div>
        <div className="mx-auto max-w-6xl">
          <WeCanHelp />
        </div>
        <div className="mx-auto pt-20 text-center">
          <h1 className="uppercase font-semibold text-2xl">
            STOP WORRY, START BUILDING.
          </h1>
          <p className="">Join Us! The privacy first AI for career coach.</p>
          <div className="flex">
            <div className="grow h-14"></div>
            <div className="grow-0 h-14">
              <p className="m-0 text-center pt-5">
                <ImInIcon className="cursor-pointer hover:ring-boldpink hover:ring-4 hover:rounded-xl active:ring-boldpink active:ring-4 active:rounded-xl" />
              </p>
            </div>
            <div className="grow h-14"></div>
          </div>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t mt-20">
        Future of Work @2022
      </footer>
    </div>
  );
};

export default Home;
