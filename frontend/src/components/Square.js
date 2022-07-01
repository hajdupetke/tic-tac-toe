import { ReactComponent as OIcon } from "../assets/o.svg";
import { ReactComponent as XIcon } from "../assets/x.svg";

const Square = (props) => {
  return (
    <div
      className="flex flex-1 items-center justify-center hover:bg-green bg-gainsboro cursor-pointer h-full aspect-square shadow-lg rounded-xl"
      onClick={props.onClick}
    >
      {props.children == "o" ? (
        <OIcon className="w-1/2 h-1/2" />
      ) : props.children == "x" ? (
        <XIcon className="w-1/2 h-1/2" />
      ) : (
        ""
      )}
    </div>
  );
};

export default Square;
