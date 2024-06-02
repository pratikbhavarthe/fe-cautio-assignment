import React from "react";

type TLabelProps = {
  text: string;
};

const Label: React.FC<TLabelProps> = ({ text }) => {
  return (
    <div className={`bg-pink-700 font-semibold text-sm text-blue-200 grid place-content-center h-5 py-3 px-1 border rounded-md shadow-sm`}>
      {text}
    </div>
  );
};

export default Label;
