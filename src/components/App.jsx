import { Routes, Route } from "react-router-dom";
import Home from "Pages/Home/Home";
import { Layout } from "./Layout/Layout";
import Movies from "Pages/Movies/Movies";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="movies" element={<Movies />}></Route>
        </Route>
      </Routes>
    </div>
  );
};
