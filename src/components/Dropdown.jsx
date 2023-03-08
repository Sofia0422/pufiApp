import '../styles/dropdown.css';
import { useState } from 'react';
import { FaAngleDown }from 'react-icons/fa';

export const Dropdown = () => {

    const options = ['Mi cuenta', 'Opción 1', 'Opción 2']

    const [dropdown, setDropdown] = useState({
        open: false,
        optionSelected: options[0]
    })


  return (
    <>
        <div className='container'>
            <div className='dropdown'>                
                <div onClick={()=> setDropdown({...dropdown, open: !dropdown.open})}
                className={dropdown.open ? 'first-option-open' : 'first-option-close'}>
                    
                    <span>{dropdown.optionSelected}</span>                    
                    <FaAngleDown/>
                </div>
                {dropdown.open && (
                <div className='options'>
                    {options.map((order) => {
                        return (
                        <div 
                        onClick={()=> 
                            setDropdown({optionSelected: order, open: false})
                        }
                        className={
                            dropdown.optionSelected ? 'orderSelected' : 'order'
                        }
                        >
                            {order}
                        </div>
                        );
                    })}
                    </div>
                )}
            </div>
        </div>
      
    </>
  )
}

