import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./pages/Blog/Blog";
import Home from "./pages/Home/Home";
import ForgetPassword from "./pages/Login/ForgetPassword";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/SignUp";
import MyPortfolio from "./pages/MyPortfolio/MyPortfolio";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";
import NotFound from "./shared/NotFound";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="blog" element={<Blog></Blog>} />
        <Route path="portfolio" element={<MyPortfolio></MyPortfolio>} />
        <Route path="login" element={<Login></Login>} />
        <Route path="signUp" element={<SignUp></SignUp>} />
        <Route
          path="forgetPassword"
          element={<ForgetPassword></ForgetPassword>}
        />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
