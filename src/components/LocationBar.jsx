import { MapPin, ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function LocationBar() {
  return (
    <div className="hidden md:flex px-8 h-10 items-center justify-between text-xs font-normal text-neutral-600 ">
      <div className="flex gap-1 items-center ">
        <MapPin size={20} strokeWidth={1} /> Store Location: Lincoln- 344,
        Illinois, Chicago, USA
      </div>

      <div className="flex gap-2 items-center">
        <div className="flex gap-1 items-center">
          Eng <ChevronDown strokeWidth={1} />
        </div>
        <div className="flex gap-1 items-center">
          USD <ChevronDown strokeWidth={1} />
        </div>
        <div className="text-neutral-400 text-lg font-light">|</div>
        <div className="flex gap-1 items-center ">
          <NavLink to="/signin" className="text-neutral-600 hover:text-primary">
            Sign In/
          </NavLink>

          <NavLink to="/signup" className="text-neutral-600 hover:text-primary">
            Sign Up
          </NavLink>
        </div>
      </div>
    </div>
  );
}
