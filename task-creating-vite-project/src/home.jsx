import Lists from "./components/lists.jsx";
import Loading from "./components/loading.jsx";
import useFetch from "./useFetch.js";

export default function Home() {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      <div className="listContainer">
        {error && <div> {error} </div>}
        {isPending && <Loading />}
        {blogs && <Lists blogs={blogs} title="All blogs" />}
      </div>
    </div>
  );
}
