"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FeedbackModalProps {
  isOpen: boolean;
  isCorrect: boolean;
  correctAnswer: string;
  selectedAnswer: string;
  onClose: () => void;
}

export function FeedbackModal({
  isOpen,
  isCorrect,
  correctAnswer,
  selectedAnswer,
  onClose,
}: FeedbackModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/40"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative z-10 w-[90vw] max-w-md"
          >
            <div className="bg-white rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-8 border border-black">
              <div className="flex flex-col items-center text-center space-y-6">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", bounce: 0.5 }}
                >
                  {isCorrect ? (
                    <CheckCircle2 className="w-20 h-20 text-green-500" />
                  ) : (
                    <XCircle className="w-20 h-20 text-red-500" />
                  )}
                </motion.div>
                
                <motion.h2 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-3xl font-black tracking-tight"
                >
                  {isCorrect ? "Correct! 🎉" : "Not quite right"}
                </motion.h2>
                
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg font-medium"
                >
                  {isCorrect 
                    ? `That was indeed created with ${correctAnswer}!`
                    : `You selected ${selectedAnswer}, but it was actually created with ${correctAnswer}`
                  }
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Button 
                    onClick={onClose}
                    className="bg-black text-white hover:bg-black/90 rounded-none min-w-[140px] text-lg py-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all font-medium"
                  >
                    Continue
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}