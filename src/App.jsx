import Header from "./components/Header";
import PostForm from "./components/post/PostForm";
import CardPost from "./components/post/CardPost";
import Alert from "./components/ui/Alert";
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
  const [response, setResponse] = useState();

  const storePost = (post) => {
    setIsLoading(true);
    axios
      .post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", post)
      .then((res) => {
        setPost(res.data);
        setResponse(res.status);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setResponse(err.status);
        setIsLoading(false);
      });
  };

  return (
    <>
      <Header />
      <div className="container min-w-1/2 mx-auto p-4">
        {post && response === 201 ? <Alert message="Post created successfully" type="green" /> : post && response !== 201 ? <Alert message="Post failed to create" type="red" /> : null}
        <div className="flex gap-4 w-full mt-5">
          <div className="flex flex-col w-1/2">
            <PostForm formInitialState={formInitialState} handleSubmit={storePost} />
          </div>
          <div className="flex flex-col w-1/2">{isLoading ? <span className="text-center text-2xl font-bold text-gray-500">Loading...</span> : post && <CardPost post={post} />}</div>
        </div>
      </div>
    </>
  );
}

export default App;
