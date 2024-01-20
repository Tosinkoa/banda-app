import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface SidebarProps {
  isMediumAndSmallScreen: boolean;
  showSmallScreenSidebar: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({
  isMediumAndSmallScreen,
  showSmallScreenSidebar,
}) => {
  const router = useRouter();
  const [isClient, setIsClient] = useState<boolean>(false);

  // https://nextjs.org/docs/messages/react-hydration-error
  // For  fixing hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <div
          className={` ${
            (isMediumAndSmallScreen && showSmallScreenSidebar) || !isMediumAndSmallScreen
              ? "translate-x-0"
              : "-translate-x-full"
          } sidebar_bg`}
        >
          <div className="sidebar_list_bg">
            {/* Main buttons */}
            Hello
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
