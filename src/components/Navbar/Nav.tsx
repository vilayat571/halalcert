import Header from "../../atoms/Navbar/Header";
import Mainnav from "./Mainnav";

const Nav = () => {
  console.log(this);

  return (
    <div className="flex flex-col items-center w-full h-auto">
      <Header />
      <Mainnav />
    </div>
  );
};

export default Nav;
