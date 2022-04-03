import Container from "components/Container";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Container title="ayushpaharia.me">
      <div className="flex flex-col items-start justify-center max-w-2xl pb-16 mx-auto border-gray-200 dark:border-gray-700">
        <h1 className="mt-2 mb-8 text-3xl font-bold text-black tracking- md:text-5xl dark:text-white">
          <span className="text-lime-400">ayushpaharia.me</span>
          <p>is under construction 🏗️</p>
        </h1>

        <div className="mb-4 text-gray-600 dark:text-gray-400">
          Welcome to my personal website. I am a software engineer based in
          India.
          <p>In the meantime checkout - </p>
          <div className="px-6 py-4 mt-4 bg-gray-200 rounded-sm dark:bg-gray-800 text-gray:800 dark:text-gray-300">
            npx ayushpaharia
          </div>{" "}
        </div>
      </div>
    </Container>
  );
};

export default Home;
