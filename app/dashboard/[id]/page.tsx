export default function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>This is the dashboard page</p>
      <p>Id: {params.id}</p>
    </div>
  );
}
