import type { Metadata } from "next";

export default function Home() {
  return (
    <main>
      <div>
        <p className="font-bold text-[50px] ">Connect with people that you like</p>
        <p></p>
      </div>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Home - Po chat",
  description: "Connect with people",
};