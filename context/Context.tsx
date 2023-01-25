import { createContext, useContext, useEffect, useState } from 'react'

type SearchModes = 'default' | 'media' | 'learning' | 'creating'


export const Context = createContext({})

export const ContextProvider = ({ children }: any) => {
    const [searchMode, setSearchMode] = useState<SearchModes>("default")
    const [searchQuery, setSearchQuery] = useState<string>("");


    return (
        <Context.Provider value={{}}>
            {children}
        </Context.Provider>
    )
};

export const useCtx = () => useContext(Context)