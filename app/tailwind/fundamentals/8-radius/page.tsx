export default function Page() {
  return (
    <div>
      <h1>Borders</h1>
      <div className="max-w-lg m-3 p-5 border">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, ad!
        Quidem nemo quibusdam nisi deleniti! Facere, omnis. Perspiciatis earum
        incidunt quam maiores eius alias. Rerum quos eligendi dignissimos ipsam
        molestias.
      </div>
      <div className="max-w-lg m-3 p-5 border-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, ad!
        Quidem nemo quibusdam nisi deleniti! Facere, omnis. Perspiciatis earum
        incidunt quam maiores eius alias. Rerum quos eligendi dignissimos ipsam
        molestias.
      </div>
      <div className="max-w-lg m-3 p-5 border-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, ad!
        Quidem nemo quibusdam nisi deleniti! Facere, omnis. Perspiciatis earum
        incidunt quam maiores eius alias. Rerum quos eligendi dignissimos ipsam
        molestias.
      </div>
      <div className="max-w-lg m-3 p-5 border-4 border-red-500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, ad!
        Quidem nemo quibusdam nisi deleniti! Facere, omnis. Perspiciatis earum
        incidunt quam maiores eius alias. Rerum quos eligendi dignissimos ipsam
        molestias.
      </div>
      <div className="max-w-lg m-3 p-5 border-l-4 border-red-500 rounded-full">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, ad!
        Quidem nemo quibusdam nisi deleniti! Facere, omnis. Perspiciatis earum
        incidunt quam maiores eius alias. Rerum quos eligendi dignissimos ipsam
        molestias.
      </div>
      <div className="max-w-lg m-3 p-5 border-l-4 border-red-500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, ad!
        Quidem nemo quibusdam nisi deleniti! Facere, omnis. Perspiciatis earum
        incidunt quam maiores eius alias. Rerum quos eligendi dignissimos ipsam
        molestias.
      </div>
      <div className="max-w-lg m-3 p-5 border-b-4 border-red-500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, ad!
        Quidem nemo quibusdam nisi deleniti! Facere, omnis. Perspiciatis earum
        incidunt quam maiores eius alias. Rerum quos eligendi dignissimos ipsam
        molestias.
      </div>

      <h1>Border Radius</h1>
      <div className="max-w-lg m-3 p5 border-4 rounded border-green-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa quod,
        reiciendis fuga nulla doloribus maiores. Deserunt incidunt mollitia
        voluptatum necessitatibus, possimus quis facilis iusto, dolore assumenda
        ad, beatae odio sequi!
      </div>
      <div className="max-w-lg m-3 p5 border-4 border-green-500 rounded-3xl">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa quod,
        reiciendis fuga nulla doloribus maiores. Deserunt incidunt mollitia
        voluptatum necessitatibus, possimus quis facilis iusto, dolore assumenda
        ad, beatae odio sequi!
      </div>
      <div className="max-w-lg m-3 p5 border-4 rounded-full border-green-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa quod,
        reiciendis fuga nulla doloribus maiores. Deserunt incidunt mollitia
        voluptatum necessitatibus, possimus quis facilis iusto, dolore assumenda
        ad, beatae odio sequi!
      </div>

      <h1>Outline</h1>
      <div className="flex justify-center">
        <button className="outline outline-4">button</button>
      </div>
    </div>
  );
}
