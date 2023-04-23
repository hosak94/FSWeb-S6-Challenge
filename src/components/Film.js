import Accordeon from "./Accordeon";

const Film = (props) => {
  const { film } = props;
  return (
    <div>
      <Accordeon title={film.title}>
        <p>{film.opening_crawl}</p>
        <p>Title: {film.title}</p>
        <p>Director: {film.director}</p>
        <p>Producer: {film.producer}</p>
        <p>Release Date: {film.release_date}</p>
      </Accordeon>
    </div>
  );
};

export default Film;
