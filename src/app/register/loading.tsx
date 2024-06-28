import Image from "next/image";

const Loading = () => {
  return (
    <section className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center min-h-screen bg-white">
      <Image src="./loading.svg" alt="Loading" width={200} height={200} />
    </section>
  );
};

export default Loading;
