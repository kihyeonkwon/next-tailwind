//interface for item
interface Item {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default async function Page() {
  // get dummy data from jsonplaceholder using fetch
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const data: Item[] = await response.json();

  return (
    <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-2">
      {data.map((item: Item) => (
        <div className=" bg-white dark:bg-gray-800 dark:text-white shadow-lg shadow-emerald-200 px-8 py-4 my-4">
          <h1>{item.title}</h1>
          <h2>{item.userId}</h2>
          <p className="text-lg">{item.completed}</p>
        </div>
      ))}
    </div>
  );
}
