import type { NextPage, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import fs from "fs";
import matter from "gray-matter";

interface Props {
  konten: Materi[];
}

interface MateriData {
  judul: string;
  desc: string;
  sumber: string;
}

interface Materi {
  slug: string;
  data: MateriData;
}

const Index: NextPage<Props> = ({ konten }) => {
  const { push } = useRouter();
  return (
    <div className="grid place-items-center w-full p-4">
      <div className="mb-4 flex text-center md:text-left md:justify-between md:items-center w-3/4">
        <h1 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700">
          Materi
        </h1>
        <button
          className="hidden md:block px-4 py-2 rounded-lg bg-red-600 text-white hover:scale-105 duration-300 transition-all"
          onClick={() => push("/menu")}
        >
          Kembali
        </button>
      </div>
      <div className="w-3/4 grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
        {konten.map(({ data, slug }: Materi) => (
          <div
            className="w-full border rounded-lg cursor-pointer hover:scale-105 duration-300 transition-all"
            key={slug}
            onClick={() => push(`/materi/${slug}`)}
          >
            <div className="p-2 flex flex-col border h-full">
              <h1 className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700 underline-offset-4 mb-3">
                {data.judul}
              </h1>
              <div className="flex-1"></div>
              <p className="mt-auto text-slate-600 truncate hover:break-normal">
                {data.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const materi = fs.readdirSync(`${process.cwd()}/src/materi`).map((file) => {
    const content = fs.readFileSync(
      `${process.cwd()}/src/materi/${file}`,
      "utf-8"
    );
    const slug = file.split(".")[0];
    const { data } = matter(content);
    const materiData: MateriData = {
      judul: data.judul,
      desc: data.desc,
      sumber: data.sumber,
    };
    return {
      slug,
      data: materiData,
    };
  });

  return {
    props: {
      konten: materi,
    },
  };
};

export default Index;
