import Link from "next/link";

const Nav = () => {
  return (
    <div className=" fixed flex  flex-col items-center bg-slate-800 p-8 mb-8 w-screen  ">
      <Link href="/">
        <h1 className="bg-slate-400 bg-opacity-50 px-4 py-2 hover:scale-110 rounded-lg text-white">
          Go Back
        </h1>
      </Link>
    </div>
  );
};

export default Nav;
