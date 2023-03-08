import '../styles/sectionMenu.css';
import umbImg from "../assets/img/umbrella-big.jpg" ;
import umbImgL from "../assets/img/umbrella-little.jpg";
import pufImg from "../assets/img/puff-big.jpg";
import pufImgL from "../assets/img/puff-little.jpg";
import cartImg from "../assets/img/cart-big.jpg";
import cartImgL from "../assets/img/cart-little.jpg";
import napImg from "../assets/img/nap-big.jpg";
import napImgL from "../assets/img/nap-little.jpg";



import { Button } from "./Button"




export const SectionMenu = () => {
  return (
    <>
        <div className="pufiAll" id='pufiRain'>
            <img className="pufiAll__image" src={umbImg} alt="Pufi Rain" />
            <Button 
                    className="btnShop1"  
                    type="submit" 
                    text="SHOP">                     
            </Button>
            <div className="pufiAll__content">
                <img className="imgLittle" src={umbImgL} alt="Umbrella" />
                <h2>Pufi RAIN</h2>
                <p className="line">_______</p>
                <p>Descripción del producto. Este es un texto simulado</p>
                <Button 
                    className="btnPufiAll"  
                    type="submit" 
                    text="> VER MÁS">                     
                </Button>
            </div>
        </div>
        <div className="pufiAll" id='pufiPuff'>            
            <div className="pufiAll__content">
                <img className="imgLittle" src={pufImgL} alt="Pufi Puff" />                
                <h2>Pufi PUFF</h2>
                <p className="line">_______</p>
                <p>Descripción del producto. Este es un texto simulado</p>
                <Button 
                    className="btnPufiAll"  
                    type="submit" 
                    text="> VER MÁS">                     
                </Button>
            </div>
            <img className="pufiAll__image" src={pufImg} alt="Pufi Puff" />
        </div>
        <div className="pufiAll" id='pufiCart'>    
            <img className="pufiAll__image" src={cartImg} alt="Pufi Cart" />        
            <div className="pufiAll__content">
                <img className="imgLittle" src={cartImgL} alt="Puffi Cart" />
                <h2>Pufi CART</h2>
                <p className="line">_______</p>
                <p>Descripción del producto. Este es un texto simulado</p>
                <Button 
                    className="btnPufiAll"  
                    type="submit" 
                    text="> VER MÁS">                     
                </Button>
            </div>            
        </div>
        <div className="pufiAll" id='pufiNap'>            
            <div className="pufiAll__content">
                <img className="imgLittle" src={napImgL} alt="Pufi Nap" />
                <h2>Pufi NAP</h2>
                <p className="line">_______</p>
                <p>Descripción del producto. Este es un texto simulado</p>
                <Button 
                    className="btnPufiAll"  
                    type="submit" 
                    text="> MÁS INFO">                     
                </Button>
            </div>
            <img className="pufiAll__image" src={napImg} alt="Pufi Puff" />
        </div>      
    </>
  )
}

