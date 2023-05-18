import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../redux/apiSlice';
import { cancel, reserve } from '../redux/slices/rockets/RocketsSlice';

const Rockets = () => {
  const {
    data, isLoaded, loading, error,
  } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isLoaded) return;
    dispatch(getRockets());
  }, [dispatch, isLoaded]);

  const handleReserve = (id) => dispatch(reserve(id));
  const handleCancel = (id) => dispatch(cancel(id));

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Some went wrong!</p>;
  return (
    <div className="rockets" data-testid="rockets">
      {data.map((rocket) => (
        <div key={rocket.id} className="rocket-item" data-testid="rocket-item">
          <img src={rocket.flickr_images} alt="rocket-img" />
          <div className="rocket-info">
            <h3>{rocket.name}</h3>
            <p>{rocket.description}</p>
            <p>
              {rocket.reserved && <button type="button" className="btn-reserve booked" onClick={() => handleCancel(rocket.id)}>cancel reservation</button>}
              {!rocket.reserved && <button type="button" className="btn-reserve" onClick={() => handleReserve(rocket.id)}>reserve rocket</button>}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
