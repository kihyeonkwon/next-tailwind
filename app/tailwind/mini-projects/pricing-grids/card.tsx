//interface for props
export interface CardProps {
  title: string;
  storage: string;
  price: string;
  privileges: string[];
}

export default function Card(props: CardProps) {
  return (
    <div className="bg-slate-700 rounded-xl text-white even:bg-violet-400">
      <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
        <div className="text-center uppercase">{props.price}</div>
        <h2 className="mt-10 font-serif text-5xl text-center">100GB</h2>
        <h3 className="mt-2 text-center">$1.99/Month</h3>
        <div className="flex justify-center ">
          <a
            href=""
            className="inline-block px-10 py-3 my-6 text-center border border-violet-600 rounded-lg duration-200 hover:border-violet-800"
          >
            Purchase
          </a>
        </div>
      </div>
      <div className="border-t border-slate-700">
        <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
          <ul className="space-y-4 text-center">
            {props.privileges.map((privilege) => {
              return <li>{privilege}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
