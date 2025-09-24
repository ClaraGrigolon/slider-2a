import { useState } from 'react'
import './App.css'
import addie from './assets/addielarue.jpg'
import spetacular from './assets/spetacular.jpg'
import aliadadovilao from './assets/aliadadovilao.jpg'
import LogoAmazon from './assets/amazon_icon.svg'
import LogoInsta from './assets/instagram-icon.svg'
import LogoSnap from './assets/snapchat-icon.svg'
import LogoTiktok from './assets/tiktok-icon.svg'
import Slider1 from './assets/s1.jpg'
import Slider2 from './assets/s2.jpg'
import Slider3 from './assets/s3.jpg'
import Slider4 from './assets/s4.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import 'swiper/css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <main>
      <header>
        {/* Aqui fica o slider */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={1} 
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="mySwiper"
      >
        <SwiperSlide>
          <img src={Slider1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slider2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slider3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={Slider4} alt="" />
        </SwiperSlide>
        </Swiper>
      </header>
      <section className="produtos">
        
        {/* Card 1 */}
        <a href="#" className="link-card">
          <div className="card">
            <img src={addie} alt="" className="img-card"/>
            <h2>A vida invisível de Addie Larue (Edição capa dura)</h2>
            <p className="desc">A inesquecível história de A vida invisível de Addie Larue em uma edição especial, com ilustrações belíssimas e projeto gráfico inédito.</p>
            <p className="classificacao"> <span>★ ★ ★ ★ ☆</span> (982)</p>
            <p className="preco">R$ 69,99</p>
            <p className="off">- 5%</p>
          </div>
        </a>

        {/* Card 2 */}
        <a href="#" className="link-card">
          <div className="card">
            <img src={spetacular} alt="" className="img-card"/>
            <h2>Espetacular: Uma novela da trilogia Caraval</h2>
            <p className="desc">Sejam bem-vindos de volta ao mundo de CARAVAL onde tudo é diferente daquilo que parece ser.</p>
            <p className="classificacao"> <span>★ ★ ★ ★ ☆</span> (685)</p>
            <p className="preco">R$ 74,99</p>
            <p className="off">- 2%</p>
          </div>
        </a>

        {/* Card 3 */}
        <a href="#" className="link-card">
          <div className="card">
            <img src={aliadadovilao} alt="" className="img-card"/>
            <h2>Aliada do Vilão + Brindes</h2>
            <p className="desc">O terceiro volume da série Assistente do Vilão, a fantasia divertida fenômeno do TikTok!</p>
            <p className="classificacao"> <span>★ ★ ★ ★ ★</span> (1264)</p>
            <p className="preco">R$ 59,99</p>
            <p className="off">- 9%</p>
          </div>
        </a>
      </section>
      
      <section className="destaque">

       <iframe src="https://www.youtube.com/embed/X_MQZo6gyLE?autoplay=1&mute=1&controls=0&loop=1&playlist=X_MQZo6gyLE&modestbranding=1&showinfo=0" frameborder="0" allow="autoplay; fullscreen"></iframe>

      </section>
      <footer>

        <img src={LogoAmazon} alt="" className="logo-footer" />

        <div className="social-footer">
          <div className="icon-social">
            <a href="https://www.instagram.com/amazonbrasil/" target="_blank">
             <img src={LogoInsta} alt="" className="instagram" />
            </a>
          </div> 
          <div className="icon-social">
            <a href="https://www.snapchat.com/@amazon" target="_blank">
              <img src={LogoSnap} alt="" className="facebook"/>
            </a>
          </div>
          <div className="icon-social">
            <a href="https://www.tiktok.com/@amazon" target="_blank">
             <img src={LogoTiktok} alt="" className="tiktok"/>
            </a>
          </div>
        </div>

        <p className="txt-footer">
        Amazon Serviços de Varejo do Brasil Ltda. | CNPJ 15.436.940/0001-03
Av. Juscelino Kubitschek, 2041, Torre E, 18° andar - São Paulo CEP: 04543-011| Fale conosco| ajuda-amazon@amazon.com.br
Formas de pagamento aceitas: cartões de crédito (Visa, MasterCard, Elo e American Express), cartões de débito (Visa e Elo), Boleto e Pix.
        </p>

      </footer>
     </main>
    </>
  )
}

export default App