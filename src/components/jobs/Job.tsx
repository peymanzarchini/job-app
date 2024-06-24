import { FaHeart } from "react-icons/fa";

const Job = () => {
  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow-sm mt-2 flex gap-4 relative">
        <div className="absolute top-4 right-4 cursor-pointer">
          <FaHeart fontSize={26} className="text-gray-200" />
        </div>
        <div className="content-center">
          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <img
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/168px-Spotify_logo_without_text.svg.png?20160123212544"
            }
            alt="logo"
            className="size-12"
          />
        </div>
        <div className="grow sm:flex">
          <div className="grow">
            <div className="text-gray-600 text-sm">Spotify</div>
            <div className="font-bold text-lg mb-1">Product designer</div>
            <div className="text-gray-600 text-sm ">
              Remote &middot; New York, US &middot; Full-time
            </div>
          </div>
          <div className="content-end text-gray-600 text-sm mt-2 sm:mt-0">2 hours ago</div>
        </div>
      </div>
    </>
  );
};

export default Job;
