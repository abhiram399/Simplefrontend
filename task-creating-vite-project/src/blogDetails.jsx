import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import Loading from "./components/loading";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";

export default function BlogDetails() {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch(`http://localhost:8001/blogs/${id}`);

  const history = useHistory();

  const handleDelete = () => {
    fetch(`http://localhost:8001/blogs/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        console.log("Blog deleted"); // Optional: for debugging
        history.push("/"); // Navigate to home after deletion
      })
      .catch((err) => console.error("Error deleting blog:", err)); // Optional: handle errors
  };

  return (
    <div className="blogDetails">
      {isPending && <Loading />}
      {error && <div>{error}</div>}
      {blog &&
        blog
          .filter((blog) => blog.id === id)
          .map((filteredBlog) => (
            <div key={filteredBlog.id}>
              {console.log(filteredBlog.id)}
              <button className="delete" onClick={handleDelete}>
                Delete
              </button>
              <h2>{filteredBlog.title}</h2>
              <h3>{filteredBlog.author}</h3>
              <p>{filteredBlog.body}</p>
            </div>
          ))}
    </div>
  );
}
