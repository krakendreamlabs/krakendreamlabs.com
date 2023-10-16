import Image from "next/image";
import logo_full from "../public/logo-full.svg";

export default function Home() {
  return (
    <main className="">
      <section className="bg-white dark:bg-gray-900 w-full h-screen flex justify-center items-center">
        <div className="py-8 px-4 mx-auto max-w-screen-md text-center lg:py-16 lg:px-12">
          <Image
            className="mx-auto w-96 h-w-96 text-gray-400"
            alt="logo"
            src={logo_full}
          />
          <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 lg:mb-6 md:text-5xl xl:text-6xl dark:text-white">
            Under Construction
          </h1>
          <p className="font-light text-gray-500 md:text-lg xl:text-xl dark:text-gray-400">
            Our Enterprise administrators are performing scheduled maintenance.
          </p>
        </div>
      </section>
    </main>
  );
}
