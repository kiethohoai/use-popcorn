import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// todo #2 Star Rating
// import StarRating from "./StarRating";

/* function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars!</p>
    </div>
  );
} */

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <StarRating maxRating={5} message={["Terrible", "Bad", "OK", "Good", "Amazing"]} />
//     <StarRating maxRating={5} size={24} color="red" className="test" defaultRating={3} />
//     <Test />
//   </React.StrictMode>,
// );

// todo #3 Expander Component
/* import "./style.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
); */
