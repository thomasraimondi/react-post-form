export default function CardPost({ post }) {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">Post</h1>

      <div className="card bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 max-w-md mt-10 w-full">
        <div className="card-header flex justify-between items-center border-b border-gray-100 pb-2 mb-2">
          <h2 className="card-title text-2xl font-extrabold text-gray-800 tracking-tight">{post.title}</h2>
          <span className="card-id text-xs font-semibold bg-blue-100 text-blue-700 px-2 py-1 rounded-full">#{post.id}</span>
        </div>
        <div className="card-body mb-3">
          <p className="text-base text-gray-700 leading-relaxed">{post.body}</p>
        </div>
        <div className="card-footer flex justify-between items-center pt-2 border-t border-gray-100">
          <span className="card-author text-xs text-gray-500">
            post by: <span className="font-medium text-gray-700">{post.author}</span>
          </span>
          <span className={`card-public text-xs font-semibold px-2 py-1 rounded-full ${post.public ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
            {post.public ? "public" : "private"}
          </span>
        </div>
      </div>
    </>
  );
}
