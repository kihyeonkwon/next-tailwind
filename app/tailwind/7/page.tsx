export default function Page() {
  return (
    <>
      <h1>Background Classes</h1>

      <div
        className="h-64 bg-cover bg-center w-screen"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80)",
        }}
      ></div>
      <h1>Gradients</h1>
      <div className="h-24 bg-gradient-to-r from-cyan-500 to-red-500"></div>
      <h1>Shadows</h1>
      <div className="w-96 my-6 mx-auto shadow">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        mollitia asperiores ullam culpa hic omnis optio, animi, magni incidunt
        nobis dolorum excepturi id suscipit. Ea hic natus placeat veritatis
        quisquam?
      </div>
      <div className="w-96 my-6 mx-auto shadow-md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        mollitia asperiores ullam culpa hic omnis optio, animi, magni incidunt
        nobis dolorum excepturi id suscipit. Ea hic natus placeat veritatis
        quisquam?
      </div>
      <div className="w-96 my-6 mx-auto shadow-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        mollitia asperiores ullam culpa hic omnis optio, animi, magni incidunt
        nobis dolorum excepturi id suscipit. Ea hic natus placeat veritatis
        quisquam?
      </div>
      <div className="w-96 my-6 mx-auto shadow-xl shadow-blue-500/50">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        mollitia asperiores ullam culpa hic omnis optio, animi, magni incidunt
        nobis dolorum excepturi id suscipit. Ea hic natus placeat veritatis
        quisquam?
      </div>
      <div className="w-96 my-6 mx-auto shadow-xl shadow-red-500/50">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        mollitia asperiores ullam culpa hic omnis optio, animi, magni incidunt
        nobis dolorum excepturi id suscipit. Ea hic natus placeat veritatis
        quisquam?
      </div>

      <h1>Mix Blend</h1>

      <div className="flex justify-center -space-x-24">
        <div className="bg-blue-400 mix-blend-multiply">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel debitis
          optio sapiente animi alias facilis non tempora aut. Eveniet culpa
          velit distinctio a facere eos, quas consequatur iusto sunt quo?
        </div>
        <div className="bg-pink-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel debitis
          optio sapiente animi alias facilis non tempora aut. Eveniet culpa
          velit distinctio a facere eos, quas consequatur iusto sunt quo?
        </div>
      </div>
    </>
  );
}
