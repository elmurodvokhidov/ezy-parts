import React, { useContext } from 'react'
import { ContextData } from '../../context/ContextFile'

export default function Recommendence() {
    const {cards, } = useContext(ContextData)
    return (
        <>
            <div className="recommenations" style={{ marginTop: '40px' }}>
                <h1 style={{
                    color: 'var(--Dark, #333)',
                    fontSize: '14px',
                    fontWeight: '700',
                    marginBottom: '20px',
                    marginTop: '-37px'
                }}> 🔥 Горящие предложения недели</h1>
<br />
                <div className="recommendings">
                   {
                     cards.filter(i => i.offers)
                     .map((item, ind) => (
                        <div key={ind} className="recommended" style={{
                            background: 'rgba(31, 175, 172, 0.10)',
                            display: 'flex',
                            gap: '12px',
                            padding: '10px',
                            marginBottom: '20px'
                        }}>
                            <div className="recommended_img"><img style={{width: "70px", height: "70px"}} src={item.img} alt="" /></div>
                            <div className="recommended_body">
                                <h1 style={{
                                    color: ' var(--Dark, #333)',
                                    fontSize: '12px',
                                    fontWeight: '700',
                                }}>{item.name}</h1>
                                <h2 style={{
                                    color: 'var(--Dark, #333)',
                                    fontSize: '12px',
                                    fontWeight: '500',
                                }}>{item.to}</h2>
                                <h3 style={{
                                    color: 'var(--Dark, #333)',
                                    fontSize: '15.167px',
                                    fontWeight: '700',
                                    lineHeight: 'normal'
                                }}>{item.price}</h3>
                            </div>
                        </div>
                     ))
                   }
                </div>
            </div>
        </>
    )
}
