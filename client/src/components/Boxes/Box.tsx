import { Link } from "react-router-dom";

type BoxProps = {
    title: string,
    image: string,
    info?: string,
    url?: string
}

const Box = (props: BoxProps) => {
    const boxStyle = {
        background: "linear-gradient(rgba(26, 57, 88, 0.2), rgba(26, 57, 88, 0.2)), url("+props.image+") no-repeat top center / cover",
    }
    return (
        <>
        {props.url ? (
      
            <div className="box" style={boxStyle}>
                <Link to={props.url}>  <h2>{props.title}</h2>
                {props.info && 
                <h4>{props.info}</h4>}
                 </Link> 
            </div>
       ) : (
            <div className="box" style={boxStyle}>
                <h2>{props.title}</h2>
                {props.info && 
                <h4>{props.info}</h4>}
            </div>
        )}
      
        </>
    )
}


export default Box;