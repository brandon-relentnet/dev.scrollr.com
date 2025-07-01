import sportsData from '../data/sports_mock.json';
import financeData from '../data/finance_mock.json';

export const loadSportsMockData = () => {
  return {
    type: "filtered_data",
    data: sportsData.games || [],
    count: sportsData.games?.length || 0,
    timestamp: Date.now()
  };
};

export const loadFinanceMockData = () => {
  return {
    type: "filtered_data",
    data: financeData.trades || [],
    count: financeData.trades?.length || 0,
    timestamp: Date.now()
  };
};

export const useMockData = process.env.NODE_ENV === 'development' && process.env.NEXT_PUBLIC_USE_MOCK_DATA === 'true';