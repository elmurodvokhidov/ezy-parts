import React, { useContext } from 'react'
import { CiLocationOn } from "react-icons/ci";
import { IoSearchSharp } from "react-icons/io5";
import { RiTimeLine } from "react-icons/ri";
import { TiShoppingCart } from "react-icons/ti";
import { FiUser } from "react-icons/fi";

import "./navbar.css"
import { ContextData } from '../context/ContextFile';
export default function Navbar() {
  const { catalogs } = useContext(ContextData)
  return (
    <>
      <section className='BlackNavSec'>
        <div className='container'>
          <div><CiLocationOn /> <span>Алматы  </span></div>
          <div>Бесплатная доставка заказов до конца декабря!</div>
          <div></div>
        </div>
      </section>
      <nav className='container'>
        <div className="logo"><img src="./public/img/logo.svg" alt="" /></div>

        <ul className="pages">
          <li>О нас</li>
          <li>Помощь</li>
          <li>Продавцу</li>
          <li>Покупателю</li>
          <li>Контакты</li>
        </ul>

        <div className='inputSearch'>
          <input type="text" placeholder='Введите номер детали, название или VIN' />
          <div>
            <RiTimeLine />
            <IoSearchSharp />
          </div>
        </div>

        <div className="accounts">
          <div><TiShoppingCart /></div>
          <div><FiUser /></div>
        </div>
      </nav>
      <div className="catalogs">
        <ul className='container'>
          {
            catalogs.map((item, ind) => (
              <li key={ind}>{item}</li>
            ))
          }
        </ul>
      </div>
    </>
  )
}
