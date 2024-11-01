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
    <Card className="w-full max-w-md p-6 space-y-6 bg-white rounded-none border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="flex justify-between items-center text-center">
        <span className="text-sm font-bold">
          Question {currentQuestion + 1}/{totalQuestions}
        </span>
        <span className="flex items-center gap-2 font-bold">
          <Sparkles className="w-4 h-4" />
          Score: {score}
        </span>
      </div>

      <div className="relative aspect-square w-full overflow-hidden rounded-none border border-black">
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
            variant="outline"
            className="h-auto py-4 rounded-none border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all font-medium"
          >
            {option}
          </Button>
        ))}
      </div>
    </Card>
  );
}