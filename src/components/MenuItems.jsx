import { ChevronDown, PhoneCall, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function MenuItems() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { id: 1, name: "Home", to: "/" },
    { id: 2, name: "Shop", to: "/" },
    { id: 3, name: "Pages", to: "/" },
    { id: 4, name: "Blog", to: "/" },
  ];

  return (
    <div className="bg-neutral-800 px-4 sm:px-6 lg:px-8 ">
      {/* Top Bar */}
      <div className="h-14 max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 items-center text-sm font-medium">
          {navItems.map((item) => (
            <div key={item.id} className="flex gap-1 items-center">
              <NavLink
                to={item.to}
                className="text-neutral-500 hover:text-neutral-200"
              >
                {item.name}
              </NavLink>

              <ChevronDown size={16} className="text-neutral-500" />
            </div>
          ))}

          <NavLink className="text-neutral-500 hover:text-neutral-200">
            About Us
          </NavLink>

          <NavLink className="text-neutral-500 hover:text-neutral-200">
            Contact Us
          </NavLink>
        </div>

        {/* Phone (Desktop) */}
        <div className="hidden md:flex gap-1 items-center text-neutral-200">
          <PhoneCall size={20} />
          (219) 555-0114
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-neutral-200"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-neutral-900 px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block text-neutral-300 hover:text-white"
            >
              {item.name}
            </NavLink>
          ))}

          <NavLink
            onClick={() => setOpen(false)}
            className="block text-neutral-300 hover:text-white"
          >
            About Us
          </NavLink>

          <NavLink
            onClick={() => setOpen(false)}
            className="block text-neutral-300 hover:text-white"
          >
            Contact Us
          </NavLink>

          {/* Phone (Mobile) */}
          <div className="flex gap-2 items-center text-neutral-300 pt-3 border-t border-neutral-700">
            <PhoneCall size={18} />
            (219) 555-0114
          </div>
        </div>
      )}
    </div>
  );
}
