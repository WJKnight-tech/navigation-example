// node modules
import { RouterProvider, createBrowserRouter } from "react-router-dom"
// made component add pages
import { Home, About, Login, Error } from "./pages"
import { Navbar } from "./components"
// rout
import RootLayout from "./layout/RoutLayout"
// import styles
import './App.css'

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <Error />,
    children: [

      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "login",
        element: <Login />,
      },],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
