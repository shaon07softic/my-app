import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24 gap-4">
      <h1 className="text-3xl font-bold underline">Docker, Next.js and jenkins Project</h1>
      <Image
        src={
          "https://images.unsplash.com/photo-1699730132083-360f1d7a8f83?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        width={500}
        height={500}
        alt="hello"
      />
      <Image src={`/dd.jpg`} width={500} height={500} alt="hello" />
    </main>
  );
}
