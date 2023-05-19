import { render, screen } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import DragonsList from '../components/DragonsList';
import '../redux/apiSlice';

jest.mock('react-redux');
jest.mock('../redux/apiSlice');

describe('DragonsList', () => {
  beforeEach(() => {
    useSelector.mockReturnValue({
      value: [
        {
          id: '1', name: 'Dragon 1', image: 'image link', description: 'Description 1', reserved: false,
        },
        {
          id: '2', name: 'Dragon 2', image: 'image link', description: 'Description 2', reserved: true,
        },
      ],
      isLoaded: true,
    });

    useDispatch.mockReturnValue(jest.fn());
  });

  it('renders the list correctly', () => {
    render(<DragonsList />);
    expect(screen.getByText('Dragon 1')).toBeInTheDocument();
    expect(screen.getByText('Dragon 2')).toBeInTheDocument();
  });
});
