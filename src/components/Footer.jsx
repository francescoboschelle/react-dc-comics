import digitalComics from "../assets/img/buy-comics-digital-comics.png";
import dcMerchandise from "../assets/img/buy-comics-merchandise.png";
import subscription from "../assets/img/buy-comics-subscriptions.png";
import comicShopLocator from "../assets/img/buy-comics-shop-locator.png";
import dcPowerVisa from "../assets/img/buy-dc-power-visa.svg";
// ---
import facebookLogo from "../assets/img/footer-facebook.png";
import twitterLogo from "../assets/img/footer-twitter.png";
import ytLogo from "../assets/img/footer-youtube.png";
import pinterestLogo from "../assets/img/footer-pinterest.png";
import periscopeLogo from "../assets/img/footer-periscope.png";
// ---
import dcLogoBig from "../assets/img/dc-logo-bg.png";

const topics = [
  {
    imageSrc: digitalComics,
    text: "DIGITAL COMICS",
  },
  {
    imageSrc: dcMerchandise,
    text: "DC MERCHANDISE",
  },
  {
    imageSrc: subscription,
    text: "SUBSCRIPTION",
  },
  {
    imageSrc: comicShopLocator,
    text: "COMIC SHOP LOCATOR",
  },
  {
    imageSrc: dcPowerVisa,
    text: "DC POWER VISA",
  },
];

const dcComicsLinks = [
  {
    name: "Characters",
    href: "/",
  },
  {
    name: "Comics",
    href: "/",
  },
  {
    name: "Movies",
    href: "/",
  },
  {
    name: "TV",
    href: "/",
  },
  {
    name: "Games",
    href: "/",
  },
  {
    name: "Videos",
    href: "/",
  },
  {
    name: "News",
    href: "/",
  },
];

const dcLinks = [
  {
    name: "Terms Of Use",
    href: "/",
  },
  {
    name: "Privacy policy (new)",
    href: "/",
  },
  {
    name: "Ad Choices",
    href: "/",
  },
  {
    name: "Jobs",
    href: "/",
  },
  {
    name: "Subscriptions",
    href: "/",
  },
  {
    name: "Talent Workshops",
    href: "/",
  },
  {
    name: "CPSC Certificates",
    href: "/",
  },
  {
    name: "Ratings",
    href: "/",
  },
  {
    name: "Shop Help",
    href: "/",
  },
  {
    name: "Contact Us",
    href: "/",
  },
];

const sitesLinks = [
  {
    name: "DC",
    href: "/",
  },
  {
    name: "MAD Magazine",
    href: "/",
  },
  {
    name: "DC Kids",
    href: "/",
  },
  {
    name: "DC Universe",
    href: "/",
  },
  {
    name: "DC Power Visa",
    href: "/",
  },
];

export default function Footer() {
  return (
    <>
      <footer>
        <section className="topics">
          <div className="container pt-5 pb-5 pe-0 ps-0">
            <nav className="nav justify-content-between">
              {topics.map((topic, index) => {
                return (
                  <div className="topics-container" key={`topics:${index}`}>
                    <img src={topic.imageSrc} alt="Topics Image" />
                    <a href="/" className="nav-link text-white">
                      {topic.text}
                    </a>
                  </div>
                );
              })}
            </nav>
          </div>
        </section>

        <section className="footer-nav">
          <img src={dcLogoBig} alt="DC Logo" className="footer-logo" />
          <div className="container pt-5 pb-5 pe-0 ps-0 d-flex gap-4">
            <div>
              <nav className="nav flex-column">
                <h3 className="text-white">DC COMICS</h3>
                {dcComicsLinks.map((link, index) => {
                  return (
                    <a
                      key={`dc_comics:${index}`}
                      href={link.href}
                      className="nav-link text-secondary ps-0 pb-0 pt-1"
                    >
                      {link.name}
                    </a>
                  );
                })}
              </nav>

              <nav className="nav flex-column mt-4">
                <h3 className="text-white">SHOP</h3>
                <a href="/" className="nav-link text-secondary ps-0 pb-0 pt-1">
                  Shop DC
                </a>
                <a href="/" className="nav-link text-secondary ps-0 pb-0 pt-1">
                  Shop DC Collectibles
                </a>
              </nav>
            </div>

            <div>
              <nav className="nav flex-column">
                <h3 className="text-white">DC</h3>
                {dcLinks.map((link, index) => {
                  return (
                    <a
                      key={`dc:${index}`}
                      href={link.href}
                      className="nav-link text-secondary ps-0 pb-0 pt-1"
                    >
                      {link.name}
                    </a>
                  );
                })}
              </nav>
            </div>

            <div>
              <nav className="nav flex-column">
                <h3 className="text-white">SITES</h3>
                {sitesLinks.map((link, index) => {
                  return (
                    <a
                      key={`sites:${index}`}
                      href={link.href}
                      className="nav-link text-secondary ps-0 pb-0 pt-1"
                    >
                      {link.name}
                    </a>
                  );
                })}
              </nav>
            </div>
          </div>
        </section>

        <section className="footer-socials">
          <div className="container pt-5 pb-5 pe-0 ps-0 d-flex justify-content-between">
            <div className="nav btn-border">
              <a href="/" className="nav-link fw-bold text-white">
                SIGN-UP NOW!
              </a>
            </div>
            <div className="d-flex gap-3 align-items-center">
              <a href="/" className="nav-link fw-bold text-primary fs-4">
                FOLLOW US
              </a>
              <a href="/" className="nav-link">
                <img src={facebookLogo} alt="Facebook Logo" />
              </a>
              <a href="/" className="nav-link">
                <img src={twitterLogo} alt="Twitter Logo" />
              </a>
              <a href="/" className="nav-link">
                <img src={ytLogo} alt="YouTube Logo" />
              </a>
              <a href="/" className="nav-link">
                <img src={pinterestLogo} alt="Pinterest Logo" />
              </a>
              <a href="/" className="nav-link">
                <img src={periscopeLogo} alt="Periscope Logo" />
              </a>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}
