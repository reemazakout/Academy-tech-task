import { Outlet } from "react-router-dom";
import Navbar from "../common/navbar";

export default function Layout() {
  return (
    <>
      {/* Navbar */}
      <Navbar></Navbar>

      {/* Outlet */}
      <Outlet></Outlet>
    </>
  );
}
