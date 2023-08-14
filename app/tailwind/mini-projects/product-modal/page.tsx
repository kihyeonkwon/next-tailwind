export default function Page() {
  return (
    <div className="bg-slate-200 min-h-screen flex justify-center flex-col items-center">
      <div className="flex flex-col overflow-hidden p-6 m-3 border rounded-xl bg-white space-y-10  md:-space-y-0 md:flex-row md:space-x-10 md:m-0 md:p-16">
        <img
          className="rounded-xl md:w-1/2 object-cover max-h-96 duration-1000 mx-auto hover:scale-150 "
          src="https://i.ebayimg.com/images/g/dn8AAOSwnzljGwif/s-l1200.jpg"
          alt=""
        />

        <div className="flex flex-col  space-y-4 text-left items-end">
          <div className="bg-black text-white inline-block rounded-full text-center px-4 py-1">
            Free Shipping
          </div>

          <h2 className="text-3xl font-bold text-right">
            Fender Japan Hybrid II Stratocaster
          </h2>
          <div className="line-through">$1590</div>
          <h1 className="text-5xl my-2">$1290</h1>
          <div className="text-slate-400">
            The offer is valid unti April 3 or as long as stock lasts!
          </div>
          <button className="group bg-blue-400  shadow-lg shadow-blue-900 hover:bg-blue-500 w-full rounded-xl text-white py-5 ">
            <p className="group-hover:animate-bounce">Add to cart</p>
          </button>
          <div className="flex space-x-3 items-center">
            <p>50+ pcs. in stock.</p>
            <div className="w-3 h-3 bg-green-400 duration-1000 rounded-full animate-pulse"></div>
          </div>
          <div className="flex flex-row w-full space-x-5">
            <button className="bg-white hover:bg-slate-100 flex-1 rounded-xl border border-slate-400 p-4">
              Add to Cart
            </button>
            <button className="bg-white hover:bg-slate-100 flex-1 rounded-xl border border-slate-400 p-4">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
