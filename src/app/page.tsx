import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-[url('/aeroplane.png')] bg-cover bg-center h-96">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-96">
        <h1 className="w-96 text-center font-semibold text-4xl">We are comming soon</h1>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
