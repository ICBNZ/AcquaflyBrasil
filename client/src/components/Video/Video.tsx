import React from 'react'

type VideoProps = {
    src: string
}

export const Video = (props: VideoProps) => {
    return (
        <video src={props.src} autoPlay loop muted/>
    )
}
