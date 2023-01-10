import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";

import { ToastContainer } from "react-toastify";
import ShortUrl from "../pages/ShortUrl";

const MainRoutes = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<ShortUrl />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
