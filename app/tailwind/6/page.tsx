export default function Page() {
  return (
    <>
      <h1>Positioning</h1>
      <div className="relative left-40 w-1/2 h-12 bg-blue-500">
        <div className="absolute bottom-0 right-0 bg-red-500">absolute</div>
      </div>
      <h1>top left corner</h1>
      <div className="relative h-32 w-32 bg-yellow-100">
        <div className="absolute top-0 left-0 h-16 w-16 bg-green-100"></div>
      </div>
      <div className="relative h-32 w-32 bg-yellow-100">
        <div className="absolute top-0 right-0 h-16 w-16 bg-green-100"></div>
      </div>
      <div className="relative h-32 w-32 bg-yellow-100">
        <div className="absolute bottom-0 left-0 h-16 w-16 bg-green-100"></div>
      </div>
      <div className="relative h-32 w-32 bg-yellow-100">
        <div className="absolute bottom-0 right-0 h-16 w-16 bg-green-100"></div>
      </div>

      <h1>span top edge</h1>

      <div className="relative h-32 w-32 bg-yellow-100">
        <div className="absolute inset-x-0 top-0 h-8 bg-blue-100"></div>
      </div>
      <h1>span bottom edge</h1>
      <div className="relative h-32 w-32 bg-yellow-100">
        <div className="absolute inset-x-0 bottom-0 h-8 bg-blue-100"></div>
      </div>
      <h1>span right edge</h1>
      <div className="relative h-32 w-32 bg-yellow-100">
        <div className="absolute inset-y-0 right-0 w-8 bg-blue-100"></div>
      </div>
      <h1>span left edge</h1>
      <div className="relative h-32 w-32 bg-yellow-100">
        <div className="absolute inset-y-0 left-0 w-8 bg-blue-100"></div>
      </div>

      <h1>display classes</h1>
      <div>
        Lorem ipsum dolor sit amet
        <span className="inline">this is inline</span>consectetur adipisicing
        elit. Magnam <span className="block">this is block</span>deleniti
        maiores ea laborum doloribus facere culpa mollitia quos,
        <span className="hidden">hidden</span>quam sequi,
        <span className="inline-block">inline block</span>reprehenderit facilis
        eveniet eaque dolorum aliquam cum blanditiis saepe quis.
      </div>
      <h1>z index</h1>
      <div className="realtive h-36">
        <div className="absolute w-24 h-24 left-12 z-0 bg-blue-500">1</div>
        <div className="absolute w-24 h-24 left-24 z-10 bg-red-500">1</div>
        <div className="absolute w-24 h-24 left-36 z-20 bg-green-500">1</div>
        <div className="absolute w-24 h-24 left-48 z-30 bg-orange-500">1</div>
        <div className="absolute w-24 h-24 left-60 z-40 bg-purple-500">1</div>
      </div>

      <div className="w-1/2">
        <img
          src="https://cdn-tgreen.bizhost.kr/files/goods/613129/1653644977_1.jpg"
          alt=""
          className=" w-48 float-left mr-4 mb-4"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          unde. Ex sint tempore quia quis consequatur placeat, et officiis
          expedita. Distinctio totam magnam eaque officiis? Quod alias ullam in
          dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Debitis explicabo consequatur ea itaque nobis sunt minima provident
          esse, aspernatur quisquam repellat, fugiat quidem reiciendis deserunt
          pariatur quas, et illo enim. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Pariatur, unde. Ex sint tempore quia quis
          consequatur placeat, et officiis expedita. Distinctio totam magnam
          eaque officiis? Quod alias ullam in dolorum. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Debitis explicabo consequatur ea
          itaque nobis sunt minima provident esse, aspernatur quisquam repellat,
          fugiat quidem reiciendis deserunt pariatur quas, et illo enim. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Pariatur, unde. Ex
          sint tempore quia quis consequatur placeat, et officiis expedita.
          Distinctio totam magnam eaque officiis? Quod alias ullam in dolorum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          explicabo consequatur ea itaque nobis sunt minima provident esse,
          aspernatur quisquam repellat, fugiat quidem reiciendis deserunt
          pariatur quas, et illo enim.
        </p>
      </div>
    </>
  );
}
