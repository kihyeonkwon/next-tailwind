export default function Page() {
  return (
    <div>
      <h1>1. Utility-First</h1>

      <div className="flex items-center p-6 max-w-sm mx-auto bg0white rounded-xl shadow-xl space-x-4 mt12">
        <img
          src="https://media.istockphoto.com/id/1026915588/vector/harmful-symbol-warning-sign-vector-illustration-eps10.jpg?s=612x612&w=0&k=20&c=mZ3b5zvq61kwfluwWqnvFRGMSy32M4D_r0a2gO8a110="
          alt=""
          className="w-12 h-12"
        />
        <div>
          <div className="text-xl font-medium text-black">Are you sure?</div>
          <p className="text-slate-500">You are about to delete a post</p>
        </div>
      </div>
    </div>
  );
}
