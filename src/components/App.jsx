import { Routes, Route } from "react-router-dom";
import Home from "Pages/Home";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Home />}/>
      </Routes>
    </div>
  );
};
