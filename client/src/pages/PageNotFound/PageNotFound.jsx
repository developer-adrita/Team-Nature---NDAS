import {Link} from "react-router-dom";

export default function PageNotFound() {
  return (
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>We're sorry, but the page you were looking for couldn't be found.</p>
        <Link to="/">
          <button>Return to Home</button>
        </Link>
      </div>
  );
}