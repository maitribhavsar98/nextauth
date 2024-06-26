"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const SessionServer = dynamic(() => import("./nextauth/SessionServer"), { ssr: false });
const SessionClient = dynamic(() => import("./nextauth/SessionClient"), { ssr: false });

export default function Home() {
  // const router = useRouter();
  // const navigate = (page: any) => {
  //   router.push(`/${page}`);
  // };

  return (
    <main>
      <h1>Routing | Navigation</h1>
      {/* <Link href="/login">Login</Link> <br />
      <Link href="/about">About</Link> <br /> */}
      {/* <button onClick={() => router.push("/colors")}>Go To Colors</button> */}
      {/* Alternative (create seperate function) */}
      {/* <button onClick={() => navigate("login")}>Go To Login Page</button> */}
      <SessionClient />
    </main>
  );
}