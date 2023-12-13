import React from 'react'

export const ContextData = React.createContext()
export default function ContextFile({ children }) {

    return (
        <ContextData.Provider>
            {children}
        </ContextData.Provider>
    )
}
