import '../styles/header.css';
import { FaRegRegistered }from 'react-icons/fa';
import { Button } from "./Button"
import { Navbar } from "./Navbar"
import { Dropdown } from './Dropdown';


export const Header = () => {
  return (
    <>
        <div className="header">
            <div className="contenedor">
                <div className="barra">
                    <a className="logo" href="index.html">
                        <h1 className="logo__nombre">Pufi<FaRegRegistered size={10}/></h1>
                    </a>
                    <Navbar/>   
                    <Dropdown />                    
                    <a className="compra" href="/">Mi Compra</a>                
                </div>
            </div>
            <div className="header_texto">
                <h1>Estár cómodo, nunca fue tan fácil.</h1>  
                <Button 
                    className="btnShop"  
                    type="submit" 
                    text="SHOP">                    
                </Button> 
            </div>  
        </div>      
    </>
  )
}


