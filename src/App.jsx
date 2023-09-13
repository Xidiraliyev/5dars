import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from "react-router-dom";
import { HomeLayout,  Landing, Login, Register, About, Products, Cart } from "./pages";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Landing />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register"element={<Register/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
