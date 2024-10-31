"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Trophy, Home, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export function Navbar() {
  const pathname = usePathname();
  
  const routes = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/games/image-guesser', label: 'Play Game', icon: Brain },
    { href: '/leaderboard', label: 'Leaderboard', icon: Trophy },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-primary/20">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold text-primary">
          AI Games Hub
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {routes.map((route) => {
            const Icon = route.icon;
            return (
              <Link key={route.href} href={route.href}>
                <Button
                  variant="ghost"
                  className={`gap-2 ${
                    pathname === route.href ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {route.label}
                </Button>
              </Link>
            );
          })}
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="text-primary">Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4 mt-6">
              {routes.map((route) => {
                const Icon = route.icon;
                return (
                  <Link key={route.href} href={route.href}>
                    <Button
                      variant="ghost"
                      className={`w-full justify-start gap-2 ${
                        pathname === route.href ? 'text-primary' : 'text-muted-foreground'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {route.label}
                    </Button>
                  </Link>
                );
              })}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}