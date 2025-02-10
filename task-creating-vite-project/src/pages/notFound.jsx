import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "../App.css";

export default function NotFound() {
  const history = useHistory();
  const goBack = () => {
    history.push("/");
  };

  return (
    <div className="notFound">
      <h2>Sorry</h2>
      <p>The Page you are looking for cannot be found</p>
      <button className="goBack" onClick={goBack}>
        Let's Go Back
      </button>
    </div>
  );
}
