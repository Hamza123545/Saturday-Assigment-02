import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center w-full overflow-hidden image">
      {/* Text Section */}
      <div className="px-10 md:w-1/2 mt-10 md:mt-0">
        <h1 className="text-center md:text-left text-[#055085] font-extrabold tracking-wider leading-10 sm:leading-none sm:text-5xl lg:text-6xl text-[2rem] whitespace-nowrap">
          Governor Sindh
        </h1>
        <h1 className="text-center md:text-left text-[#055085] font-normal tracking-wider leading-[2rem] sm:leading-[3rem] sm:text-4xl lg:text-[2.5rem] text-[1.5rem] whitespace-nowrap">
          Kamran Khan Tessori
        </h1>
        <p className="mt-5 text-center md:text-left text-[#14c2ed] font-bold tracking-wider leading-[2rem] sm:leading-[3rem] sm:text-4xl lg:text-[2.8rem] text-[1.5rem] whitespace-nowrap">
          Certified Cloud
          <br />
          Applied Generative AI
          <br />
          Engineer (GenEng)
        </p>
        <p className="my-5 text-center md:text-left text-[#055085] font-extrabold sm:text-2xl text-[1.25rem] whitespace-nowrap">
          Earn up to $5,000 / month
        </p>
        <p className="my-5 text-center md:text-left text-[#055085] font-bold tracking-wider sm:text-2xl md:w-[80%] text-[1.25rem] w-full">
          Now admissions are open in Hyderabad
        </p>

        {/* Call-to-Action Section */}
        <div className="mb-7 mt-5 flex flex-col items-center sm:mt-10 sm:flex-row sm:gap-5 md:mb-0">
          <a href="/apply" className="w-full md:w-auto">
            <button className="w-full md:w-52 rounded-md bg-[#055085] text-white text-sm sm:text-base font-semibold tracking-widest py-3 sm:py-4 text-center transition-all hover:translate-y-1">
              APPLY NOW
            </button>
          </a>
          <div className="mt-4 flex flex-col items-center sm:mt-0">
            <div className="text-[#055085] text-xl sm:text-3xl font-extrabold tracking-widest text-center">
              562,143
            </div>
            <div className="text-[#055085] text-xs sm:text-sm tracking-wider text-center">
              Accepted Applications
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative mt-7 flex w-full items-end justify-center md:m-auto md:justify-end">
        <Image
          src="/img/kt.png"
          alt="kamran tessori"
          width={1600}
          height={1212}
          className="min-w-[900px] lg:w-[600px] h-auto md:ml-40"
        />
      </div>
    </div>
  );
}
