import { useEffect, useState } from "react";
const KEY = "6d431fb9";

export function useMovies(query, callback) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    callback?.();

    const controller = new AbortController();
    const fetchMovie = async () => {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          { signal: controller.signal },
        );

        if (!res.ok) throw Error("Something went wrong while fetching movies!");
        const data = await res.json();

        if (data.Response === "False") {
          throw new Error("Movie not found!");
        }
        setMovies(data.Search);
        setError("");
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
        // setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (!query.length) {
      setMovies([]);
      setError("");
      return;
    }

    // handleCloseMovie();
    fetchMovie();

    return function () {
      controller.abort();
    };
  }, [query]);

  // todo return
  return { movies, isLoading, error };
}
