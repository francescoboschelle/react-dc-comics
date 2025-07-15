import Logo from "./Logo.jsx";

const links = [
  {
    name: "CHARACTERS",
    href: "/",
  },
  {
    name: "COMICS",
    href: "/",
  },
  {
    name: "MOVIES",
    href: "/",
  },
  {
    name: "TV",
    href: "/",
  },
  {
    name: "GAMES",
    href: "/",
  },
  {
    name: "COLLECTIBLES",
    href: "/",
  },
  {
    name: "VIDEOS",
    href: "/",
  },
  {
    name: "FANS",
    href: "/",
  },
  {
    name: "NEWS",
    href: "/",
  },
  {
    name: "SHOP",
    href: "/",
  },
];

export default function Header() {
  return (
    <>
      <header>
        <div className="container h-100">
          <div className="d-flex justify-content-between align-items-center h-100">
            <Logo />

            <nav className="nav h-100 gap-3">
              {links.map((link, index) => {
                return (
                  <a
                    key={`header:${index}`}
                    className={`nav-link ${
                      link.name === "COMICS"
                        ? "text-primary pb-0"
                        : "text-black"
                    } fw-medium h-100 d-flex align-items-center pe-0 ps-0`}
                    href={link.href}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
