// node modules
import {RouterProvider, createBrowserRouter} from "react-router-dom"
// made component add pages
import {Home, About, Login, Error} from "./pages"
import {Navbar} from "./components"
// import styles
import './App.css'

const router = createBrowserRouter([
      {
        path: "/",
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "login",
        element: <Login />,
      },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
