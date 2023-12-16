import React, { useContext } from 'react'
import { ContextData } from '../../context/ContextFile'
import "./page2.css"

export default function Cards() {
  const { cards } = useContext(ContextData)
  return (
    <>
      <div>
        <h2 style={{
          color: '#000',
          fontSize: '24px',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: 'normal'
        }}>Колодки тормозные дисковые</h2>
        <br /><br />

        <div className="cardsSpecial">
          {
            cards.map((item, ind) => (
              <div key={ind} className="cardS">
                <img src={item.img} alt="" />
                <p>{item.name}</p>
                <span>{item.to}</span>
                <div>{item.price}</div>
                <button><img src="./public/img/basket.svg" alt="" /></button>
              </div>
            ))
          }
        </div>
        <br /><br /><br />
      </div>
    </>
  )
}
