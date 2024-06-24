const Hero = () => {
  return (
    <section className="py-12">
      <h1 className="text-5xl text-center font-bold">
        Find your next
        <br />
        dream job
      </h1>
      <form className="mt-5 flex gap-2 max-w-lg mx-auto">
        <input
          type="text"
          placeholder="Search phrase"
          className="border border-gray-400 w-full rounded-md py-2 px-3"
        />
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md">Search</button>
      </form>
    </section>
  );
};

export default Hero;
