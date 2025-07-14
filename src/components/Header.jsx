import Logo from "./Logo.jsx";

export default function Header() {
  return (
    <>
      <header>
        <Logo />

        <nav>
          <div>
            <a href="/">CHARACTERS</a>
            <a href="/">COMICS</a>
            <a href="/">MOVIES</a>
            <a href="/">TV</a>
            <a href="/">GAMES</a>
            <a href="/">COLLECTIBLES</a>
            <a href="/">VIDEOS</a>
            <a href="/">FANS</a>
            <a href="/">NEWS</a>
            <a href="/">SHOP</a>
          </div>
        </nav>
      </header>
    </>
  );
}
