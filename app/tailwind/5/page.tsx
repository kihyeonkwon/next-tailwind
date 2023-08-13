export default function Page() {
  return (
    <>
      <h1>Width</h1>
      <div className="bg-black text-blue-300 w-4">Hello </div>
      <div className="bg-black text-blue-300 w-10">Hello </div>
      <div className="bg-black text-blue-300 w-48">Hello </div>
      <div className="bg-black text-blue-300 w-96">Hello </div>

      <h1>Percentages</h1>
      <div className="bg-black text-blue-300 w-1/2 hover:w-full">Hello </div>
      <div className="bg-black text-blue-300 w-1/3">Hello </div>
      <div className="bg-black text-blue-300 w-1/4">Hello </div>
      <div className="bg-black text-blue-300 w-full">Hello </div>

      <h1>width of the viewport</h1>
      <div className="bg-blue-500 text-white w-screen">Hello </div>

      <div className="w-screen bg-blue-500 p-4">
        This element uses <code>w-screen</code> and spans the entire screen
        width.
      </div>

      <div className="bg-gray-200 p-4">
        <div className="w-screen bg-blue-500">
          This element uses <code>w-screen</code> and spans the entire screen
          width.
        </div>
        <div className="w-full bg-green-300 p-4">
          This element uses <code>w-full</code> and fills the width of its
          parent container.
        </div>
      </div>

      <h1>Max Width</h1>
      <div className="bg-gray-300 max-w-6xl mx-auto">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius voluptate
        consectetur inventore expedita molestiae. Quam harum suscipit totam
        reiciendis doloremque ut? Rerum, a vel dignissimos nihil dolorem earum
        sapiente reprehenderit.
      </div>

      <h1>height</h1>
      <div className="flex  items-center">
        <div className="bg-orange-500 w-20 h-24 text-center">Hi</div>
        <div className="bg-orange-500 w-20 h-3">Hi</div>
        <div className="bg-orange-500 w-20 h-22">Hi</div>
        <div className="bg-orange-500 w-20 h-40">Hi</div>
      </div>
    </>
  );
}
