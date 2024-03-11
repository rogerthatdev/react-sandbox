import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer"

function Body () {
  return (
    <h3>BODY</h3>
  )
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <Body />
      <Footer />
    </main>
  );
}
