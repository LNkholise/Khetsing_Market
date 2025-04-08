import React from "react";

export default function FeaturedImageGallery({ img1, img2, img3, img4 }) {
  const data = [img1, img2, img3, img4].filter(Boolean); // Remove null/undefined
  const [active, setActive] = React.useState(data[0]);

  return (
    <div className="grid gap-4">
      <div>
        <img
          className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
          src={active}
          alt="main"
        />
      </div>
      <div className="grid grid-cols-5 gap-4">
        {data.map((img, index) => (
          <div key={index}>
            <img
              onClick={() => setActive(img)}
              src={img}
              className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer"
              alt={`thumb-${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

