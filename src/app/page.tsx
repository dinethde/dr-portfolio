import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans text-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col gap-10 justify-between py-20 px-16 sm:items-start s">
        <div className="flex flex-col gap-1">
          <h1 className="text-[1rem] font-mono font-normal">
            Dineth Ransandu Silva
          </h1>
          <h2 className="text-[1rem] font-mono font-normal text-[#858585]">
            Fullstack Developer & Design Engineer
          </h2>
        </div>

        <div className="flex flex-col gap-4 sm:items-start sm:text-left">
          <p className="text-[1rem] font-mono font-normal">Whoami</p>

          <p className="text-[1rem] font-mono font-normal text-[#858585]">
            I’m a self-taught full-stack design engineer who builds clean, fast,
            engaging web apps, with 5+ years of experience.
          </p>

          <p className="text-[1rem] font-mono font-normal text-[#858585]">
            Currently interning at
            <span className="text-highlighted ml-2">WSO2</span> on the Internal
            Apps team, Contributing to
            <span className="text-highlighted ml-2">
              wso2-open-operations
            </span>{" "}
            and
            <span className="text-highlighted ml-2">wso2-enterprise</span> and
            studying Computer Science at the University of Westminster.
          </p>

          <p className="text-[1rem] font-mono font-normal text-[#858585]">
            Building <span className="text-highlighted">#ds</span> a
            minimalistic, clean design system that sync with your code.
          </p>

          <p className="text-[1rem] font-mono font-normal text-[#858585]">
            This site is a temporary home while I rebuild my portfolio; I’m
            building in public so you can
            <a className="text-highlighted ml-2">follow along</a> and peek at
            the work.
          </p>
        </div>

        <div>
          <div className="flex gap-2 items-center font-mono font-normal cursor-heart flex-wrap">
            <p className="hover:text-[#ff7300] transition-colors duration-300 ">
              I’m
            </p>
            <p className="hover:text-[#ff7300] transition-colors duration-300">
              a
            </p>
            <Link
              className="text-highlighted"
              target="_blank"
              href={"https://www.github.com/dinethde"}
              rel="noopener noreferrer"
            >
              mosaic
            </Link>
            <p className="hover:text-[#ff7300] transition-colors duration-300">
              of
            </p>
            <p className="hover:text-[#ff7300] transition-colors duration-300">
              everyone
            </p>
            <p className="hover:text-[#ff7300] transition-colors duration-300">
              I’ve
            </p>
            <p className="hover:text-[#ff7300] transition-colors duration-300">
              ever
            </p>
            <p className="hover:text-[#ff7300] transition-colors duration-300">
              loved.
            </p>
          </div>

          <p className="font-fuggles text-[4rem]">Dineth De Silva</p>
        </div>
      </main>
    </div>
  );
}
