import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import comics from "./data/comics.js";

export default function App() {
  return (
    <>
      <Header />
      <Main data={comics} />
      <Footer />
    </>
  );
}
