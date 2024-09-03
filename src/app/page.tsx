import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between p-24 bg-slate-200 w-screen font-inter">
      <div className="flex flex-col justify-center items-center bg-slate-50 p-8 rounded-md min-w-96 mt-8">
        <h1 className="font-bold text-4xl">Front End Mentor Challenges</h1>
        <ul className="flex flex-col mt-8 gap-8 w-full text-center px-8">
          <li className=" flex  flex-col text-center">
            <Link href="/challenge_1">
              <h1 className="hover:text-slate-300 bg-slate-500 p-4 rounded-lg hover:scale-110 duration-300">
                challenge 1 - QR code component
              </h1>
            </Link>
          </li>
          <li>
            <Link href="/challenge_2">
              <h1 className="hover:text-slate-300 bg-slate-500 p-4 rounded-lg hover:scale-110 duration-300">
                challenge 2 - Blog preview card Menu
              </h1>
            </Link>
          </li>
          <li>
            <Link href="/challenge_3">
              <h1 className="hover:text-slate-300 bg-slate-500 p-4 rounded-lg hover:scale-110 duration-300">
                challenge 3 -Social Links profile main
              </h1>
            </Link>
          </li>
          <li>
            <Link href="/challenge_4">
              <h1 className="hover:text-slate-300 bg-slate-500 p-4 rounded-lg hover:scale-110 duration-300">
                challenge 4 -Recipe page
              </h1>
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
