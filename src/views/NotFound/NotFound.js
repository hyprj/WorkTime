import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      <h2>Ooops, not found!</h2>
      <Link to="/">Go to home page</Link>
    </div>
  );
};
