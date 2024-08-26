import { Button } from "./ui/button";
import { navItems } from "@/lib/constants";

import Link from "next/link";
import SignupChange from "./signupChange";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between lg:max-w-7xl 2xl:max-w-screen-lg mx-auto p-4 lg:px-20">
      <h1 className="font-bold text-2xl">slydeAI.</h1>
      <nav className="hidden sm:flex items-center gap-x-8">
        {navItems.map((item) => (
          <ul key={item.id}>
            <li>{item.title}</li>
          </ul>
        ))}
      </nav>
      <div>
        <SignupChange />
      </div>
    </header>
  );
}
