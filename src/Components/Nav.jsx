import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="py-8 lg:absolute z-50 padding-x">
      <nav className="flex justify-between items-center lg:justify-start lg:gap-[22rem]">
        <a href="/">
          <img src={headerLogo} alt="logo" />
        </a>

        <ul className="hidden lg:flex lg:gap-12 text-slate-gray font-primary">
          {navLinks.map((link) => (
            <li className="text-lg" key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <img
          src={hamburger}
          alt=""
          width={25}
          height={25}
          className="lg:hidden"
        />
      </nav>
    </header>
  );
};

export default Nav;
