import Head from 'next/head'
import Login from "../components/Login";
import { useMoralis } from "react-moralis";
import Image from 'next/image';
export default function Home() {
  const { isAuthenticated, logout } = useMoralis();
  if (!isAuthenticated) return <Login />;
  return (
    // <div className="h-screen">
    //   <Head>
    //     <title>Metaverse Challenge</title>
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <h1>Welcome </h1>
    //   <button
    //       onClick={logout}
    //       className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse"
    //     >
    //       Logout from METAVERSE
    //     </button>
    // </div>
    <div className="bg-black relative text-white">
      <div className="flex flex-col absolute z-50 h-4/5 w-full items-center justify-center space-y-4">
        
          <button
          onClick={logout}
          className="bg-yellow-500 rounded-lg p-5 font-bold animate-bounce"
        >
          Logout from METAVERSE
        </button>
        {/* logo and button */}
      </div>
      <div className="w-full h-screen">
        <Image
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
        />
        {/* background image */}
      </div>
    </div>
  );
}
