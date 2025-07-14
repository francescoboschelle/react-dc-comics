import digitalComics from "../assets/img/buy-comics-digital-comics.png";
import dcMerchandise from "../assets/img/buy-comics-digital-comics.png";
import subscription from "../assets/img/buy-comics-digital-comics.png";
import comicShopLocator from "../assets/img/buy-comics-digital-comics.png";
import dcPowerVisa from "../assets/img/buy-comics-digital-comics.png";
// ---
import facebookLogo from "../assets/img/footer-facebook.png";
import twitterLogo from "../assets/img/footer-twitter.png";
import ytLogo from "../assets/img/footer-youtube.png";
import pinterestLogo from "../assets/img/footer-pinterest.png";
import periscopeLogo from "../assets/img/footer-periscope.png";

export default function Footer() {
  return (
    <>
      <footer>
        <div>
          <div>
            <img src={digitalComics} alt="Digital Comics Image" />
            <a href="/">DIGITAL COMICS</a>
          </div>
          <div>
            <img src={dcMerchandise} alt="DC Merchandise Image" />
            <a href="/">DC MERCHANDISE</a>
          </div>
          <div>
            <img src={subscription} alt="Subscription Image" />
            <a href="/">SUBSCRIPTION</a>
          </div>
          <div>
            <img src={comicShopLocator} alt="Comic Shop Locator Image" />
            <a href="/">COMIC SHOP LOCATOR</a>
          </div>
          <div>
            <img src={dcPowerVisa} alt="DC Power Visa Image" />
            <a href="/">DC POWER VISA</a>
          </div>
        </div>

        <nav>
          <div>
            <div>
              <h3>DC COMICS</h3>
              <a href="/">Characters</a>
              <a href="/">Comics</a>
              <a href="/">Movies</a>
              <a href="/">TV</a>
              <a href="/">Games</a>
              <a href="/">Videos</a>
              <a href="/">News</a>
            </div>
            <div>
              <h3>SHOP</h3>
              <a href="/">Shop DC</a>
              <a href="/">Shop DC Collectibles</a>
            </div>
          </div>

          <div>
            <div>
              <h3>DC</h3>
              <a href="/">Terms Of Use</a>
              <a href="/">Privacy policy &lpar;new&rpar;</a>
              <a href="/">Ad Choices</a>
              <a href="/">Advertising</a>
              <a href="/">Jobs</a>
              <a href="/">Subscriptions</a>
              <a href="/">Talent Workshops</a>
              <a href="/">CPSC Certificates</a>
              <a href="/">Ratings</a>
              <a href="/">Shop Help</a>
              <a href="/">Contact Us</a>
            </div>
          </div>

          <div>
            <div>
              <h3>SITES</h3>
              <a href="/">DC</a>
              <a href="/">MAD Magazine</a>
              <a href="/">DC Kids</a>
              <a href="/">DC Universe</a>
              <a href="/">DC Power Visa</a>
            </div>
          </div>
        </nav>

        <div>
          <div>
            <a href="/">SIGN-UP NOW!</a>
          </div>

          <div>
            <a href="/">FOLLOW US</a>
            <img src={facebookLogo} alt="Facebook Logo" />
            <img src={twitterLogo} alt="Twitter Logo" />
            <img src={ytLogo} alt="YouTube Logo" />
            <img src={pinterestLogo} alt="Pinterest Logo" />
            <img src={periscopeLogo} alt="Periscope Logo" />
          </div>
        </div>
      </footer>
    </>
  );
}
