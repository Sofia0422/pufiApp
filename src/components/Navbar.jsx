import { FaChair, FaUmbrella, FaShoppingBag, FaBed }from 'react-icons/fa';

export const Navbar = () => {
  return (
    <>
        <nav className="navegacion">
            <a href="#pufiPuff" class="navegacion__enlace"><FaChair/>Pufi Puff</a>
            <a href="#pufiRain" class="navegacion__enlace"><FaUmbrella/>Pufi Rain</a>
            <a href="#pufiCart" class="navegacion__enlace"><FaShoppingBag/>Pufi Cart</a>
            <a href="#pufiNap" class="navegacion__enlace"><FaBed/>Pufi Nap</a>
        </nav>
      
    </>
  )
}


