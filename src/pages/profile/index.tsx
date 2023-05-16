import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";

const index: NextPage = () => {
  const { push } = useRouter();
  return (
    <div className="h-screen w-full flex justify-center">
      <div className="h-screen flex flex-col justify-center max-w-lg md:max-w-lg p-4">
        <div className="text-center space-y-4">
          <h1 className="text-xl text-slate-900 font-semibold">
            Ronaldo Kereh
          </h1>
          <Image
            src={"/static/me.jpg"}
            alt="me"
            className="w-28 h-28 rounded-lg ring relative mx-auto"
            width={250}
            height={250}
            priority
          />
          <p className="text-base text-slate-900">
            22011008 <span className="block">Teknik Informatika</span>
          </p>
          <button
            className="px-4 py-2 rounded-lg bg-red-600 text-white w-full"
            onClick={() => push("/menu")}
          >
            Kembali
          </button>
          <button
            className="px-4 py-2 rounded-lg bg-gray-600 text-white w-full"
            onClick={() => push("https://www.github.com/kereh")}
          >
            Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
