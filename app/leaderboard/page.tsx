"use client";

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Trophy, Medal, Award } from 'lucide-react';

const leaderboardData = [
  { rank: 1, name: "Alex Chen", score: 950, games: 42 },
  { rank: 2, name: "Sarah Smith", score: 920, games: 38 },
  { rank: 3, name: "Mike Johnson", score: 890, games: 45 },
  { rank: 4, name: "Emma Davis", score: 850, games: 36 },
  { rank: 5, name: "Chris Wilson", score: 820, games: 40 },
  { rank: 6, name: "Pat Taylor", score: 800, games: 35 },
  { rank: 7, name: "Jordan Lee", score: 780, games: 33 },
  { rank: 8, name: "Sam Brown", score: 760, games: 30 },
  { rank: 9, name: "Casey Kim", score: 740, games: 28 },
  { rank: 10, name: "Riley Park", score: 720, games: 25 },
];

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1:
      return <Trophy className="h-6 w-6 text-yellow-500" />;
    case 2:
      return <Medal className="h-6 w-6 text-gray-300" />;
    case 3:
      return <Award className="h-6 w-6 text-amber-600" />;
    default:
      return <span className="text-lg font-bold text-muted-foreground">{rank}</span>;
  }
};

export default function Leaderboard() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 space-y-4"
        >
          <h1 className="text-4xl font-bold">
            Global{' '}
            <span className="bg-gradient-to-r from-primary to-primary/50 text-transparent bg-clip-text">
              Leaderboard
            </span>
          </h1>
          <p className="text-muted-foreground">
            Top players who have mastered AI image recognition
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="overflow-hidden border border-primary/20 shadow-lg shadow-primary/5">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-primary/20 bg-primary/5">
                    <th className="px-6 py-4 text-left">Rank</th>
                    <th className="px-6 py-4 text-left">Player</th>
                    <th className="px-6 py-4 text-right">Score</th>
                    <th className="px-6 py-4 text-right">Games</th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboardData.map((player, index) => (
                    <motion.tr
                      key={player.rank}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border-b border-primary/10 hover:bg-primary/5 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center w-8">
                          {getRankIcon(player.rank)}
                        </div>
                      </td>
                      <td className="px-6 py-4 font-medium">{player.name}</td>
                      <td className="px-6 py-4 text-right text-primary font-bold">
                        {player.score}
                      </td>
                      <td className="px-6 py-4 text-right text-muted-foreground">
                        {player.games} games
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}