import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Lists({ blogs, title }) {
  return (
    <div className="blogList">
      <h1>{title}</h1>
      {blogs.map((item) => (
        <div className="blogsContainer" key={item.id}>
          <Link to={`/blogs/${item.id}`}>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
