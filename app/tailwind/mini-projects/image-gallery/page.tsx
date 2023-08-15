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
    <div className="flex flex-col space-y-10 min-h-screen item-center justify-center">
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
        <input type="text" />
        <button className="bg-black text-white rounded-xl py-3 px-8 hover:bg-slate-800">
          Upload{" "}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-2">
        {images.map((image: Image, index: number) => (
          <div className="first:col-span-2  first:row-span-2" key={index}>
            <img
              className="object-cover aspect-square "
              src={image.download_url}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}
