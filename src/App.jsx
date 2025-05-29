import Header from "./components/Header";
import PostForm from "./components/post/PostForm";
import CardPost from "./components/post/CardPost";
import axios from "axios";
import { useState } from "react";

const formInitialState = {
  author: "",
  title: "",
  body: "",
  public: false,
};

function App() {
  const [post, setPost] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const storePost = (post) => {
    setIsLoading(true);
    axios
      .post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", post)
      .then((res) => {
        setPost(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  return (
    <>
      <Header />
      <div className="container w-1/2 mx-auto p-4">
        <h1 className="text-3xl font-bold underline">Form Post</h1>
        <PostForm formInitialState={formInitialState} handleSubmit={storePost} />
        <hr className="my-4" />
        {isLoading ? <span className="text-center text-2xl font-bold text-gray-500">Loading...</span> : post && <CardPost post={post} />}
      </div>
    </>
  );
}

export default App;
