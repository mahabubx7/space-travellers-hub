import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Dragon from '../components/Dragon';

describe('dragons ', () => {
  it('renders dragons component', () => {
    render(
      <Provider store={store}>
        <Dragon
          name="Dragon 1"
          reserved={false}
          description="Hello"
          image="dragon 1"
          id="item 1"
        />
      </Provider>,
    );
    expect(screen.getByText('Dragon 1')).toBeInTheDocument();
  });
});
