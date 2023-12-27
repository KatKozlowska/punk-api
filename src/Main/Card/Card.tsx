import "./Card.scss"
import {Beer} from "../../mock-data/types";

type CardProps = {
   beer:Beer;
}

const Card = ({beer}:CardProps) => {

    return(
        <>
        <div className="card">
            <div className="card__img">
                <img className="card__img--img" src={beer.image_url}/>
            </div>
            <div className="card__info">
                <p className="card__info--heading">{beer.name}</p>
                <p className="card__info--tagline">{beer.tagline}</p>
                <p className="card__info--info">{beer.abv}</p>
                <p>Est.{beer.first_brewed}</p>
            </div>
        </div>
        </>
    )
}

export default Card;