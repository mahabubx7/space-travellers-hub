import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { reserveDragon } from '../redux/slices/dragons/drangonsSlice';
import styles from './Dragons.module.css';

export default function Dragon({
  id, name, image, reserved, description,
}) {
  const dispatch = useDispatch();

  function handleClick(id) {
    dispatch(reserveDragon(id));
  }

  return (
    <li>
      <figure className={styles.figure}>
        <img className={styles.image} src={image} alt={`shot of ${name}`} />
        <div className={styles.details}>
          <figcaption>{name}</figcaption>
          <p className={styles.desc}>
            {reserved && <small className="reserved">Reserved</small>}
            {description}
          </p>
          {reserved ? <button className={styles.btn_cancel} type="button" onClick={() => handleClick(id)}>Cancel Reservation</button> : <button type="button" className={styles.btn} onClick={() => handleClick(id)}>Reserve Rocket</button>}
        </div>
      </figure>
    </li>
  );
}

Dragon.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  image: PropTypes.string.isRequired,
};
