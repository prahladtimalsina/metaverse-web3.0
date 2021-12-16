import Head from 'next/head'
import Login from "../components/Login";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Metaverse Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>welocme to metaverse challenge</h1>
      <Login />
    </div>
  );
}
