import React from "react";

interface Props {
  children: React.ReactNode;
}

const Layout = (props: Props) => {
  return (
    <div className="h-screen overflow-hidden bg-espresso-lightest text-white">
      {props.children}
    </div>
  );
};

export default Layout;
