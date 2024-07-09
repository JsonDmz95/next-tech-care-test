import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {


  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=''>
        <Header />
        <h1>Hello from index.js</h1>
      </main>
    </>
  );
}