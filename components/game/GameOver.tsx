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
    <Card className="w-full max-w-md p-8 text-center space-y-6 bg-card/80 backdrop-blur-sm border border-primary/20 shadow-lg shadow-primary/5">
      <Trophy className="w-16 h-16 mx-auto text-primary" />
      <h1 className="text-3xl font-bold text-primary">Game Over!</h1>
      <p className="text-xl">
        You scored <span className="text-primary font-bold">{score}</span> out of{" "}
        <span className="text-primary font-bold">{totalQuestions}</span>!
      </p>
      <Button 
        onClick={onRestart} 
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 hover:shadow-lg hover:shadow-primary/20"
      >
        Play Again
      </Button>
    </Card>
  );
}