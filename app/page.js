import Image from "next/image";
import Link from "next/link";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div>
      <Navigation />
      <h1>THE WILD OASIS</h1>
      <Link href="/cabins">Explore Luxury cabins</Link>
    </div>
  );
}
