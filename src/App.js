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
import { Toaster } from "react-hot-toast";
import Purchase from "./pages/Purchase/Purchase";
import RequireAuth from "./shared/RequireAuth";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyOrder from "./pages/Dashboard/MyOrder";
import AddReview from "./pages/Dashboard/AddReview";
import MyProfile from "./pages/Dashboard/MyProfile";
import Payment from "./pages/Payment/Payment";

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
        <Route path="payment/:id" element={<Payment></Payment>} />
        <Route
          path="purchase/:product_id"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        />
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyOrder></MyOrder>} />
          <Route path="myOrder" element={<MyOrder></MyOrder>} />
          <Route path="addReview" element={<AddReview></AddReview>} />
          <Route path="myProfile" element={<MyProfile></MyProfile>} />
        </Route>
        <Route
          path="forgetPassword"
          element={<ForgetPassword></ForgetPassword>}
        />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <Footer></Footer>
      <Toaster />
    </div>
  );
}

export default App;
