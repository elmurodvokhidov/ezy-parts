import React, { useContext } from 'react'
import { PiShoppingCartLight } from "react-icons/pi";
import { ContextData } from '../../context/ContextFile';
export default function Products() {
    const { cards } = useContext(ContextData)
    return (
        <div className="products">

            <h2 style={{
                color: '#000',
                fontSize: '24px',
                fontStyle: 'normal',
                fontWeight: '700',
                lineHeight: 'normal'
            }}>Колодки тормозные дисковые</h2>
<br /><br />
            {
                cards.map((item, ind) => (
                    <div key={ind} className="product" style={{
                        // width: '651px',
                        height: '150px',
                        background: '#E9F7F7',
                        padding: '8px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: '10px',

                    }}>
                        <div className="product__img"><img src={item.img} alt="" /></div>
                        <div className="product__body" style={{
                            display: 'flex'
                        }}>
                            <div className="left" style={{ marginLeft: '10px' }}>
                                <h1 style={{
                                    color: '#000',
                                    fontSize: '18px',
                                    fontWeight: '700',
                                }}>{item.name}</h1>
                                <h2 style={{
                                    width: "350px",
                                    color: 'var(--Opacity-2, #867777)',
                                    fontSize: '14px',
                                    fontWeight: '500',
                                }}> <br />{item.size} </h2>
                                <div style={{
                                    display: 'flex',
                                    gap: '30px',
                                    marginTop: '35px',
                                }}>
                                    <div>{item.place}</div>
                                    <div>{item.day}</div>
                                    <div>👁 {item.looks} просмотра</div>
                                </div>
                            </div>
                            <div className="right">
                                <div style={{
                                    color: 'var(--Dark, #333)',
                                    textAlign: 'right',
                                    fontSize: '18px',
                                    fontWeight: '700',
                                    marginTop: '15px',
                                    marginRight: '20px'
                                }}>{item.price}</div>
                                <div><button style={{
                                    display: 'inline-flex',
                                    padding: '10px 15px',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '10px',
                                    borderRadius: '3px',
                                    background: '#1FAFAC',
                                    marginTop: '58px',
                                    marginLeft: '30px'
                                }}><PiShoppingCartLight /></button></div>
                            </div>
                        </div>
                    </div>

                ))
            }

            <br /><br /><br />
        </div>
    )
}
