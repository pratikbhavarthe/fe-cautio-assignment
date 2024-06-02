type TLabelProps = {
  text: string;
};

const Label = (props: TLabelProps) => {
  return (
    <div
      className=" bg-pink-300 font-semibold text-sm text-purple-700 grid place-content-center h-7 py-4 px-2 border rounded-md shadow-sm">
      {props.text}
    </div>
  );
};

export default Label;
