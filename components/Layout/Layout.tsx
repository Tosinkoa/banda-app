import Footer from "./Footer";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout_layout_bg">
      <Navbar />
      <div className="layout_layout_sec_bg">
        <div className="layout_children_bg">
          <div className="layout_children_sec_bg"> {children} </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
