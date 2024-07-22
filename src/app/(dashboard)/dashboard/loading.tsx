import Image from "next/image";

const Loading = () => {
  return (
    <>
      <section className="flex items-center justify-center min-h-screen bg-white">
        <Image src={"./loading.svg"} alt="Loading" width={200} height={200} />
      </section>
    </>
  );
};

export default Loading;
