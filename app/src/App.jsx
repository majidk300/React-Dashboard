
import Dashboard from "./pages/Dashboard/Dashboard";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Support from "./pages/Support/Support";
import TansactionPage from "./pages/Transaction/Tansaction";

const router =  createBrowserRouter([
  {
    path: "/",
    element: <Dashboard /> ,

  },
  {
    path: "/transaction",
    element: <TansactionPage /> ,
  },
  {
    path: "/support",
    element: <Support /> ,
  }
]);

function App() {

  return (
    <>
     <RouterProvider router={router} />
     
    </>
  )
}

export default App
