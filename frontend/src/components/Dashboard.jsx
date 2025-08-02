import { useState, useEffect } from 'react'
import axios from 'axios'

const Dashboard = () => {
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/user')
        setUserData(response.data)
        setLoading(false)
      } catch (err) {
        setError('Failed to fetch user data')
        setLoading(false)
      }
    }

    fetchUserData()
  }, [])

  const rewards = [
    {
      id: 1,
      title: "Bronze Badge",
      description: "Earned for raising $100+ in donations",
      icon: "🥉",
      unlocked: true
    },
    {
      id: 2,
      title: "Silver Badge",
      description: "Earned for raising $250+ in donations",
      icon: "🥈",
      unlocked: true
    },
    {
      id: 3,
      title: "Gold Badge",
      description: "Earned for raising $500+ in donations",
      icon: "🥇",
      unlocked: true
    },
    {
      id: 4,
      title: "Platinum Badge",
      description: "Earned for raising $1000+ in donations",
      icon: "💎",
      unlocked: false
    },
    {
      id: 5,
      title: "Diamond Badge",
      description: "Earned for raising $2000+ in donations",
      icon: "💠",
      unlocked: false
    }
  ]

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600">{error}</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back!</h1>
        <p className="text-gray-600">Here's your fundraising progress</p>
      </div>

      {/* User Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Intern Name</p>
              <p className="text-lg font-semibold text-gray-900">{userData?.name}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Referral Code</p>
              <p className="text-lg font-semibold text-gray-900">{userData?.referralCode}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 text-purple-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Donations</p>
              <p className="text-lg font-semibold text-gray-900">${userData?.totalDonations}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Rewards Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Rewards & Unlockables</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {rewards.map((reward) => (
            <div
              key={reward.id}
              className={`p-4 rounded-lg border-2 transition-all ${
                reward.unlocked
                  ? 'border-green-200 bg-green-50'
                  : 'border-gray-200 bg-gray-50 opacity-60'
              }`}
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{reward.icon}</span>
                <div>
                  <h3 className={`font-medium ${
                    reward.unlocked ? 'text-gray-900' : 'text-gray-500'
                  }`}>
                    {reward.title}
                  </h3>
                  <p className={`text-sm ${
                    reward.unlocked ? 'text-gray-600' : 'text-gray-400'
                  }`}>
                    {reward.description}
                  </p>
                </div>
              </div>
              {reward.unlocked && (
                <div className="mt-2">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Unlocked
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard 