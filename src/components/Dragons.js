import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import getDragons from '../redux/apiSlice';

export default function Dragons() {
  const { value } = useSelector((state) => state.dragons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDragons());
  }, [dispatch]);

  return (
    <ul>
      {value.map((item) => (
        <li key={item.id}>
          <figure>
            <img src={item.image} alt={`shot of ${item.name}`} />
            <div>
              <figcaption>{item.name}</figcaption>
              <p>
                <small className="reserved">Reserved</small>
                {item.description}
              </p>
              <button type="button">Reserve Rocket</button>
            </div>
          </figure>
        </li>
      ))}
    </ul>
  );
}
