

import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import FlightTable from './FlightTable';

// Mock axios
jest.mock('axios');

const mockFlights = [
  {
    id: '1',
    flightNumber: 'AA123',
    airline: 'American Airlines',
    origin: 'JFK',
    destination: 'LAX',
    departureTime: '10:00 AM',
    status: 'On Time',
  },
  {
    id: '2',
    flightNumber: 'DL456',
    airline: 'Delta Airlines',
    origin: 'ATL',
    destination: 'ORD',
    departureTime: '11:30 AM',
    status: 'Delayed',
  },
];

test('renders flight table with flight data after API call', async () => {
  (axios.get as jest.Mock).mockResolvedValue({ data: mockFlights });

  render(<FlightTable />);

  // Check if loading message is displayed initially
  expect(screen.getByText('Loading flight data...')).toBeInTheDocument();

  // Wait for the API response to be rendered
  await waitFor(() => expect(screen.getByText('AA123')).toBeInTheDocument());

  // Check if flight details appear
  expect(screen.getByText('American Airlines')).toBeInTheDocument();
  expect(screen.getByText('JFK')).toBeInTheDocument();
  expect(screen.getByText('LAX')).toBeInTheDocument();
  expect(screen.getByText('10:00 AM')).toBeInTheDocument();
  expect(screen.getByText('On Time')).toBeInTheDocument();

  expect(screen.getByText('DL456')).toBeInTheDocument();
  expect(screen.getByText('Delta Airlines')).toBeInTheDocument();
  expect(screen.getByText('ATL')).toBeInTheDocument();
  expect(screen.getByText('ORD')).toBeInTheDocument();
  expect(screen.getByText('11:30 AM')).toBeInTheDocument();
  expect(screen.getByText('Delayed')).toBeInTheDocument();
});
