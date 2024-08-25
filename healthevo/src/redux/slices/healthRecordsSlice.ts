import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface HealthRecord {
  id: string;
  date: string;
  provider: string;
  testType: string;
  result: string;
  documentUrl: string;
}

interface HealthRecordsState {
  records: HealthRecord[];
  searchQuery: string;
  filters: {
    date?: string;
    provider?: string;
    testType?: string;
  };
}

// Initial state with dummy data for testing
const initialState: HealthRecordsState = {
  records: [
    {
      id: '1',
      date: '2024-08-01',
      provider: 'Health Clinic A',
      testType: 'Blood Test',
      result: '200 mg/dL',
      documentUrl: 'https://example.com/documents/blood-test-1.pdf',
    },
    {
      id: '2',
      date: '2024-08-15',
      provider: 'Health Clinic B',
      testType: 'Cholesterol Test',
      result: '180 mg/dL',
      documentUrl: 'https://example.com/documents/cholesterol-test-2.pdf',
    },
    {
      id: '3',
      date: '2024-08-20',
      provider: 'Health Clinic C',
      testType: 'Blood Pressure Test',
      result: '120/80 mmHg',
      documentUrl: 'https://example.com/documents/blood-pressure-test-3.pdf',
    },
    {
      id: '4',
      date: '2024-08-20',
      provider: 'Health Clinic C',
      testType: 'Blood Pressure Test',
      result: '120/80 mmHg',
      documentUrl: 'https://example.com/documents/blood-pressure-test-3.pdf',
    },
    {
      id: '5',
      date: '2024-08-20',
      provider: 'Health Clinic C',
      testType: 'Blood Pressure Test',
      result: '120/80 mmHg',
      documentUrl: 'https://example.com/documents/blood-pressure-test-3.pdf',
    },
    {
      id: '6',
      date: '2024-08-20',
      provider: 'Health Clinic C',
      testType: 'Blood Pressure Test',
      result: '120/80 mmHg',
      documentUrl: 'https://example.com/documents/blood-pressure-test-3.pdf',
    },
  ],
  searchQuery: '',
  filters: {},
};

const healthRecordsSlice = createSlice({
  name: 'healthRecords',
  initialState,
  reducers: {
    setRecords(state, action: PayloadAction<HealthRecord[]>) {
      state.records = action.payload;
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
    setFilters(state, action: PayloadAction<HealthRecordsState['filters']>) {
      state.filters = action.payload;
    },
  },
});

export const { setRecords, setSearchQuery, setFilters } = healthRecordsSlice.actions;
export default healthRecordsSlice.reducer;





















// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface HealthRecord {
//   id: string;
//   date: string;
//   provider: string;
//   testType: string;
//   result: string;
//   documentUrl: string;
// }

// interface HealthRecordsState {
//   records: HealthRecord[];
//   searchQuery: string;
//   filters: {
//     date?: string;
//     provider?: string;
//     testType?: string;
//   };
// }

// const initialState: HealthRecordsState = {
//   records: [],
//   searchQuery: '',
//   filters: {},
// };

// const healthRecordsSlice = createSlice({
//   name: 'healthRecords',
//   initialState,
//   reducers: {
//     setRecords(state, action: PayloadAction<HealthRecord[]>) {
//       state.records = action.payload;
//     },
//     setSearchQuery(state, action: PayloadAction<string>) {
//       state.searchQuery = action.payload;
//     },
//     setFilters(state, action: PayloadAction<HealthRecordsState['filters']>) {
//       state.filters = action.payload;
//     },
//   },
// });

// export const { setRecords, setSearchQuery, setFilters } = healthRecordsSlice.actions;
// export default healthRecordsSlice.reducer;
