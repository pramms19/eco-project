import { MapPin, ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function LocationBar() {
  return (
    <div className="flex h-10 items-center justify-between text-sm font-normal text-gray-600">
      <div className="flex gap-1 items-center ">
        <MapPin strokeWidth={1} /> Store Location: Lincoln- 344, Illinois,
        Chicago, USA
      </div>

      <div className="flex gap-2 items-center">
        <div className="flex gap-1 items-center">
          Eng <ChevronDown strokeWidth={1} />
        </div>
        <div className="flex gap-1 items-center">
          USD <ChevronDown strokeWidth={1} />
        </div>
        <div className="text-gray-400">|</div>
        <div className="flex gap-1 items-center ">
          <NavLink to="/signin" className="text-gray-600 hover:text-green-600">
            Sign In/
          </NavLink>

          <NavLink to="/signup" className="text-gray-600 hover:text-green-600">
            Sign Up
          </NavLink>
        </div>
      </div>
    </div>
  );
}
