import Jumbotron from "./Jumbotron.jsx";
import comics from "../data/comics.js";

export default function Main() {
  return (
    <>
      <main>
        <Jumbotron />
        <div className="bg-dark position-relative">
          <div className="container pt-5 pb-5">
            <div className="display-text bg-primary text-white position-absolute pt-3 pb-3 pe-5 ps-5 fw-medium fs-4">
              CURRENT SERIES
            </div>
            <div className="row g-4">
              {comics.map((comic, index) => {
                return (
                  <div className="col-2" key={`comic:${index}`}>
                    <div className="card border-0 bg-dark text-white">
                      <img src={comic.thumb} alt={comic.title} />
                      <div className="card-body">
                        <h4 className="card-title">{comic.title}</h4>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="d-flex justify-content-center">
              <a
                href="/"
                className="btn rounded-0 fs-5 fw-medium text-white bg-primary"
              >
                LOAD MORE
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
