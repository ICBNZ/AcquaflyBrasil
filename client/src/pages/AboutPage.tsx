import { Info, Header, Footer } from '../components/index';
import {FlyboardDive} from '../assets/images/index';

function AboutPage() {

  const info = `About`;
  
  return (
    <>
      <Header title="About" descr="" backgroundImg={FlyboardDive} backgroundVid=""/>
      <div className="main_content">
        <Info text={info} />
        <Footer />
      </div>
    </>
  );
}

export default AboutPage;
