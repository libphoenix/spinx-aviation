import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-100">
        <h1 className="uppercase w-100 text-center font-bold text-4xl">Spinx Aviation</h1>
        <p className="w-100 text-center">website under construction</p>
        <img
          className="mx-auto"
          src="/road.png"
          alt="work in progress"
          width={100}
          height={100}
        />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
