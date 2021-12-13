import { BoxList } from '../Boxes/BoxList'
import LocationData from './location.data';

const Locations = () => {
    return (     
        <BoxList boxes={LocationData}/>
    )
}

export default Locations;
