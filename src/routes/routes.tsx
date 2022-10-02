import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import App from '../pages/App/App'
import Login from '../pages/Login'

const AppRouters = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<App />} />
      </Routes>
    </Router>
  )
}

export default AppRouters
