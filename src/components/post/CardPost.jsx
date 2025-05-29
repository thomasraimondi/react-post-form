export default function CardPost({ post }) {
  return (
    <div className="card">
      <h2>Title: {post.title}</h2>
      <p>id: {post.id}</p>
      <p>Body: {post.body}</p>
      <p>Author: {post.author}</p>
      <p>Public: {post.public ? "public" : "private"}</p>
    </div>
  );
}
