"use client";

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';
import { type ImageQuestion } from '@/lib/game-data';

interface GameCardProps {
  question: ImageQuestion;
  currentQuestion: number;
  totalQuestions: number;
  score: number;
  onAnswer: (answer: string) => void;
}

export function GameCard({
  question,
  currentQuestion,
  totalQuestions,
  score,
  onAnswer,
}: GameCardProps) {
  return (
    <Card className="w-full max-w-md p-6 space-y-6 bg-card/80 backdrop-blur-sm border border-primary/20 shadow-lg shadow-primary/5">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-primary">
          Question {currentQuestion + 1}/{totalQuestions}
        </span>
        <span className="flex items-center gap-2 text-primary">
          <Sparkles className="w-4 h-4" />
          Score: {score}
        </span>
      </div>

      <div className="relative aspect-square w-full overflow-hidden rounded-lg ring-2 ring-primary/20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full"
          >
            <Image
              src={question.imageUrl}
              alt="AI Generated Image"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {question.options.map((option) => (
          <Button
            key={option}
            onClick={() => onAnswer(option)}
            variant="secondary"
            className="h-auto py-4 hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:shadow-lg hover:shadow-primary/20"
          >
            {option}
          </Button>
        ))}
      </div>
    </Card>
  );
}