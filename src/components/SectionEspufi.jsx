import '../styles/sectionEspufi.css';
import umbrella from "../assets/img/umbrella.jpg";
import cart from "../assets/img/cart.jpg";
import puff1 from "../assets/img/puff1.jpg";
import puff2 from "../assets/img/puff2.jpg";
import nap from "../assets/img/nap.jpg";
import puff3 from "../assets/img/puff3.jpg";

export const SectionEspufi = () => {
  return (
    <>
        <div className="contenedorEspufi">
            <h3>INSTAGRAM</h3>
            <h2>#ESPUFI</h2>
            <div className='contentImg'>
                <article className='imgColumna'>
                   <img src={umbrella} alt="Umbrella" /> 
                </article>
                <article className='imgColumna'>
                   <img src={cart} alt="Carts" /> 
                </article>
                <article className='imgColumna'>
                    <img src={puff1} alt="Puff 1" /> 
                </article>
                <article className='imgColumna'>
                    <img src={puff2} alt="Puff 2" />
                </article>
                <article className='imgColumna'>
                    <img src={nap} alt="Nap" />
                </article>
                <article className='imgColumna'>
                    <img src={puff3} alt="Puff 3" /> 
                </article>                                     
            </div>  
        </div>  
      
    </>
  )
}


