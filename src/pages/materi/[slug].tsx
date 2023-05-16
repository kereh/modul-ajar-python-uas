import type {
  NextPage,
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
} from "next";
import { ParsedUrlQuery } from "querystring";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { useRouter } from "next/router";
import Syntax from "react-syntax-highlighter";
import fs from "fs";
import matter from "gray-matter";

interface Query extends ParsedUrlQuery {
  slug: string;
}

interface Props {
  data: {
    judul: string;
    desc: string;
    sumber: string;
  };
  content: any;
  mdxSource: any;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(`${process.cwd()}/src/materi`);
  const paths = files.map((file) => ({
    params: {
      slug: file.split(".")[0],
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const { slug } = context.params as Query;
  const raw = fs.readFileSync(
    `${process.cwd()}/src/materi/${slug}.md`,
    "utf-8"
  );
  const { data, content } = matter(raw);
  const mdxSource = await serialize(content);
  return {
    props: {
      data,
      content,
      mdxSource,
    },
  };
};

const index: NextPage<Props> = ({ content, data, mdxSource }) => {
  const { push } = useRouter();
  const components = { Syntax };
  return (
    <div className="flex justify-center w-full">
      <div className="grid place-items-center h-full p-4 max-w-xl">
        <span
          className="text-red-500 underline underline-offset-4 place-self-start mb-3 hidden md:block cursor-pointer"
          onClick={() => push("/materi")}
        >
          kembali
        </span>
        <div>
          <MDXRemote {...mdxSource} components={components} className="prose" />
        </div>
      </div>
    </div>
  );
};

export default index;
