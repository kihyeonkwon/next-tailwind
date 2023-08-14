export default function Page() {
  return (
    <div className="bg-slate-200 h-screen flex justify-center flex-col items-center">
      <div className="p-5 border rounded-xl bg-white">
        <div className="flex flex-col md:flex-row">
          <img
            className="rounded-xl md:w-1/2 object-cover max-h-96"
            src="https://i.ebayimg.com/images/g/dn8AAOSwnzljGwif/s-l1200.jpg"
            alt=""
          />
          <div className="flex flex-col items-start">
            <div className="bg-black text-white rounded-full text-center px-4 py-1">
              Free Shipping
            </div>
            <h2 className="text-3xl font-bold my-3">
              Fender Japan Hybrid II Stratocaster
            </h2>
            <div className="line-through">$1590</div>
            <h1 className="text-5xl my-2">$1290</h1>
            <div className="text-slate-400 my-2">
              The offer is valid unti April 3 or as long as stock lasts!
            </div>
            <button className="bg-blue-400 my-4 shadow-lg shadow-blue-900 hover:bg-blue-500 w-full rounded-xl text-white py-5 ">
              Add to cart
            </button>
            <div className="my-4">50+ pcs. in stock.</div>
            <div className="flex flex-row my-2 w-full space-x-5">
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
    </div>
  );
}
