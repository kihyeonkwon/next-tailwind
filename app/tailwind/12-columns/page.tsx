import { use, useEffect, useState } from "react";

// make interface for image
interface Image {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export default async function Page() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/photos?_limit=12"
  );
  const images: Image[] = await res.json();

  return (
    <>
      <div className="container mx-auto">
        <h1>Fixed Columns</h1>
        <div className="columns-2 gap-0">
          {images.map((image: any) => (
            <img src={image.url} alt={image.title} className="w-full" />
          ))}
        </div>
        <h1>Responsive Columns fit to xs</h1>
        <div className="columns-xs">
          {images.map((image: any) => (
            <img src={image.url} alt={image.title} className="w-full" />
          ))}
        </div>
        <h1>Responsive Columns</h1>
        <div className="flex flex-wrap">
          {images.map((image: any) => (
            <div className=" w-full md:w-1/2 lg:w-1/3">
              <div className="image-container relative m-2">
                <img src={image.url} alt={image.title} />
                <p className="absolute inset-0 px-2 pt-24 flex items-center justify-center  whitespace-normal">
                  {image.title}
                </p>
              </div>
            </div>
          ))}
        </div>
        <h1>Aspect Ratio</h1>
      </div>
    </>
  );
}
