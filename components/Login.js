import Image from "next/image";
import { useMoralis } from "react-moralis";
import Head from 'next/head'

function Login() {
  const { authenticate } = useMoralis();

  return (
    <div className="h-screen">
      <Head>
        <title>Metaverse Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-black relative text-white">
        <div className="flex flex-col absolute z-50 h-4/5 w-full items-center justify-center space-y-4">
          <Image
            className="object-cover rounded-full"
            src="https://links.papareact.com/3pi"
            height={200}
            width={200}
          />
          <button
            onClick={authenticate}
            className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse"
          >
            Login to the METAVERSE
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
    </div>
  );
}

export default Login;
