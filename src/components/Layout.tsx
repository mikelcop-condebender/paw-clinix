import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Banner } from "./Banner";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <Banner/>
    <main className="flex-grow p-6">{children}</main>
    <Footer />
  </div>
);

export default Layout;
