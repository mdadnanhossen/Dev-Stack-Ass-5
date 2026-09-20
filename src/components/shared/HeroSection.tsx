import banner from "../../assets/banner-stack.png";

const HeroSection = () => {
  return (
    <div className="flex justify-between items-center container mx-auto ">
      <div className="">
        <h1 className="text-5xl font-extrabold text-slate-900">
          Build Your Ideal
        </h1>
        <h1 className="brand-gradient text-5xl font-bold mb-8">
          Development Stack
        </h1>
        <p className="mb-8 max-w-xl">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="flex gap-2">
          <button className="brand-button text-white rounded-lg px-5 py-2.5">
            Explore Technologies
          </button>
          <button className="px-5 py-2.5 rounded-lg border">Learn More</button>
        </div>
      </div>
      <img src={banner} alt="" />
    </div>
  );
};

export default HeroSection;
