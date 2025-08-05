import { useState, useEffect } from 'react'
import axios from 'axios'

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const baseURL = window.location.origin;
        const response = await axios.get(`${baseURL}/api/leaderboard`, {
          timeout: 10000,
          headers: {
            'Content-Type': 'application/json',
          }
        });
        setLeaderboardData(response.data);
        setLoading(false);
      } catch (err) {
        console.error('API Error:', err);
        setError('Failed to fetch leaderboard data. Please try again.');
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

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
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Leaderboard</h1>
        <p className="text-gray-600">Top performing interns this month</p>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Top Fundraisers</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rank
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Intern Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Referral Code
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Donations
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Badge
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {leaderboardData.map((intern, index) => {
                const getBadge = (amount) => {
                  if (amount >= 1000) return { icon: "💎", name: "Platinum" }
                  if (amount >= 500) return { icon: "🥇", name: "Gold" }
                  if (amount >= 250) return { icon: "🥈", name: "Silver" }
                  if (amount >= 100) return { icon: "🥉", name: "Bronze" }
                  return { icon: "⭐", name: "Rising Star" }
                }

                const badge = getBadge(intern.totalDonations)

                return (
                  <tr key={intern.referralCode} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {index === 0 && (
                          <span className="text-2xl mr-2">🥇</span>
                        )}
                        {index === 1 && (
                          <span className="text-2xl mr-2">🥈</span>
                        )}
                        {index === 2 && (
                          <span className="text-2xl mr-2">🥉</span>
                        )}
                        <span className={`text-sm font-medium ${
                          index < 3 ? 'text-gray-900' : 'text-gray-500'
                        }`}>
                          #{index + 1}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {intern.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500 font-mono">
                        {intern.referralCode}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-semibold text-green-600">
                        ${intern.totalDonations}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="text-lg mr-2">{badge.icon}</span>
                        <span className="text-sm text-gray-600">{badge.name}</span>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-2xl font-bold text-primary-600">
            {leaderboardData.length}
          </div>
          <div className="text-sm text-gray-600">Total Participants</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-2xl font-bold text-green-600">
            ${leaderboardData.reduce((sum, intern) => sum + intern.totalDonations, 0)}
          </div>
          <div className="text-sm text-gray-600">Total Raised</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-2xl font-bold text-purple-600">
            ${Math.round(leaderboardData.reduce((sum, intern) => sum + intern.totalDonations, 0) / leaderboardData.length)}
          </div>
          <div className="text-sm text-gray-600">Average per Intern</div>
        </div>
      </div>
    </div>
  )
}

export default Leaderboard 