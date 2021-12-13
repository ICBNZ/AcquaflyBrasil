import { BoxList } from "../Boxes/BoxList";
import ServicesData from "./services.data";

const Services = () => {
    return (
        <BoxList boxes={ServicesData}/>
    )
}

export default Services;