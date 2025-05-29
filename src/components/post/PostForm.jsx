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
      <button onClick={handleFormSubmit} type="submit" className="bg-blue-500 text-white p-2 rounded-md">
        Submit
      </button>
    </form>
  );
}
