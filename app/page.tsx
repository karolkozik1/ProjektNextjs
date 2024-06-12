import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
          <h1 className="text-red-600 text-3xl text-bold">
          Strona główna
          </h1>
          <p className="text-center">Karol Kozik, nr indeksu 119772</p> 
          <p className="text-center"><Link href="/test"> Druga strona</Link></p>
      </div>
    </main>
  );
}
