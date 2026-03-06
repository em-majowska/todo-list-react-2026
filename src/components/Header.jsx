import { FaRegListAlt } from "react-icons/fa";

const Header = (props) => {
  return (
    <header>
      <div className="container">
        <FaRegListAlt color="#5c48d3" size="70px" />
        <h1>{props.text}</h1>
      </div>
    </header>
  );
};

export default Header;
