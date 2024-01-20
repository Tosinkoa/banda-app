import { useEffect, useState } from "react";

interface ScreenWidth {
  isSmallScreen: boolean;
  isMediumScreen: boolean;
  isLargeScreen: boolean;
  isMediumAndSmallScreen: boolean;
}

const useGetScreenWidth = (): ScreenWidth => {
  const [isSmallScreen, setIsSmallScreen] = useState(true);
  const [isMediumScreen, setIsMediumScreen] = useState(true);
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const [isMediumAndSmallScreen, setIsMediumAndSmallScreen] = useState(true);

  useEffect(() => {
    const handleResize = () =>
      window.innerWidth <= 640 ? setIsSmallScreen(true) : setIsSmallScreen(false);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleResize = () =>
      window.innerWidth <= 768 ? setIsMediumScreen(true) : setIsMediumScreen(false);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleResize = () =>
      window.innerWidth >= 1024 ? setIsLargeScreen(true) : setIsLargeScreen(false);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleResize = () =>
      window.innerWidth < 1024
        ? setIsMediumAndSmallScreen(true)
        : setIsMediumAndSmallScreen(false);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    isSmallScreen,
    isMediumScreen,
    isLargeScreen,
    isMediumAndSmallScreen,
  };
};

export default useGetScreenWidth;
