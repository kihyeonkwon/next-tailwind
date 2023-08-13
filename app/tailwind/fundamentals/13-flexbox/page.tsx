export default function Page() {
  return (
    <div>
      <h1>Flex and Alignment</h1>
      <div className="flex h-72 w-full items-start bg-gray-100 border-4 border-blue-600">
        <div className="p-10 border border-blue-300 bg-blue-100">01</div>
        <div className="p-10 border border-blue-300 bg-blue-100">02</div>
        <div className="p-10 border border-blue-300 bg-blue-100">03</div>
        <div className="p-10 border border-blue-300 bg-blue-100">04</div>
      </div>
      <div className="flex h-72 w-full items-end bg-gray-100 border-4 border-blue-600">
        <div className="p-10 border border-blue-300 bg-blue-100">01</div>
        <div className="p-10 border border-blue-300 bg-blue-100">02</div>
        <div className="p-10 border border-blue-300 bg-blue-100">03</div>
        <div className="p-10 border border-blue-300 bg-blue-100">04</div>
      </div>
      <div className="flex h-72 w-full justify-center items-center bg-gray-100 border-4 border-blue-600">
        <div className="p-10 border border-blue-300 bg-blue-100">01</div>
        <div className="p-10 border border-blue-300 bg-blue-100">02</div>
        <div className="p-10 border border-blue-300 bg-blue-100">03</div>
        <div className="p-10 border border-blue-300 bg-blue-100">04</div>
      </div>
      <div className="flex h-72 w-full justify-end items-center bg-gray-100 border-4 border-blue-600">
        <div className="p-10 border border-blue-300 bg-blue-100">01</div>
        <div className="p-10 border border-blue-300 bg-blue-100">02</div>
        <div className="p-10 border border-blue-300 bg-blue-100">03</div>
        <div className="p-10 border border-blue-300 bg-blue-100">04</div>
      </div>

      <h1>Grow and Shrink</h1>
      <div className="flex  w-full bg-gray-100 border-4 border-blue-600">
        <div className="w-64 p-10 border border-blue-300 bg-blue-100">01</div>
        <div className="w-64 flex-none p-10 border border-blue-300 bg-blue-100">
          02 flex-none
        </div>
        <div className="w-64 flex-auto p-10 border border-blue-300 bg-blue-100">
          03 flex-auto
        </div>
        <div className="w-64 flex-1 p-10 border border-blue-300 bg-blue-100">
          04 flex-1
        </div>
        <div className="p-10 border border-blue-300 bg-blue-100">05</div>
        <div className="p-10 border border-blue-300 bg-blue-100">06</div>
        <div className="p-10 border border-blue-300 bg-blue-100">07</div>
        <div className="p-10 border border-blue-300 bg-blue-100">08</div>
      </div>

      <div className="flex text-center">
        <div className="flex-1 bg-blue-300">flex-1</div>
        <div className="flex-1 bg-blue-300">flex-1</div>
        <div className="flex-1 bg-blue-300">flex-1</div>
      </div>
    </div>
  );
}
