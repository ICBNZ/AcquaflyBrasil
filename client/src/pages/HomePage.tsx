import {FlyboardMain, FlyboardVid} from '../assets/images/index';
import { Info, Header, Footer, Locations, Services, Reviews } from '../components/index';

function HomePage() {

  const info =
    `ACQUAFLY BRASIL is a Fortaleza based company dedicated to watersports, operating in Fortaleza and it's surroundings for over 5 years.\
    Jetski, flyboard, single or tandem, tours or solo hire\
    Come and enjoy the thrill of extreme water sports and fly over the water with Acquafly with our highly experienced instructors`;
  
  return (
    <>
      <Header title="Seek Adventure" descr="Experience the thrill of flying" backgroundImg={FlyboardMain} backgroundVid={FlyboardVid}/>
      <div className="main_content">
        <Services/>
        <Info text={info} />
        <Locations/>
        <Reviews/>
        <Footer/>
      </div>
    </>
  );
}

export default HomePage;
