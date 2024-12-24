import { useRouteError, Link } from "react-router-dom";


const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <main className="error" id="error-page">
      <p>Error</p>
      <p>{error.data}</p>
      <p>{error.statusText}</p>
      <Link to="/" id="go-home">Home Page</Link>
    </main>
  );

};
export default Error;