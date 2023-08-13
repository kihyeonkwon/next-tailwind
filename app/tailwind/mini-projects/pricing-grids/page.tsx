import Card, { CardProps } from "./card";

export default function Page() {
  const cardData: CardProps[] = [
    {
      title: "Basic",
      storage: "100GB",
      price: "$1.99/Month",
      privileges: ["100GB Storage", "100GB Storage", "100GB Storage"],
    },
    {
      title: "Pro",
      storage: "500GB",
      price: "$4.99/Month",
      privileges: ["500GB Storage", "500GB Storage", "500GB Storage"],
    },
    {
      title: "Premium",
      storage: "1TB",
      price: "$9.99/Month",
      privileges: ["1TB Storage", "1TB Storage", "1TB Storage"],
    },
  ];
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-800">
      <div className="flex flex-col my-6 space-y-6 md:space-y-0 md:space-x-6 md:flex-row md:my-0">
        {cardData.map((card) => {
          return <Card {...card}></Card>;
        })}
      </div>
    </div>
  );
}
