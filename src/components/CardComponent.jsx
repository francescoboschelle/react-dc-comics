export default function CardComponent({ comic }) {
  return (
    <>
      <div className="col-2">
        <div className="card border-0 bg-dark text-white">
          <img src={comic.thumb} alt={comic.title} />
          <div className="card-body">
            <h4 className="card-title">{comic.title}</h4>
          </div>
        </div>
      </div>
    </>
  );
}
