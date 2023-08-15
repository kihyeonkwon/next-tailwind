// create Image interface
interface Image {
  id: string;
  author: string;
  width: number;
  height: number;
  download_url: string;
}

export default async function Page() {
  const res = await fetch("https://picsum.photos/v2/list");
  const images: Image[] = await res.json();

  return (
    <div className="flex flex-col space-y-10 min-h-screen item-center justify-center px-10">
      <div className="flex items-center  justify-end space-x-5">
        <a href="#" className="mylink">
          Vector
        </a>
        <a href="#" className="mylink">
          Illustrations
        </a>
        <a href="#" className="mylink">
          Images
        </a>
        <a href="#" className="mylink">
          Icons
        </a>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex justify-between border-b">
          <input
            type="text"
            className="ml-6 border-none md:w-80 placeholder:font-thin focus:outline-none"
            placeholder="search"
          />
        </div>
        <button className="bg-black text-white rounded-xl py-3 px-14 shadow-2xl duration-200 hover:bg-slate-800">
          Upload{" "}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-2">
        {images.map((image: Image, index: number) => (
          <div
            className="first:col-span-2  first:row-span-2 group relative"
            key={index}
          >
            <img
              className="object-cover aspect-square "
              src={image.download_url}
              alt=""
            />
            <div className="absolute bottom-0 left-0 right-0 p-2 px-4 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-200">
              <div className="flex justify-between w-full">
                <div className="font-normal">
                  <p className="text-white text-sm">{image.author}</p>
                  <p className="text-white text-xs">
                    {image.width} x {image.height}
                  </p>
                </div>
                <div className="flex items-center">{/* svg of bookmar */}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
