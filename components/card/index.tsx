import React from "react";

type CardBasicProps = {};

const CardBasic: React.FC<CardBasicProps> = () => {
  return (
    <div className="border border-gray-300 rounded-md bg-white">
      <div className="p-6">
        <h1 className="text-2xl font-bold">Card Title</h1>
        <p className="text-gray-500">Card Description</p>
      </div>
    </div>
  );
};

export default CardBasic;
