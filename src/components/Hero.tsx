const Hero = () => {
  return (
    <section className="container mt-16">
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
        <button className="bg-blue-600 text-white rounded-md w-28 h-10">Search</button>
      </form>
    </section>
  );
};

export default Hero;
