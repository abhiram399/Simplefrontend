import { useState, useEffect } from "react";

export default function useFetch() {
  const [data, setData] = useState(null);
  const Url = "http://localhost:8001/blogs";
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      fetch(Url)
        .then((res) => {
          console.log(res);
          if (!res.ok) {
            throw Error("cant fetch");
          }

          return res.json();
        })
        .then((data) => {
          // console.log(data);
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setIsPending(false);
        });
    }, 1500);
  }, [Url]);

  return { data, isPending, error };
}
