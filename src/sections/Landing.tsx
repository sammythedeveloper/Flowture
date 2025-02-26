export const Landing = () => {
  return (
    <section className=" py-24 md:py-52 overflow-x-clip ">
      <div className=" container">
        <p className=" uppercase font-extrabold text-center text-zinc-500 tracking-wider">
          Introducing Flowture
        </p>
        <h1 className=" font-heading font-black text-5xl md:text-6xl lg:text-7xl text-center mt-4 max-w-3xl mx-auto ">
          Where Time Meets Efficiency
        </h1>
        <p className=" text-center text-xl md:text-2xl mt-6 text-zinc-400 max-w-xl mx-auto ">
          Flowture is your smart planner that helps you organize,prioritize and
          achieve moree with less effort day by day.
        </p>
        <div className=" flex justify-center mt-24">
          <div className=" inline-flex relative z-0 "></div>
        </div>
        <div className=" flex justify-center flex-col items-center mt-40 md:mt-80 gap-4 ">
          <div className=" h-10 w-5 outline outline-[6px] outline-fuchsia-500/10 inline-flex justify-center pt-2 rounded-full">
            <div className=" justify-center pt-2 rounded-full "></div>
          </div>
          <p className="uppercase text-zinc-500 font-extrabold tracking-wider">
            Scroll to learn more
          </p>
        </div>
      </div>
    </section>
  );
};
