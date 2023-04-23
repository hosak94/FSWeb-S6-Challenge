import Film from "./Film";

const Filmler = (props) => {
  const { char, films } = props;

  return (
    <h2>
      <div>
        {films &&
          films
            .filter((film, ind) => char.films.includes(film.title))
            .map((film, i) => {
              return <Film key={film.title} film={film} i={i} />;
            })}
      </div>
    </h2>
  );
};

export default Filmler;
