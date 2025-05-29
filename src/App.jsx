import Header from "./components/Header";
import axios from "axios";
import { useState } from "react";

const formInitialState = {
  author: "",
  title: "",
  body: "",
  public: false,
};

function App() {
  const [formData, setFormData] = useState(formInitialState);
  const [post, setPost] = useState();

  const handleChange = (e) => {
    if (e.target.type === "checkbox") {
      setFormData({ ...formData, [e.target.name]: e.target.checked });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axios.post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", formData).then((res) => {
      console.log(res);
      setPost(res.data);
      console.log(post);
    });
  };

  return (
    <>
      <Header />
      <div className="container w-1/2 mx-auto p-4">
        <h1 className="text-3xl font-bold underline">Form Post</h1>
        <form className="flex flex-col gap-4 mt-4">
          <div className="flex gap-2">
            <label className="w-1/4" htmlFor="author">
              Author
            </label>
            <input value={formData.author} onChange={handleChange} className="border border-gray-300 rounded-md p-2 grow" type="text" id="author" name="author" />
          </div>
          <div className="flex gap-2">
            <label className="w-1/4" htmlFor="title">
              Title
            </label>
            <input value={formData.title} onChange={handleChange} className="border border-gray-300 rounded-md p-2 grow" type="text" id="title" name="title" />
          </div>
          <div className="flex gap-2">
            <label className="w-1/4" htmlFor="body">
              Body
            </label>
            <textarea value={formData.body} onChange={handleChange} name="body" className="border border-gray-300 rounded-md p-2 grow" type="text-area" id="body" />
          </div>
          <div className="flex gap-2">
            <label className="w-1/4" htmlFor="public">
              Public
            </label>
            <input value={formData.public} onChange={handleChange} className="border border-gray-300 rounded-md p-2 grow" type="checkbox" id="public" name="public" />
          </div>
          <button onClick={handleSubmit} type="submit" className="bg-blue-500 text-white p-2 rounded-md">
            Submit
          </button>
        </form>
        <hr className="my-4" />
        {post && (
          <>
            <h1 className="text-3xl font-bold underline">Card Post</h1>
            <div className="card">
              <div key={post.id}>
                <h2>Title: {post.title}</h2>
                <p>id: {post.id}</p>
                <p>Body: {post.body}</p>
                <p>Author: {post.author}</p>
                <p>Public: {post.public ? "public" : "private"}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
