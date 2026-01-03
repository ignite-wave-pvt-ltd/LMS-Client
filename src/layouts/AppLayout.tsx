import React, { type ReactNode } from "react";
import Header from "./header/Header";
import Footer from "./Footer";
import { RightSidebar } from "./RightSidebar/RightSidebar";

interface Props {
  children: ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
  isFullScreen?: boolean;
  showrightSidebar?: boolean;
}

const AppLayout: React.FC<Props> = ({
  children,
  showHeader = true,
  showFooter = true,
  isFullScreen = false,
  showrightSidebar = true,
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {showHeader && <Header />}

      <main className="flex-1">
        <div className={isFullScreen ? "" : "max-w-7xl mx-auto px-6 py-6"}>
          {children}
        </div>
      </main>

      {!isFullScreen && showFooter && <Footer />}
      {showrightSidebar && <RightSidebar />}
    </div>
  );
};

export default AppLayout;
