import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Background from "./background";
import Tooltip from "../Tooltip";
import Logo from "../Logo";
import { title } from "../../data/site.yaml";
import styles from "./index.module.scss";

// header component to show at top of every page
const Header = () => {
  // make header big if on home page
  const { pathname } = useRouter();
  const big = pathname === "/";

  return (
    <header className={styles.header} data-big={big}>
      <Background />
      <Title big={big} />
      <Nav />
    </header>
  );
};

export default Header;

// centered site title with logo and text
const Title = ({ big }) => (
  <Link href="/">
    <a className={styles.title}>
      <Logo big={big} />
      <Text />
    </a>
  </Link>
);

// site title text
const Text = () => (
  <span className={styles.text}>
    {title.split("").map((char, index) => (
      <span key={index}>{char}</span>
    ))}
  </span>
);

// navigation bar with links
const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.nav} data-open={open}>
      <button className={styles.button} onClick={() => setOpen(!open)}>
        <i className={open ? "fas fa-times" : "fas fa-bars"}></i>
        <span>{open ? "Close" : "Menu"}</span>
      </button>

      <NavLink
        link="/lessons"
        text="Lessons"
        tooltip="Various maths topics, in video and text form"
      />
      <NavLink link="/extras" text="Extras" tooltip="Blog, podcast, and more" />
      <NavLink
        link="/about"
        text="About"
        tooltip="What and who is 3blue1brown"
      />
      <NavLink
        link="/contact"
        text="Contact"
        tooltip="Frequently asked questions and contact info"
      />

      <div className={styles.break} />

      <NavLink
        link="https://www.youtube.com/c/3blue1brown?sub_confirmation=1"
        text="Subscribe"
        tooltip="Subscribe on YouTube"
      />
      <NavLink
        link="https://store.dftba.com/collections/3blue1brown"
        text="Store"
        tooltip="Shirts, plushies, and more"
      />
      <NavLink
        link="https://www.patreon.com/3blue1brown"
        text="Support"
        tooltip="See membership benefits"
      />
      <NavLink link="/search" icon="fas fa-search" tooltip="Search the site" />
    </nav>
  );
};

// nav bar link
const NavLink = ({ link, text, icon, tooltip }) => (
  <Link href={link} passHref>
    <Tooltip content={tooltip}>
      <a className={styles.link}>
        {text}
        {icon && <i className={icon} />}
      </a>
    </Tooltip>
  </Link>
);