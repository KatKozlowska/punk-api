import Card from "../Card";
import {Beer} from "../../../mock-data/types"
import "./CardContainer.scss"


type ContainerProps = {
   beer: Beer[];
}

const Container = ({beer}:ContainerProps) => {

    return(
        <div className="card-container">
        {beer.map(bottle => <Card beer={bottle} key={bottle.id} />)}
        </div>
    )
}

export default Container;