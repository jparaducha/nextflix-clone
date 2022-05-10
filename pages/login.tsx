import Head from "next/head";
import Image from "next/image";

export default function login() {
  return (
    <div className="relative flex h-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
    <Head>
      <title>Nextflix - Login</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    
    <Image
        src="https://rb.gy/p2hphi"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
      />
    <img
          src="https://rb.gy/ulxxee"
          width={150}
          height={150}
          className="cursor-pointer object-contain absolute left-4 top-4 md:left-10 md:top-6"
        />


    <form className="relative mt-24 rounded py-10 space-y-8 bg-black/75 px-6 md:mt-0 md:max-w-md md:px-14">
      <h1 className="text-4xl font-semibold">Sign In</h1>
      <div className="space-y-4">
        <label className="inline-block w-full">
          <input type="email" placeholder="Email"  className="input"/>
        </label>
        <label className="inline-block w-full">
          <input type="password" placeholder="Password"  className="input"/>
        </label>
      </div>

      <button className="w-full rounded bg-[#e50914] py-3 font-semibold">Sign In</button>

      <div className="text-[#777]">
        New to Netflix? {"  "}
        <button className="text-white hover:underline">
          Sign up now
        </button>
      </div>
    </form>

    
    </div>
  )
}
