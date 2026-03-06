import { FaRegListAlt } from "react-icons/fa";
import Button from "./Button";

const Header = (props) => {
  return (
    <header>
      <div className="container">
        <FaRegListAlt color="#5c48d3" size="70px" />
        <h1>{props.text}</h1>
        <Button
          text={props.btnIcon}
          className="mode-btn"
          onClick={props.onClick}
        />
      </div>
    </header>
  );
};

export default Header;
