export default function Page() {
  return (
    <>
      <div>
        <a
          href="#top"
          className="fixed bottom-10 right-10 bg-orange-300 p-3 rounded-full hover:bg-orange-500"
        >
          To the top?
        </a>
        <h1 id="top">Interactivity</h1>
        <div>
          <ul>
            <li>hover: 위에 올릴때</li>
            <li>active : 누르고 있을때</li>
            <li>focuse : 한번 누르고 나면 고정</li>
          </ul>
        </div>
        <button className="bg-black text-white py-3 px-5 rounded-lg m-3 hover:bg-orange-500 hover:text-white focus:bg-green-500">
          Button
        </button>
        <button className="bg-black text-white py-3 px-5 rounded-lg m-3 hover:bg-orange-500 hover:text-white active:bg-green-500">
          Button
        </button>

        <h1>Styling based on parent state</h1>
        <div className="group block max-w-xs max-auto rounded-lg p-6 bg-yellow-100 shadow-lg space-y-3 hover:bg-sky-500">
          <h3 className="group-hover:text-white">Card Title</h3>
          <p className="group-hover:text-white">This is the card text</p>
        </div>

        <ul className="container mx-auto">
          <h1>Items with same classname can have different outcome</h1>
          <li className="first:underline first:decoration-wavy even:bg-slate-500">
            Item 1
          </li>
          <li className="first:underline first:decoration-wavy even:bg-slate-500">
            Item 2
          </li>
          <li className="first:underline first:decoration-wavy even:bg-slate-500">
            Item 3
          </li>
          <li className="first:underline first:decoration-wavy even:bg-slate-500">
            Item 4
          </li>
        </ul>

        <h1>Appearance</h1>
        <select>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <select className="appearance-none">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        <h1>cursor</h1>
        <button className="bg-black text-white py-3 px-5 rounded-lg m-3 cursor-not-allowed">
          Submit
        </button>
        <button className="bg-black text-white py-3 px-5 rounded-lg m-3 cursor-text">
          Submit
        </button>
        <button className="bg-black text-white py-3 px-5 rounded-lg m-3 cursor-move">
          Submit
        </button>
        <button className="bg-black text-white py-3 px-5 rounded-lg m-3 cursor-context-menu">
          Submit
        </button>
        <button className="bg-black text-white py-3 px-5 rounded-lg m-3 cursor-progress">
          Submit
        </button>

        <h1>User Select</h1>
        <p className="select-none">
          Unselectable! Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Impedit ab hic, natus sequi, quos animi esse minus, expedita
          ipsam voluptatem quis incidunt reprehenderit officiis dolorem nihil
          voluptatum voluptates. Cupiditate, voluptas.
        </p>
      </div>
    </>
  );
}
