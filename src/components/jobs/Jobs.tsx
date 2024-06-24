import Job from "./Job";

const Jobs = () => {
  return (
    <section className="bg-slate-200 py-4 rounded-2xl">
      <div className="container">
        <h1>Recent jobs</h1>
        <div className="flex flex-col gap-4">
          <Job />
          <Job />
          <Job />
          <Job />
          <Job />
          <Job />
          <Job />
          <Job />
        </div>
      </div>
    </section>
  );
};

export default Jobs;
