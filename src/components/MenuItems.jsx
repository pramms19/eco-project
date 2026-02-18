import { ChevronDown, PhoneCall } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function MenuItems() {
  const navItems = [
    { id: 1, name: "Home", to: "/" },
    { id: 2, name: "Shop", to: "/" },
    { id: 3, name: "Pages", to: "/" },
    { id: 4, name: "Blog", to: "/" },
  ];
  return (
    <div className="bg-neutral-800 h-14 px-8 flex items-center justify-between">
      <div className="relative hidden md:block">
        <div className="flex space-x-4 items-center text-sm font-medium">
          {navItems.map((item) => {
            return (
              <div className="flex gap-1 items-center">
                <NavLink
                  key={item.id}
                  to={item.to}
                  className="text-neutral-500 hover:text-neutral-200"
                >
                  {item.name}
                </NavLink>
                <ChevronDown className="text-neutral-500 hover:text-neutral-200" />
              </div>
            );
          })}
          <NavLink className="text-neutral-500 hover:text-neutral-200">
            About Us
          </NavLink>
          <NavLink className="text-neutral-500 hover:text-neutral-200">
            Contact Us
          </NavLink>
        </div>
      </div>
      <div className="flex gap-1 items-center text-neutral-200">
        <PhoneCall size={20} />
        (219) 555-0114
      </div>
    </div>
  );
}
