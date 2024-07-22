import Button from "../ui/Button";
import TitlePage from "../ui/TitlePage";

const Hero = () => {
  return (
    <section className="container mt-16">
      <TitlePage>
        Find your next <br /> dream job
      </TitlePage>
      <form className="mt-5 flex gap-2 max-w-lg mx-auto">
        <input
          type="text"
          placeholder="Search phrase"
          className="border border-gray-400 w-full rounded-md py-2 px-3"
        />
        <Button type="submit" className="rounded-md w-28 h-[42px]">
          Search
        </Button>
      </form>
    </section>
  );
};

export default Hero;
