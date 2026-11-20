import Parkolo from "./Parkolo"
import { useParkoloContext } from "../contexts/ParkoloContext"


function Parkolok() {
  const {parkoloLista} = useParkoloContext();

  return (
    <div className="parkolo">
        {parkoloLista.map((parkolo) => {
          return(<Parkolo key={parkolo.id} parkolo={parkolo}/>);
        })}
    </div>
  )
}

export default Parkolok