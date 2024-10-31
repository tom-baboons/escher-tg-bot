"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useToast } from '@/components/ui/use-toast';
import { GameCard } from '@/components/game/GameCard';
import { GameOver } from '@/components/game/GameOver';
import { questions } from '@/lib/game-data';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function ImageGuesser() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const { toast } = useToast();

  const handleAnswer = (answer: string) => {
    const correct = answer === questions[currentQuestion].correctAnswer;
    
    if (correct) {
      setScore(score + 1);
      toast({
        title: "Correct! 🎉",
        description: `That was indeed created with ${answer}!`,
        className: "bg-green-500 text-white",
      });
    } else {
      toast({
        title: "Not quite right",
        description: `It was actually created with ${questions[currentQuestion].correctAnswer}`,
        variant: "destructive",
      });
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setGameOver(true);
    }
  };

  const resetGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setGameOver(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative">
      <Link href="/" className="absolute top-4 left-4">
        <Button variant="ghost" className="gap-2 text-primary hover:text-primary/80">
          <ArrowLeft className="h-4 w-4" />
          Back to Games
        </Button>
      </Link>
      
      {gameOver ? (
        <GameOver
          score={score}
          totalQuestions={questions.length}
          onRestart={resetGame}
        />
      ) : (
        <GameCard
          question={questions[currentQuestion]}
          currentQuestion={currentQuestion}
          totalQuestions={questions.length}
          score={score}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  );
}