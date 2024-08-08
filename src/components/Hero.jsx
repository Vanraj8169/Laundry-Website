const Hero = () => {
  return (
    <main className="flex flex-col md:flex-row bg-secondary-0">
      <div className="flex flex-col gap-10 p-3 md:p-6 lg:p-10 md:w-1/2">
        <h1 className="pt-10 text-5xl font-bold sm:text-6xl md:text-7xl">
          Your Professional{" "}
          <span className="text-tertiary-0">Friendly Laundromat</span>
        </h1>
        <p className="font-light leading-snug sm:text-lg md:text-xl">
          We handle your garments with the utmost care and attention, ensuring
          through Cleaning, Ironing and Folding.
        </p>
        <div className="flex gap-4 pb-[4rem] sm:pb-[6rem] md:pb-[8rem]">
          <button className="rounded-3xl bg-primary-0 text-white px-5 py-2 hover:bg-primary-hover sm:px-6 sm:py-3 md:px-8 md:py-4 sm:rounded-full md:rounded-full lg:rounded-full">
            Book Now
          </button>
          <button className="rounded-3xl px-5 py-2 border border-primary-0 hover:bg-primary-0 hover:text-white sm:px-6 sm:py-3 md:px-8 md:py-4 sm:rounded-full md:rounded-full lg:rounded-full">
            Schedule Time
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center md:w-1/2 bg-secondary-0">
        <img
          src="https://i.imghippo.com/files/5IliV1723112509.png"
          alt="Laundryman"
          className="mb-24"
        />
      </div>
    </main>
  );
};

export default Hero;
