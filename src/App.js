import router from './router';
import React, { Suspense } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Router>
        {router}
      </Router>
    </Suspense>
  )
}

export default App
