"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain, Sparkles, LockKeyhole, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-16 pb-8 px-4 text-center">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative mx-auto max-w-xl"
          >
            <Card className="p-6 rounded-xl border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-3">
                Test Your AI Art Knowledge
              </h1>
              <p className="text-lg md:text-xl font-medium mb-6 text-muted-foreground">
                Can you tell which AI tool created these masterpieces?
              </p>
              <Link href="/games/image-guesser">
                <Button className="bg-black text-white hover:bg-black/90 rounded-lg border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all font-bold text-lg px-8 py-6">
                  Start Playing Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Games Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-extrabold mb-8">Available Games</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Link href="/games/image-guesser">
                <Card className="group p-6 space-y-4 rounded-xl border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 cursor-pointer">
                  <div className="h-12 w-12 rounded-lg bg-black/5 border border-black flex items-center justify-center mx-auto">
                    <Brain className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-xl font-bold">
                      AI Image Guesser
                    </h2>
                    <p className="text-muted-foreground text-sm font-medium">
                      Can you identify which AI tool created these images? Test your knowledge!
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm justify-center font-semibold">
                    <Sparkles className="h-4 w-4" />
                    <span>Play Now</span>
                  </div>
                </Card>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-6 space-y-4 rounded-xl border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] bg-black/5">
                <div className="h-12 w-12 rounded-lg bg-black/10 border border-black flex items-center justify-center mx-auto">
                  <LockKeyhole className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-xl font-bold text-muted-foreground">
                    Build the Prompt
                  </h2>
                  <p className="text-muted-foreground text-sm font-medium">
                    Master the art of prompt engineering. Create the perfect prompts for AI images.
                  </p>
                </div>
                <Button variant="outline" disabled className="w-full rounded-lg border-black/20">
                  Coming Soon
                </Button>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}