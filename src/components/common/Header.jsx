import { useContext } from "react";
import { DarkModeContext } from "../../state/DarkModeContext";
import { useNavigate, Link } from "react-router-dom";
import Button from "../element/Button";
const Header = () => {
  const { dispatch } = useContext(DarkModeContext);
  const navigator = useNavigate();
  const goHome = () => {
    navigator("/");
  };
  return (
    <div className="grid grid-rows-2">
      <div>
        <ul className="grid grid-cols-3">
          <li>
          <Button text="Logo" onClick={goHome}></Button>
          </li>
          <li>fdsfsdf</li>
          <li>
            <Button text="모드 전환" onClick={() => {
                return dispatch({ type: "TOGGLE_MODE" });
              }}></Button>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/video"}>HOT</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
