
type InfoProps = {
    text: string;
}

const Info = (props: InfoProps) => {
    return (
        <div className="info_section">
            <p>{props.text}</p>
        </div>
    )
}

export default Info;