"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Award, Medal, Trophy } from "lucide-react";

const leaderboardData = [
  { rank: 1, name: "Alex Chen", score: 950 },
  { rank: 2, name: "Sarah Smith", score: 920 },
  { rank: 3, name: "Mike Johnson", score: 890 },
  { rank: 4, name: "Emma Davis", score: 850 },
  { rank: 5, name: "Chris Wilson", score: 820 },
];

export default function Leaderboard() {
  const topThree = leaderboardData.slice(0, 3);
  const remaining = leaderboardData.slice(3);

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 space-y-4">
          <h1 className="text-4xl font-black tracking-tight">Leaderboard</h1>
          <p className="text-muted-foreground font-medium">
            Top players who have mastered AI image recognition
          </p>
        </motion.div>

        {/* Podium Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12">
          <div className="flex justify-center items-end gap-4 h-48">
            {/* Second Place */}
            <div className="flex flex-col items-center">
              <div className="mb-4 relative">
                <Medal className="h-8 w-8 text-gray-400" />
                <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold">
                  2
                </div>
              </div>
              <div className="w-24 h-24 bg-white rounded-t-lg border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-end p-2">
                <span className="font-black text-xl">{topThree[1].score}</span>
                <span className="font-medium text-sm truncate w-full text-center">{topThree[1].name}</span>
              </div>
            </div>

            {/* First Place */}
            <div className="flex flex-col items-center">
              <div className="mb-4 relative">
                <Trophy className="h-8 w-8 text-yellow-500" />
                <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold">
                  1
                </div>
              </div>
              <div className="w-24 h-32 bg-white rounded-t-lg border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-end p-2">
                <span className="font-black text-xl">{topThree[0].score}</span>
                <span className="font-medium text-sm truncate w-full text-center">{topThree[0].name}</span>
              </div>
            </div>

            {/* Third Place */}
            <div className="flex flex-col items-center">
              <div className="mb-4 relative">
                <Award className="h-8 w-8 text-amber-600" />
                <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold">
                  3
                </div>
              </div>
              <div className="w-24 h-20 bg-white rounded-t-lg border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-end p-2">
                <span className="font-black text-xl">{topThree[2].score}</span>
                <span className="font-medium text-sm truncate w-full text-center">{topThree[2].name}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Leaderboard Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}>
          <Card className="overflow-hidden border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <table className="w-full">
              <thead>
                <tr className="border-b border-black bg-black/5">
                  <th className="px-6 py-4 text-left font-bold">Rank</th>
                  <th className="px-6 py-4 text-left font-bold">Player</th>
                  <th className="px-6 py-4 text-right font-bold">Score</th>
                </tr>
              </thead>
              <tbody>
                {remaining.map((player, index) => (
                  <motion.tr
                    key={player.rank}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-black/10 hover:bg-black/5 transition-colors">
                    <td className="px-6 py-4 font-medium">{player.rank}</td>
                    <td className="px-6 py-4 font-medium">{player.name}</td>
                    <td className="px-6 py-4 text-right font-bold">{player.score}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}