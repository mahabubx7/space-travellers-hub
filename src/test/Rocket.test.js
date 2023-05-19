import { Provider } from 'react-redux';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import store from '../redux/store';
import Rockets from '../components/Rockets';
import MyProfile from '../components/MyProfile';

describe('Unit Tests: for the Rocket component', () => {
  it('should render the rocket component', async () => {
    const container = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(screen.getByTestId('loading')).toBeInTheDocument();
    expect(screen.queryByText(/Some went wrong!/i)).not.toBeInTheDocument();
    expect(await waitFor(() => container.findByTestId('rockets'))).toBeInTheDocument();
  });

  it('should render the rockets as list', async () => {
    const container = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    const list = await waitFor(() => container.findAllByTestId('rocket-item'));
    expect(list.length).toBe(2); // comes from mock response
    expect((await screen.findAllByRole('button')).length).toBe(2);
  });

  it('should be reserved by clicking the button', async () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect((await waitFor(() => screen.findAllByText(/reserve rocket/i))).length).toBe(2); // 2 buttons [0 reserved]
    userEvent.click(screen.getAllByText(/reserve rocket/i)[0]); // clicking for reverse the first one
    expect(await waitFor(() => screen.findByText(/cancel reservation/i))).toBeInTheDocument(); // 2 buttons [1 reserved]
    userEvent.click(await waitFor(() => screen.findByText(/cancel reservation/i))); // clicking for cancel reservation
    expect((await waitFor(() => screen.findAllByText(/reserve rocket/i))).length).toEqual(2); // 2 buttons [0 reserved]
  });
});

describe('Integration Tests: for the rockets', () => {
  it('should render empty list of reserved rockets', async () => {
    render(
      <Provider store={store}>
        <Rockets />
        <MyProfile />
      </Provider>,
    );
    expect(await waitFor(() => screen.findByText(/my rockets/i))).toBeInTheDocument();
    expect(await waitFor(() => screen.findByText(/empty rocket reservation!/i))).toBeInTheDocument();
  });

  it('should render the list of reserved rockets', async () => {
    render(
      <Provider store={store}>
        <Rockets />
        <MyProfile />
      </Provider>,
    );
    expect(await waitFor(() => screen.findByText(/empty rocket reservation!/i))).toBeInTheDocument(); // empty
    userEvent.click(screen.getAllByText(/reserve rocket/i)[0]); // will reserve the first rocket
    expect(await waitFor(() => screen.findByText(/cancel reservation/i))).toBeInTheDocument(); // cancel button
    expect((await waitFor(() => screen.findAllByTestId('rocket-reserved'))).length).toBe(1); // reserved list in profile
    expect(await waitFor(() => screen.queryByText(/empty rocket reservation!/i))).not.toBeInTheDocument(); // no-empty
    userEvent.click(screen.getByText(/cancel reservation/i)); // will cancel reservation
    expect((await waitFor(() => screen.queryAllByTestId('rocket-reserved'))).length).toBe(0); // reserved list = 0
    expect(await waitFor(() => screen.findByText(/empty rocket reservation!/i))).toBeInTheDocument(); // empty again
    expect(await waitFor(() => screen.queryByText(/cancel reservation/i))).not.toBeInTheDocument(); // no cancel button
  });
});
