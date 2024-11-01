"use client";
import useUser from "@/hooks/useUser";
import { ITelegramUser, IWebApp } from "@/types/type";
import { usePathname, useSearchParams } from "next/navigation";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export interface ITelegramContext {
  webApp?: IWebApp;
  telegram_user?: ITelegramUser;
}

export const TelegramContext = createContext<ITelegramContext>({});

export const TelegramProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [webApp, setWebApp] = useState<IWebApp | null>(null);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { login, logout } = useUser();
  const tgId = searchParams.get("tgId");

  useEffect(() => {
    const app = (window as any).Telegram?.WebApp;
    if (app) {
      app.ready();
      setWebApp(app);
      setTimeout(() => {
        app.expand();
        app.headerColor = "#0A0318";
        app.isVerticalSwipesEnabled = false;
        app.disableVerticalSwipes();
        app.BackButton.show();
        app.BackButton.onClick(() => window.history.back());
      }, 100);
    }
  }, []);

  useEffect(() => {
    const app = (window as any).Telegram?.WebApp;
    if (app) {
      setTimeout(() => {
        if (pathname === `/`) {
          app.BackButton.hide();
        } else {
          app.BackButton.show();
        }
      }, 100);
    }
  }, [pathname]);

  // encrypted 6365928460 4499501758768256du5M5fG1NEo0SY+tag577g==
  // encrypted 6365928461 6427898935961730nDXYGXvq6A7FWyWms6glFA==
  // encrypted 6365928462 2697130450116749GY92+QvsVj++ehtUq0oUSw==
  // encrypted 6365928463 7125520470488884wHmf5Sq5QSqOU4ch3hMLXQ==

  const statUser = {
    id: 6365928461,
    first_name: "waqas",
  };

  // const statUser = null;

  const value = useMemo(() => {
    return webApp
      ? {
          webApp,
          unsafeData: webApp.initDataUnsafe,
          telegram_user: webApp.initDataUnsafe.user ?? statUser,
        }
      : {};
  }, [webApp, statUser]);

  useEffect(() => {
    console.log(
      "value.telegram_user?.id",
      value.telegram_user,
      "tgId<<><><><>",
      tgId
    );
    // logout();
    if (value.telegram_user?.id && tgId) {
      console.log("logging in tgProvider");
      login(value.telegram_user, tgId);
    }
  }, [value, tgId]);

  return (
    <TelegramContext.Provider value={value as ITelegramContext}>
      {children}
    </TelegramContext.Provider>
  );
};

export const useTelegram = () => useContext(TelegramContext);
