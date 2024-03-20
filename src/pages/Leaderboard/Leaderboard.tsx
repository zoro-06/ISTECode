import React from 'react'
import Topbar from '@/components/Topbar/Topbar';
import LeaderboardPage from '@/components/LeaderboardPage/LeaderboardPages';
import Userscore from '@/components/LeaderboardPage/Userscore';


const Leaderboard = () => {
  return (
    <div>
        <Topbar />
        <LeaderboardPage />
    </div>
  )
}

export default Leaderboard

