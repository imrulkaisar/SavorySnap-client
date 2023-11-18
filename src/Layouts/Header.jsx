import Logo from "../Components/Logo";
import TopMenuItems from "../Components/TopMenuItems";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";

const Header = () => {
  return (
    <header className="bg-[rgba(0,0,0,0.7)] text-white -mb-20 z-50 relative">
      <div className="container-area py-5 flex justify-between">
        <Logo />
        <div className="flex gap-10 items-center">
          <nav className="flex gap-4 uppercase text-base">
            <TopMenuItems />
          </nav>
          <div className="flex items-center">
            <div className="cart">
              <AiOutlineShoppingCart className="text-4xl" />
            </div>
            <div className="h-5 w-[2px] bg-slate-300 mx-6 lg:block hidden"></div>
            <div className="user">
              <AiOutlineUser className="text-4xl" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
