import { Link } from "react-router-dom";
import PropTypes from "prop-types";
function Movie({ id, coverImage, title, genres, summary }) {
  return (
    <div>
      <img src={coverImage} alt={title} />
      <h1>
        <Link to={`movie/${id}`}>{title}</Link>
      </h1>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <p>{summary}</p>
    </div>
  );
}
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  summary: PropTypes.string.isRequired,
};
export default Movie;
