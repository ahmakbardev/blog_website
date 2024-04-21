import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TempSidebar from "../components/TempSidebar";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <TempSidebar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
