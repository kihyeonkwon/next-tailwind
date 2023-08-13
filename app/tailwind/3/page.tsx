export default function Page() {
  return (
    <div className="container mx-auto">
      <h1>Article One</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro sequi
        officia et distinctio labore molestiae, accusantium cum aliquam totam
        repudiandae cupiditate fuga, consectetur similique ut minus at, ex
        corporis. Repudiandae?
      </p>
      <div className="bg-slate-100 m-2">m-2</div>
      <div className="bg-slate-100 mx-2">mx-2</div>
      <div className="bg-slate-100 ml-2">ml-2</div>
      <div className="bg-slate-100 mr-2">mr-2</div>
      <div className="bg-slate-100 my-2">my-2</div>

      <div className="flex space-x-4 mt-24">
        <div className="bg-slate-100">1</div>
        <div className="bg-slate-100">2</div>
        <div className="bg-slate-100">3</div>
      </div>

      <div className="flex flex-col space-y-4 mt-24">
        <div className="bg-slate-100">1</div>
        <div className="bg-slate-100">2</div>
        <div className="bg-slate-100">3</div>
      </div>
    </div>
  );
}
