import type { NextPage } from "next";
import { useRouter } from "next/router";

interface Button {
  text: string;
  url: string;
}

const Button = ({ text, url }: Button) => {
  const { push } = useRouter();

  return (
    <button
      className="px-4 py-2 rounded-lg bg-blue-700 text-white w-full hover:scale-105 duration-300 transition-all"
      onClick={() => push(url)}
    >
      <span className="text-center">{text}</span>
    </button>
  );
};

const index: NextPage = () => {
  const menu = [
    { text: "Tujuan", url: "/" },
    { text: "Materi", url: "/materi" },
    { text: "Profil", url: "/profile" },
  ];

  return (
    <div className="h-screen w-full flex justify-center">
      <div className="h-screen flex flex-col justify-center max-w-lg md:max-w-lg p-4">
        <div className="space-y-3 text-center my-5">
          <h1 className="text-2xl text-transparent font-semibold bg-clip-text bg-gradient-to-r from-blue-700 to-purple-600">
            Menu
          </h1>
          <p className="italic text-slate-800">Menu modul ajar Python</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center w-full gap-4">
          {menu.map((data) => (
            <Button text={data.text} url={data.url} key={data.text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
