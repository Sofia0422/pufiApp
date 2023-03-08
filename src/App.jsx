
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { SectionEspufi } from './components/SectionEspufi';
import { SectionMenu } from './components/SectionMenu';
import { SectionNewsletter } from './components/SectionNewsletter';

function App() {
  return (
    <>
      <Header/>  
      <SectionMenu/> 
      <SectionEspufi/> 
      <SectionNewsletter/> 
      <Footer/>      
    </>
  );
}

export default App;
