import { Typography } from "@material-tailwind/react";
import bannerPng from "../images/banner.jpeg"; // Ensure the path is correct

export default function ImageWithCaption() {
  return (
    <figure className="relative hidden sm:block px-2">
      {/* Banner Image */}
      <img
        src={bannerPng}
        alt="Khetsing marketplace banner"
        className="h-96 w-full rounded-lg object-cover object-center"
      />

      {/* Overlay Caption */}
      <figcaption className="absolute top-12 left-0 h-full w-full flex items-center px-8">
        <div className="bg-black/50 p-4 text-white max-w-md rounded-bl-xl rounded-tl-lg rounded-br-xl">
          <Typography variant="h2" className="mb-2 font-semibold leading-tight">
            Rea u amohela Khetsing
          </Typography>
          <Typography className="text-sm">
            Struggling to make ends meet? Khetsing makes it easy to earn quickly, sell what you produce, and find support in every hustle.
          </Typography>
        </div>
      </figcaption>
    </figure>
  );
}

