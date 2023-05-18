import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import MissionsList from '../components/missionsList';

describe('it should show data pass', () => {
  it('render mission information', () => {
    render(
      <Provider store={store}>
        <table>
          <tbody>
            <MissionsList
              key={2}
              mission="mission"
              description="involve"
              id="2"
              reserve
            />
          </tbody>
        </table>
      </Provider>,
    );
    expect(screen.getByText('mission')).toBeInTheDocument();
  });
});
