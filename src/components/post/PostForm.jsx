import { useState } from "react";

export default function PostForm({ formInitialState, handleSubmit }) {
  const [formData, setFormData] = useState(formInitialState);

  const handleChange = (e) => {
    if (e.target.type === "checkbox") {
      setFormData({ ...formData, [e.target.name]: e.target.checked });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formData);
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">Add Post</h1>
      <div className="w-full mt-10 bg-white shadow-lg rounded-xl p-8 border border-gray-100">
        <form className="flex flex-col gap-6" onSubmit={handleFormSubmit}>
          <div className="flex flex-col gap-1">
            <label className="text-gray-700 font-semibold" htmlFor="author">
              Author
            </label>
            <input
              value={formData.author}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              type="text"
              id="author"
              name="author"
              placeholder="Enter author name"
              autoComplete="off"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-gray-700 font-semibold" htmlFor="title">
              Title
            </label>
            <input
              value={formData.title}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              type="text"
              id="title"
              name="title"
              placeholder="Enter post title"
              autoComplete="off"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-gray-700 font-semibold" htmlFor="body">
              Body
            </label>
            <textarea
              value={formData.body}
              onChange={handleChange}
              name="body"
              className="border border-gray-300 rounded-md p-2 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              id="body"
              placeholder="Write your post..."
              required
            />
          </div>
          <div className="flex items-center gap-2">
            <input
              checked={formData.public}
              onChange={handleChange}
              className="accent-blue-500 w-5 h-5 rounded focus:ring-2 focus:ring-blue-400 transition"
              type="checkbox"
              id="public"
              name="public"
              required
            />
            <label className="text-gray-700 select-none cursor-pointer" htmlFor="public">
              Public
            </label>
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 transition text-white p-2 rounded-md font-semibold shadow-md mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
