export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-rose-50">
      <div className="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
        <div className="p-6 md:p-20 space-y-2">
          <h2 className="font-mono mb-5 text-4xl font-bold">Login</h2>
          <p className="max-w-sm mb-12 font-sans font-light text-gray-600">
            Log in to your account to continue.
          </p>
          <input
            placeholder="email"
            type="text"
            className="w-full p-6 border border-gray-300 rounded-md placeholder:font-sans placholder:font-light"
          />
          <div className="flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0">
            <div className="font-thin text-cyan-700">Forgot pasword</div>
            <button className="w-full md:w-auto flex justify-center items-center p-6 space-x-4 font-sans font-bold text-white rounded-md shadow-lg px-9 bg-cyan-700 shadow-cyan-100 hover:bg-opcacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150">
              <span>next</span>
            </button>
          </div>
          <div className="border-b p-2"></div>
          <p className="py-6 text-sm font-thin text-center text-gray-400">
            or log in with
          </p>
          <div className="flex flex-col space-x-0 space-y-6 md:flex-row md:space-x-y md:space-y-0">
            <button className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2">
              <img
                className="w-9"
                src="https://img.freepik.com/premium-vector/blue-social-media-logo_197792-1759.jpg"
                alt=""
              />
              <span className="font-thin">Facebook</span>
            </button>
            <button className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2">
              <img
                className="w-9"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png"
                alt=""
              />
              <span className="font-thin">Google</span>
            </button>
          </div>
        </div>
        <img
          className="w-[430px] hidden md:block object-cover"
          src="https://pixlr.com/images/index/remove-bg.webp"
          alt=""
        />
      </div>
    </div>
  );
}
