import '../styles/footer.css';
import compraSeg from '../assets/img/compraSeg.JPG';
import brandlive from '../assets/img/brandlive.JPG';
import { FaRegRegistered, FaFacebookF, FaTwitter, FaInstagram }from 'react-icons/fa';

export const Footer = () => {
  return (
    <>
        <div className="barraFooter">
            <a className="logoF" href="index.html">
                <h1 className="logoF__nombre">Pufi<FaRegRegistered size={10}/></h1>
            </a>            
             <nav className='navegacionA'>
                <a className="enlaceA" href="#pufiRain">PUFI RAIN</a>
                <a className="enlaceA" href="#pufiPuff">PUFI PUFF</a> 
                <a className="enlaceA" href="#pufiCart">PUFI CART</a> 
                <a className="cenlaceA" href="#pufiNap">PUFI NAP</a> 
            </nav>
            <nav className='navegacionB'>
                <a className="enlaceB" href="/">CONTACTO</a>
                <a className="enlaceB" href="/">AYUDA</a> 
                <a className="enlaceB" href="/">COMO COMPRAR</a> 
                <a className="cenlaceB" href="/">TERMINOS & CONDICIONES</a> 
            </nav>
            <div className='compraSegura'>
                <h4>COMPRA 100% SEGURA</h4>  
                <img src={compraSeg} alt="CodQR" />                
            </div>
            <div className='redesSociales'>
                 <h4>SIGUENOS EN <FaFacebookF size={20}/> <FaTwitter size={20}/> <FaInstagram size={20}/></h4>                  
            </div>                                                    
        </div>   
        <div className='footerFinal'>
            <h4>PUFI Copyright 2017 - Todos los derechos reservados</h4>
            <img src={brandlive} alt="Brand Live" />        
        </div>   
    </>
  )
}

