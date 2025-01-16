import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Profile from "./Pages/Profile";
import Header from "./components/Header";
import Login from "./Pages/adminPage/Login"; // admin login

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes for non-admin pages */}
        <Route path="/" element={<><Header /><Home /></>} />
        <Route path="/profile" element={<><Header /><Profile /></>} />
        <Route path="/sign-in" element={<><Header /><SignIn /></>} />
        <Route path="/sign-up" element={<><Header /><SignUp /></>} />

        {/* Admin routes without Header */}
        <Route path="/admin/login" element={<Login />} />
        {/* Add other admin routes here */}
      </Routes>
    </BrowserRouter>
  );
}
