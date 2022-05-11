import { spawn } from "child_process";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";

interface Inputs {
  email: string,
  password: string
}

export default function login() {
  const [login, setLogin] = useState(false);
  const { signIn, signUp} = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState : {errors}
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async ({password, email}) => {
    if(login){
      await signIn(email, password);
    }else{
      await signUp(email, password);
    }


  };

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


    <form onSubmit={handleSubmit(onSubmit)} className="relative mt-24 rounded py-10 space-y-8 bg-black/75 px-6 md:mt-0 md:max-w-md md:px-14">
      <h1 className="text-4xl font-semibold">Sign In</h1>
      <div className="space-y-4">
        <label className="inline-block w-full">
          <input type="email" placeholder="Email"  className="input"
          {...register("email", { required: true})}/>
          { errors.email && <p className="p-1 text-[13px] text-orange-500">This field is required</p> }
        </label>
        <label className="inline-block w-full">
          <input type="password" placeholder="Password"  className="input"
          {...register("password", { required: true })}/>
          { errors.password && <p className="p-1 text-[13px] text-orange-500">This field is required</p> }
        </label>
      </div>

      <button className="w-full rounded bg-[#e50914] py-3 font-semibold"
      onClick={()=> setLogin(true)}
      >Sign In</button>

      <div className="text-[#777]">
        New to Netflix? {"  "}
        <button className="text-white hover:underline"
        onClick={()=> setLogin(false)}
        >
          Sign up now
        </button>
      </div>
    </form>

    
    </div>
  )
}
