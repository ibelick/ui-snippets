import React from "react";

type ComponentPlaygroundProps = {
  children: React.ReactNode;
};

const ComponentPlayground: React.FC<ComponentPlaygroundProps> = ({
  children,
}) => {
  return (
    <div className="rounded-md border overflow-hidden">
      {children}
    </div>
  );
};

export default ComponentPlayground;
