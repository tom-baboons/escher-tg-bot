"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Trophy, Home, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const pathname = usePathname();
  
  const routes = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/games/image-guesser', label: 'Play', icon: Brain },
    { href: '/leaderboard', label: 'Ranks', icon: Trophy },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black hidden md:block">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-lg font-black tracking-tight">
            AI Games Hub
          </Link>

          <div className="flex items-center gap-6">
            {routes.map((route) => {
              const Icon = route.icon;
              return (
                <Link key={route.href} href={route.href}>
                  <Button
                    variant="ghost"
                    className={`gap-2 font-medium ${
                      pathname === route.href ? 'text-black' : 'text-muted-foreground'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {route.label}
                  </Button>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-black md:hidden">
        <div className="flex items-center justify-around h-16">
          {routes.map((route) => {
            const Icon = route.icon;
            const isActive = pathname === route.href;
            return (
              <Link key={route.href} href={route.href} className="w-full">
                <Button
                  variant="ghost"
                  className={`w-full h-16 flex flex-col gap-1 items-center justify-center rounded-none ${
                    isActive ? 'text-black bg-black/5' : 'text-muted-foreground'
                  }`}
                >
                  <Icon className={`h-5 w-5 ${isActive ? 'scale-110' : ''}`} />
                  <span className="text-xs font-medium">{route.label}</span>
                </Button>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}