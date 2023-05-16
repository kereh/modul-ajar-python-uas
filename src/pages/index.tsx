import type { NextPage } from "next";
import { useRouter } from "next/router";

const index: NextPage = () => {
  const { push } = useRouter();
  return (
    <div className="h-screen w-full flex justify-center">
      <div className="h-screen flex flex-col justify-center max-w-lg md:max-w-lg p-4">
        <div className="space-y-4 md:text-center">
          <h1 className="text-xl text-transparent text-blue-700 font-semibold bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700">
            Python
          </h1>
          <p className="text-slate-800">
            Modul ajar tentang salah satu bahasa pemrograman terkenal yaitu
            Python.
          </p>
        </div>
        <div className="flex flex-col mt-5">
          <div className="">
            <h1 className="text-md text-transparent font-semibold bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700">
              Tujuan Pembelajaran
            </h1>
            <ul className="p-4 text-slate-800">
              <li className="list-decimal cursor-pointer hover:text-blue-700 duration-300 transition-all">
                Memahami dasar-dasar pemrograman Python.
              </li>
              <li className="list-decimal cursor-pointer hover:text-blue-700 duration-300 transition-all">
                Mampu menggunakan bahasa Python untuk membuat program sederhana.
              </li>
              <li className="list-decimal cursor-pointer hover:text-blue-700 duration-300 transition-all">
                Mampu memahami tipe data dan struktur kontrol yang tersedia
                dalam bahasa Python.
              </li>
              <li className="list-decimal cursor-pointer hover:text-blue-700 duration-300 transition-all">
                Mampu membuat aplikasi konsol sederhana dengan Python.
              </li>
            </ul>
          </div>
        </div>
        <div>
          <button
            className="px-4 py-2 rounded-lg bg-blue-700 text-white w-full hover:scale-105 duration-300 transition-all"
            onClick={() => push("/menu")}
          >
            Mulai
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
