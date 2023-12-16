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
    const [cardTable, setCardTable] = useState(true)
    const [cards, setCards] = useState([
        {
            name: "Колодки тормозные дисковые",
            img: "./public/img/kolodka.png",
            to: "Toyota Camry",
            price: "99 999 тг.",
            size: "б/у, 265/65/R17 Зимние шипованные  265/65/R17 состояние новых шин ",
            place: "Алматы",
            day: "22 сентября",
            looks: 89,
            offers: false
        },
        {
            name: "Колодки тормозные дисковые",
            img: "./public/img/shina.png",
            to: "Toyota Camry",
            price: "959 999 тг.",
            size: "б/у, 265/65/R17 Зимние шипованные  265/65/R17 состояние новых шин ",
            place: "Алматы",
            day: "22 сентября",
            looks: 22,
            offers: true
        },
        {
            name: "Колодки тормозные дисковые",
            img: "./public/img/kolodka.png",
            to: "Toyota Camry",
            price: "99 999 тг.",
            size: "б/у, 265/65/R17 Зимние шипованные  265/65/R17 состояние новых шин ",
            place: "Алматы",
            day: "22 сентября",
            looks: 56,
            offers: true
        },
        {
            name: "Колодки тормозные дисковые",
            img: "./public/img/kolodka.png",
            to: "Toyota Camry",
            price: "99 999 тг.",
            size: "б/у, 265/65/R17 Зимние шипованные  265/65/R17 состояние новых шин ",
            place: "namangan",
            day: "3 сентября",
            looks: 26,
            offers: false
        },
        {
            name: "Колодки тормозные дисковые",
            img: "./public/img/shina.png",
            to: "Toyota Camry",
            price: "99 999 тг.",
            size: "б/у, 265/65/R17 Зимние шипованные  265/65/R17 состояние новых шин ",
            place: "Алматы",
            day: "12 сентября",
            looks: 24,
            offers: false
        },        {
            name: "Колодки тормозные дисковые",
            img: "./public/img/kolodka.png",
            to: "Toyota Camry",
            price: "99 999 тг.",
            size: "б/у, 265/65/R17 Зимние шипованные  265/65/R17 состояние новых шин ",
            place: "namangan",
            day: "3 сентября",
            looks: 26,
            offers: true
        },
        {
            name: "Колодки тормозные дисковые",
            img: "./public/img/shina.png",
            to: "Toyota Camry",
            price: "99 999 тг.",
            size: "б/у, 265/65/R17 Зимние шипованные  265/65/R17 состояние новых шин ",
            place: "Алматы",
            day: "12 сентября",
            looks: 24,
            offers: true
        },        {
            name: "Колодки тормозные дисковые",
            img: "./public/img/kolodka.png",
            to: "Toyota Camry",
            price: "99 999 тг.",
            size: "б/у, 265/65/R17 Зимние шипованные  265/65/R17 состояние новых шин ",
            place: "namangan",
            day: "3 сентября",
            looks: 26,
            offers: true
        },
        {
            name: "Колодки тормозные дисковые",
            img: "./public/img/shina.png",
            to: "Toyota Camry",
            price: "99 999 тг.",
            size: "б/у, 265/65/R17 Зимние шипованные  265/65/R17 состояние новых шин ",
            place: "Алматы",
            day: "12 сентября",
            looks: 24,
            offers: false
        },
        {
            name: "Колодки тормозные дисковые",
            img: "./public/img/kolodka.png",
            to: "Toyota Camry",
            price: "99 999 тг.",
            size: "б/у, 265/65/R17 Зимние шипованные  265/65/R17 состояние новых шин ",
            place: "Алматы",
            day: "22 сентября",
            looks: 89,
            offers: true
        },
        {
            name: "Колодки тормозные дисковые",
            img: "./public/img/shina.png",
            to: "Toyota Camry",
            price: "959 999 тг.",
            size: "б/у, 265/65/R17 Зимние шипованные  265/65/R17 состояние новых шин ",
            place: "Алматы",
            day: "22 сентября",
            looks: 22,
            offers: true
        },
        {
            name: "Колодки тормозные дисковые",
            img: "./public/img/kolodka.png",
            to: "Toyota Camry",
            price: "99 999 тг.",
            size: "б/у, 265/65/R17 Зимние шипованные  265/65/R17 состояние новых шин ",
            place: "Алматы",
            day: "22 сентября",
            looks: 56,
            offers: true
        },
    ])
    return (
        <ContextData.Provider value={{
            catalogs,
            serCatalogs,
            cardTable,
            setCardTable,
            cards, 
            setCards
        }}>
            {children}
        </ContextData.Provider>
    )
}
