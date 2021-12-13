import { ReviewImages } from '../../assets/images/index.js';

const Reviews = () => {

    return (
        <div className="reviews_section">
            <h2>What our customers are saying...</h2>
              {ReviewImages.map((url: string) => (
                <div className="review" key={url} style={{  
                    backgroundImage: "url(" + url + ")"
                  }}/>
              ))} 
        </div>
    )
}

export default Reviews;
