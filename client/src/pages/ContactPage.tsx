import { Info, Header, Footer } from '../components/index';
import {FlyboardMain} from '../assets/images/index';

function ContactPage() {

  const info = `Contact`;
  
  return (
    <>
     <Header title="Contact" descr="" backgroundImg={FlyboardMain} backgroundVid=""/>
      <div className="main_content">
        <Info text={info} />
        <Footer />
      </div>
    </>
  );
}

export default ContactPage;
