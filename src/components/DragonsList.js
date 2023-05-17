import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import getDragons from '../redux/apiSlice';
import Dragon from './Dragon';
import styles from './Dragons.module.css';

export default function DragonsList() {
  const { value, isLoaded } = useSelector((state) => state.dragons);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoaded) return;
    dispatch(getDragons());
  }, [dispatch, isLoaded]);

  return (
    <ul className={styles.list}>
      {value.map((item) => (
        <Dragon
          key={item.id}
          id={item.id}
          name={item.name}
          image={item.image}
          description={item.description}
          reserved={item.reserved}
        />
      ))}
    </ul>
  );
}
