import { useRef, useEffect, useState } from 'react'
import Box from "./Box";

type BoxListProps = {
  boxes: {
      id: number,
      title: string,
      image: string,
      info?: string,
      url?: string
  }[]
}

export const BoxList = (props: BoxListProps) => {

    const ref = useRef<HTMLDivElement>(null);
    const [scrolled, setVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver (
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        },
        {
          root: null,
          rootMargin: "-100px",
          threshold: 0.4
        }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }
    }, [ref]);
    

    return (
        <div className="boxes dark" ref={ref}>
          {scrolled && ( 
            <>
              {props.boxes.map(({ id, ...otherItemProps}) => (
                <Box key={id} {...otherItemProps}/>
              ))}  
            </> 
          )}
        </div>
    )

}
