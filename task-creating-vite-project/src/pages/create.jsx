import React, { useState } from "react";
import "./create.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    const blog = { title, body, author };

    setIsPending(true);

    fetch("http://localhost:8001/blogs", { 
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsPending(false);
    });
    history.push("/");
  };

  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        <label>Title :</label>
        <input
          type="text"
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Body</label>
        <textarea required onChange={(e) => setBody(e.target.value)}></textarea>
        <label>Author :</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="roshi">roshi</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding Blog ...</button>}
      </form>
    </div>
  );
}
