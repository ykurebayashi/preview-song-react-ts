import { createContext, ReactNode, useState } from "react";

type props = { 
    children: ReactNode
}

type GlobalContextType = { 
    currentName: string,
    setCurrentName: (value: string) => void,
}
export const GlobalContext = createContext<GlobalContextType>({} as GlobalContextType);

export const GlobalProvider = ({children}: props) => {
    const [currentName, setCurrentName] = useState<string>('teste');

    return(
        <GlobalContext.Provider value={ {currentName, setCurrentName} }>
            {children}
        </GlobalContext.Provider>
    )
}