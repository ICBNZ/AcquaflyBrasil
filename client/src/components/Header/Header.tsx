import Navigation from "../Navigation/navigation.component";
import { Video } from "../Video/Video"

type HeaderProps = {
    title: string
    descr: string
    backgroundImg: string
    backgroundVid: string
}

const Header = (props: HeaderProps) => {
   
    return (
        <>
            <Navigation/>
            <Video src={props.backgroundVid} />
            <img id="bg_image" src={props.backgroundImg} alt={props.title}/>
            <div className="header">
                <h1>{props.title}</h1>
                <h4>{props.descr}</h4>
            </div>
        </>
    )
}
export default Header;
