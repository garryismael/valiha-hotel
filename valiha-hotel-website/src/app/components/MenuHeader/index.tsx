import TopHeader from "../TopHeader";
import "./index.css";

const MenuHeader = () => {
  return (
    <div className="fixed-navbar">
      <header className="menu-header">
        <TopHeader />
      </header>
    </div>
  );
};

export default MenuHeader;
