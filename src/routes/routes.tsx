import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Dashboard from '../pages/Dashboard/index'
import Login from '../pages/Login'

const AppRouters = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default AppRouters
