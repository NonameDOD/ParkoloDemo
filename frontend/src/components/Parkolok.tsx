import Parkolo from "./Parkolo"
import { useParkoloContext } from "../contexts/ParkoloContext"


function Parkolok() {
  const {parkoloLista} = useParkoloContext();

  return (
    <div className="parkolo bg-surface flex flex-row flex-wrap justify-center gap-4 p-4">
        {parkoloLista.map((parkolo) => {
          return(<Parkolo key={parkolo.id} parkolo={parkolo}/>);
        })}
    </div>
  )
}

export default Parkolok