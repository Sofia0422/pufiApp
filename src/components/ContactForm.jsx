import '../styles/sectionNewsletter.css';
import { FaArrowRight }from 'react-icons/fa';
import { useState} from 'react';

export const ContactForm = () => {

    /* const [nombre, setNombre] = useState(''); */
    const [email, setEmail] = useState('');

    const handleSubmit= (e) => {
        e.preventDefault();

       /*  if (nombre === '') {
            alert('Por favor, ingrese su nombre');
            return;
        } */

        if (email === '') {
            alert('Por favor, ingrese su correo electrónico');
            return;
        }
 
 

    const formData = {
        /* name: nombre, */
           email: email
    };

    const urlFormspree = "https://formspree.io/f/mvonrepj";
    fetch(urlFormspree, {
        method: 'POST',
        headers: {
            'Accept': 'application/json'
        },

        body:JSON.stringify(formData)

    }) 
    .then(resp => {        
        alert ('Gracias pos su mensaje. Nos pondremos en contacto con usted pronto.');
        
    })
    .cath(error => {
        alert('Ha ocurrido un error al enviar su mensaje. Por favor, inténtelo de nuevo más tarde.');
    });


    }

    return (
            <div>                
                <form onSubmit={handleSubmit}>                        
                    <div className='suscripcion'>                         
                        <input className='campoEmail' type="email" name='email' placeholder='Ingresa tu email' value={email} onChange={e => setEmail(e.target.value)} required />
                        <button className='enviarForm' type="submit"><FaArrowRight/></button> 
                    </div>                        
                </form>           
            </div>
    );
};
 