import { Link } from "react-router-dom";

type logoType = {
    image: string
}
const Logo = (props: logoType) => {
    return (
        <Link to="/" className="logo"><img src={props.image} alt="logo" /></Link>
    )
}
export default Logo;
