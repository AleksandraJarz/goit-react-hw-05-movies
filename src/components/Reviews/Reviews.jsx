import { useParams } from 'react-router-dom';
import useFilms from 'components/useFilms';

export default function Reviews() {
  const { movieId } = useParams();
  const { filmData } = useFilms(`movie/${movieId}/reviews?`);

  return (
    <div>
      {filmData.total_results < 1 && <p>no reviews</p>}
      <ul>
        {filmData.results?.map(review => (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
