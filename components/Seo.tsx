import Head from "next/head";

export default function Seo({ title }: any) {
  return (
    <Head>
      <title>{title} NEXT movies</title>
    </Head>
  );
}
