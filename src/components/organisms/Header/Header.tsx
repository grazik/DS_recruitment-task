import Image from "next/image";
import styles from "./header.module.scss";
import Logo from "@public/logo.svg";
import Link from "next/link";
import { useRouter } from "next/router";
import { useBreakpoints } from "@hooks/useBreakpoints";
import { MobileMenu } from "@organisms/Header/componets/MobileMenu";
import { DesktopMenu } from "@organisms/Header/componets/DesktopMenu";

interface HeaderProps {}

const links = [
  {
    href: "/form",
    label: "Form",
  },
  {
    href: "/profile",
    label: "Profile",
  },
];

export const Header = ({}: HeaderProps) => {
  const { route } = useRouter();

  const { isMobile } = useBreakpoints();

  const Menu = isMobile ? MobileMenu : DesktopMenu;
  return (
    <header className={styles.header} style={{ "--header-opacity": 0.25 }}>
      <nav className={`wrapper ${styles.navbar}`}>
        <Link
          href={"/"}
          aria-label={"HomePage"}
          className={styles.logo}
          {...("/" === route ? { "aria-current": "page" } : {})}
        >
          <Image src={Logo} alt={"logo"} priority />
        </Link>
        <Menu>
          <ul className={styles.links} id={"menu"} role={"menu"}>
            {links.map(({ href, label }) => (
              <li key={label}>
                <Link
                  href={href}
                  {...(href === route ? { "aria-current": "page" } : {})}
                  className={`${styles.link} ${
                    route === href ? styles.active : ""
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </Menu>
      </nav>
    </header>
  );
};
