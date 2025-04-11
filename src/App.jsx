import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AdminRoute from './routes/AdminRoute';
import ManagerRoute from './routes/ManagerRoute';
import ProtectedRoute from './routes/ProtectedRoute';
import RunnerRoute from './routes/RunnerRoute';
import ScannerRoute from './routes/ScannerRoute';

export default function App() {
  return (
    <Router>
      <div className='h-screen px-4 py-4'>
        <Routes>
        <Route path='/login' element={<LoginPage />} />
          <Route
            path='/'
            element={
              <ProtectedRoute allowedRoles={['admin', 'manager', 'scanner', 'runner']}>
                <RunnerRoute />
              </ProtectedRoute>
            }
          />
          <Route
            path='/scanner/*'
            element={
              <ProtectedRoute allowedRoles={['admin', 'manager', 'scanner']}>
                <ScannerRoute />
              </ProtectedRoute>
            }
          />
          <Route
            path='/manager/*'
            element={
              <ProtectedRoute allowedRoles={['admin', 'manager']}>
                <ManagerRoute />
              </ProtectedRoute>
            }
          />
          <Route
            path='/admin/*'
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminRoute />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
