import Jumbotron from "./Jumbotron.jsx";
import CardComponent from "./CardComponent.jsx";

export default function Main({ data }) {
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
              {data.map((comic, index) => {
                return <CardComponent comic={comic} key={`comic:${index}`} />;
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
