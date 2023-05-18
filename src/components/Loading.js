import icon from '../imgs/planet1.png';

const Loading = () => (
  <div className="loading" data-testid="loading">
    <span className="load-spin">
      <img src={icon} alt="spin-icon" />
    </span>
  </div>
);

export default Loading;
