import {
  ChevronDown,
  MapPin,
  Search,
  ShoppingCart,
  Sparkles,
} from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";

const Navbar = () => {
  return (
    <header className="fixed h-16 top-0 left-0 right-0 bg-white border-b shadow">
      <nav className="w-[95%] h-full max-w-350 mx-auto flex items-center gap-8">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <span>Quick</span>
          <span className="text-[#FF6B35]">Mart</span>
        </div>

        {/* Location */}
        <div className="flex justify-center flex-col">
          <div className="flex items-center gap-1">
            <MapPin className="text-[#FF6B35] h-3 w-3" />
            <span className="text-gray-400 text-[0.8rem]">Delivering to</span>
          </div>
          <div className="text-[0.8rem] font-semibold flex items-center gap-1">
            <span>530016,Viskhapatnam</span>
            <ChevronDown className="text-[#FF6B35] h-4 w-4" />
          </div>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-3xl relative">
          <form className="relative">
            <Search className="absolute top-3 left-3 h-4 text-[#979797]" />
            <input
              type="text"
              placeholder="Search"
              className="bg-[#EEEEEE] w-full h-10 border-transparent focus:ring-1 rounded-xl px-10 text-sm outline-none transition-all focus:border-[#FF6B35] focus:ring-[#FF6B35]"
            />
            <button className="absolute flex items-center gap-1.5 text-sm right-3 px-2 py-0.5 top-2.5 bg-[#eae6fe] text-[#6C63FF] rounded-md cursor-pointer">
              <Sparkles className="h-3 w-3" />
              <span className="text-[0.7rem] font-semibold">AI</span>
            </button>
          </form>
        </div>

        {/* Cart And Profile */}

        <div className="flex items-center gap-5">
          <div className="relative">
            <ShoppingCart className="relative h-7 w-8" />
            <span className="absolute -right-1 -top-1 bg-[#FF6B35] text-white h-4.5 w-4.5 text-[.7rem] border-2 border-white flex items-center justify-center font-semibold rounded-full">
              1
            </span>
          </div>
          <Avatar size="lg" className="border border-[#FF5B35] cursor-pointer">
            <AvatarFallback>GR</AvatarFallback>
          </Avatar>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;