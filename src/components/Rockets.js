import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../redux/apiSlice';
import { reserve } from '../redux/slices/rockets/RocketsSlice';

const Rockets = () => {
  const { data, isLoading, error } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  const handleReserve = (id) => dispatch(reserve(id));

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Some went wrong!</p>;
  return (
    <div className="rockets">
      {data.map((rocket) => (
        <div key={rocket.id} className="rocket-item">
          <img src={rocket.flickr_images[0]} alt="rocket-img" />
          <div className="rocket-info">
            <h3>{rocket.name}</h3>
            <p>{rocket.description}</p>
            <p>
              <button
                type="button"
                className={`btn-reserve${rocket.reserved ? ' booked' : ''}`}
                onClick={() => handleReserve(rocket.id)}
              >
                {rocket.reserved ? 'cancel reservation' : 'reserve rocket'}
              </button>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
