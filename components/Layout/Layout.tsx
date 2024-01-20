import useGetScreenWidth from "../CustomHooks/useGetScreenWidth";
import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import WebsiteMetadata from "../WebsiteMetadata/WebsiteMetadata";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [showSmallScreenSidebar, setShowSmallScreenSidebar] = useState<boolean>(false);
  const { isMediumAndSmallScreen } = useGetScreenWidth();

  return (
    <div className="layout_layout_bg">
      <Navbar smallScreenSidebarHandler={() => setShowSmallScreenSidebar(true)} />
      <div className="layout_layout_sec_bg">
        <>
          <Sidebar
            isMediumAndSmallScreen={isMediumAndSmallScreen}
            showSmallScreenSidebar={showSmallScreenSidebar}
          />

          {isMediumAndSmallScreen && showSmallScreenSidebar && (
            <div
              className="layout_overlay"
              onClick={() => setShowSmallScreenSidebar(false)}
            ></div>
          )}
        </>
        <div className="layout_children_bg">
          <div className="layout_children_sec_bg"> {children} </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
