import React, { useState } from 'react'

export const ContextData = React.createContext()
export default function ContextFile({ children }) {
    const [catalogs, serCatalogs] = useState([
"Каталог",
"ТО / фильтра",
"Тормозная система",
"Двигатель / выхлоп",
"Подвеска / рулевое",
"Коробка передач",
"Охлождение / отопление",
"Электрика / освещение",
"Кузов / элементы",
    ])
    return (
        <ContextData.Provider value={{
            catalogs,
            serCatalogs
        }}>
            {children}
        </ContextData.Provider>
    )
}
