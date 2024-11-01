"use client";

import { Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface GameOverProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

export function GameOver({ score, totalQuestions, onRestart }: GameOverProps) {
  return (
    <Card className="w-full max-w-md p-8 text-center space-y-6 bg-white rounded-none border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <Trophy className="w-16 h-16 mx-auto" />
      <h1 className="text-3xl font-black tracking-tight">Game Over!</h1>
      <p className="text-xl font-medium">
        You scored <span className="font-bold">{score}</span> out of{" "}
        <span className="font-bold">{totalQuestions}</span>!
      </p>
      <Button 
        onClick={onRestart} 
        className="w-full bg-black text-white hover:bg-black/90 rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all font-medium"
      >
        Play Again
      </Button>
    </Card>
  );
}