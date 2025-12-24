// src/context/AppDataContext.tsx
import { InteractiveRow } from "@/types";
import { createContext, useContext, useEffect, useState } from "react";

type StoreInteractiveData = Omit<InteractiveRow,'id'>

const AppDataContext = createContext<StoreInteractiveData | null>(null);

export const InteractiveConfigProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<StoreInteractiveData | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/store/default_store")
      .then(res => res.json())
      .then((d)=>{
        console.log("Fetched interactive data:", d);
        setData(d);
      })
      .catch(console.error);
  }, []);

  if (!data) return null; // or splash screen

  return (
    <AppDataContext.Provider value={data}>
      {children}
    </AppDataContext.Provider>
  );
};

export const useInteractiveConfig = () => {
  const ctx = useContext(AppDataContext);
  if (!ctx) throw new Error("useInteractiveConfig must be used inside InteractiveConfigProvider");
  return ctx;
};
