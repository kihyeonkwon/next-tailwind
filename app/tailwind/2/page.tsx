export default function Page() {
  return (
    <div>
      <h1>text colors</h1>
      <p className="text-black">Colors of Tailwind</p>
      <p className="text-white bg-black">Colors of Tailwind</p>
      <p className="text-red-50">text red 50</p>
      <p className="text-red-100">text red 100</p>
      <p className="text-red-200">text red 200</p>
      <p className="text-red-300">text red 300</p>
      <p className="text-red-400">text red 400</p>
      <p className="text-red-500">text red 500</p>
      <p className="text-red-600">text red 600</p>
      <p className="text-red-700">text red 700</p>
      <p className="text-red-800">text red 800</p>
      <p className="text-red-750">text red 750</p>
      <p className="text-red-890">text red 890</p>
      <p className="text-red-900">text red 900</p>
      <p className="text-red-1000">text red 1000</p>

      <h1>background colors</h1>
      <p className="bg-slate-50">bg slate 50</p>
      <p className="bg-slate-100">bg slate 100</p>
      <p className="bg-slate-200">bg slate 200</p>
      <p className="bg-slate-300">bg slate 300</p>
      <p className="bg-slate-400">bg slate 400</p>
      <p className="bg-slate-500">bg slate 500</p>
      <p className="bg-slate-600">bg slate 600</p>
      <p className="bg-slate-700">bg slate 700</p>
      <p className="bg-slate-800">bg slate 800</p>
      <p className="bg-slate-900">bg slate 900</p>

      <h1>Text Underline</h1>
      <p className="underline">Underline</p>
      <p className="underline decoration-yellow-300">Underline</p>
      <p className="underline decoration-blue-300">Underline</p>

      <h1>Border Colors</h1>
      <p className="border border-black">Border</p>
      <p className="border border-red-500">Border</p>
      <p className="border border-blue-100">Border</p>

      <h1>Divide Colors</h1>
      <div className="divide-y divide-green-500">
        <p>Divide</p>
        <p>Divide</p>
        <p>Divide</p>
        <p>Divide</p>
        <p>Divide</p>
      </div>

      <h1>Outline Colors</h1>
      <button className="outline outline-red-500 border border-blue-700">
        Outline
      </button>
      <p className="outline outline-red-500">Outline</p>

      <h1>Box Shadow Colors</h1>
      <button className="shadow-lg bg-cyan-500 shadow-purple-500">
        Box Shadow
      </button>

      <h1>Accent Colors</h1>
      <input type="checkbox" className="accent-purple-500" checked />
    </div>
  );
}
