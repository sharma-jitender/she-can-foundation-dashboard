import { Link, useLocation } from 'react-router-dom'

const Navigation = () => {
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-primary-600">
                She Can Foundation
              </h1>
            </div>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link
              to="/dashboard"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/dashboard')
                  ? 'bg-primary-100 text-primary-700'
                  : 'text-gray-600 hover:text-primary-600 hover:bg-primary-50'
              }`}
            >
              Dashboard
            </Link>
            <Link
              to="/leaderboard"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/leaderboard')
                  ? 'bg-primary-100 text-primary-700'
                  : 'text-gray-600 hover:text-primary-600 hover:bg-primary-50'
              }`}
            >
              Leaderboard
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation 