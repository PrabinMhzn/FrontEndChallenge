import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between p-24 bg-slate-200">
      <div className="flex flex-col  justify-center items-center bg-slate-50 p-8 w-2/3 rounded-md">
        <h1 className="font-bold text-4xl">Front End Mentor Challenges</h1>
        <ul className="mt-8">
          <li>
            <Link href="/challenge_1">
              <h1 className="hover:text-slate-300 bg-slate-500 p-4 rounded-lg">
                challenge 1 - QR code component
              </h1>
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
