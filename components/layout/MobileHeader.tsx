'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Sparkles } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { User } from '@/types/type';
import { useTelegram } from '@/providers/TelegramProvider';

export function MobileHeader() {
  const { telegram_user } = useTelegram();
  const { data: session } = useSession();
  const user = session?.user as User;

  console.log('session', session);

  // Dummy data for when there's no user session
  const dummyUser: User = {
    id: '123',
    telegramId: '1234',
    firstName: 'Guest',
    credits: 100,
    referralCode: 'some_code',
    createdAt: '',
    updatedAt: '',
  };

  const displayUser = user || dummyUser;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black md:hidden">
      <div className="flex items-center justify-between px-4 h-16">
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8 border border-black">
            <AvatarImage
              src={`https://api.dicebear.com/7.x/initials/svg?seed=${telegram_user?.first_name}`}
            />
            <AvatarFallback>{telegram_user?.first_name?.[0]}</AvatarFallback>
          </Avatar>
          <span className="font-medium">{telegram_user?.username}</span>
        </div>
        <div className="flex items-center gap-2 text-sm font-bold">
          <Sparkles className="h-4 w-4" />
          <span>{displayUser?.credits}</span>
        </div>
      </div>
    </div>
  );
}
