// src/context/AppDataContext.tsx
import { InteractiveRow } from "@/types";
import { createContext, useContext, useEffect, useState } from "react";

type StoreInteractiveData = Omit<InteractiveRow,'id'>

const AppDataContext = createContext<StoreInteractiveData | null>(null);

const defaultMetadata:StoreInteractiveData = {
    image: '',
    store_id: '',
    created_at: new Date(),
    metadata: {
        trigger:{
            type:'button',
            position:{x:50,y:50},
            label:'Click me',
            scale:1,
        },
        action:{
          type:'modal',
            content:{
                title:'Default Modal',
                body:'This is a default modal content. Did you forget to set up your interactive data?'
            }
        },
    },
}

export const InteractiveConfigProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<StoreInteractiveData | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/store/default_store")
      .then(res => res.json())
      .then((d)=>{
        console.log("Fetched interactive data:", d);
        setData(d);
      })
      .catch((err)=>{
        console.error("Error fetching interactive data:", err);
        setData(defaultMetadata)
      });
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
