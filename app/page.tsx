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
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-6xl font-bold">
                Master{' '}
                <span className="bg-gradient-to-r from-primary to-primary/50 text-transparent bg-clip-text">
                  AI Image Generation
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Test your knowledge of AI-generated images and learn to identify different AI tools. Perfect for artists, designers, and tech enthusiasts.
              </p>
              <div className="flex gap-4">
                <Link href="/games/image-guesser">
                  <Button className="gap-2" size="lg">
                    Start Playing
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/leaderboard">
                  <Button variant="outline" size="lg">
                    View Leaderboard
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-lg bg-primary/10 p-8 border border-primary/20 shadow-2xl shadow-primary/10 relative overflow-hidden">
                <div className="grid grid-cols-2 gap-4 h-full">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="rounded-md bg-primary/5 border border-primary/10 animate-pulse"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="grid grid-cols-2 gap-3">
                    {['DALL-E', 'Midjourney'].map((tool) => (
                      <Button
                        key={tool}
                        variant="secondary"
                        className="bg-card/50 backdrop-blur-sm"
                        disabled
                      >
                        {tool}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-center mb-8">Available Games</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Link href="/games/image-guesser">
                <Card className="group p-6 space-y-4 hover:border-primary/50 transition-all duration-300 cursor-pointer bg-card/80 backdrop-blur-sm">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-xl font-bold group-hover:text-primary transition-colors">
                      AI Image Guesser
                    </h2>
                    <p className="text-muted-foreground text-sm">
                      Can you identify which AI tool created these images? Test your knowledge!
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-primary">
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
              <Card className="p-6 space-y-4 border-muted/30 bg-card/80 backdrop-blur-sm">
                <div className="h-12 w-12 rounded-lg bg-muted/10 flex items-center justify-center">
                  <LockKeyhole className="h-6 w-6 text-muted-foreground" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-xl font-bold text-muted-foreground">
                    Build the Prompt
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    Master the art of prompt engineering. Create the perfect prompts for AI images.
                  </p>
                </div>
                <Button variant="secondary" disabled className="w-full opacity-50">
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