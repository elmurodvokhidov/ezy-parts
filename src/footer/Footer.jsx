import React from 'react'
import "./footer.css"
export default function Footer() {
  return (
    <>
      <footer>
        <section className='footer1'>
          <figure className='wheel'>
            <img className='balon' src="./public/img/wheel.png" alt="" />
            <img src="./public/img/GalatiChiziq1.png" alt="" />
          </figure>
          <figure className='porshen'>
            <img className='imgporshen' src="./public/img/Transmission.png" alt="" />
            <img src="./public/img/GalatiChiziq2.png" alt="" />
          </figure>
          <center> <div className="footer1Title">Начните продавать на EZY Parts!</div></center>
          <center><button className='footer1Button'>СТАТЬ ПРОДАВЦОМ</button></center>
        </section>
        <center><img className='reclama' src="./public/img/Reklama.jpg" alt="" /></center>

        <section className='footer2'>
          <div className='container'>
            <div className='footerCatalogs'>
              <div>
                <p>Каталог автозапчастей</p>
                <p>О компании</p>
                <p>Помощь</p>
                <p>Покупателю</p>
              </div>
              <div>
                <p>Продавцу</p>
                <p>Реклама на сайте</p>
                <p>Контакты</p>
                <p></p>
              </div>
            </div>

            <div className='webSites'>
              <figure>
                <img src="./public/img/vk.png" alt="" />
                <img src="./public/img/facebook.png" alt="" />
                <img src="./public/img/instagram.png" alt="" />
              </figure>
              <div>
                <div>
                  <img src="./public/img/logo.svg" alt="" />
                </div>
                <br />
                <p>© 2021, EZY parts</p>
              </div>
            </div>
          </div>
        </section>

      </footer>
    </>
  )
}
