export default function Page() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-gray-100 h-screen">
        <div className="bg-zinc-800 p-2 mx-6 rounded-2xl">
          <div className="group flex flex-col md:flex-row rounded-l-xl">
            <img
              className="object-cover rounded-xl h-80 md:w-60 transform group-hover:scale-110 md:rounded-r-none"
              src="https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg"
              alt=""
            />
            <div className="p-6 md:p-12">
              <h2 className="text-center text-white md:text-left p-2">
                Dance to the 70s funk and soul music
              </h2>
              <p className=" my-4 text-xs leading-5 tracking-wide text-center text-white md:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam
              </p>
              <div className="flex flex-col mt-5 space-y-4 md:space-x-3 md:flex-row md:space-y-0">
                <input
                  type="text"
                  placeholder="Email"
                  className="p-2 px-4 text-center text-white bg-zinc-800 border border-zinc-600 placeholder:text-center md:text-left placeholder:md:text-left focus:outline-none"
                />
                <button className="px-5 py-3 text-xs rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-700 hover:text-white border">
                  submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
