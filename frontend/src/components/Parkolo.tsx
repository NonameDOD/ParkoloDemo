import type { ParkoloTipus } from "../adat"
import { useParkoloContext } from "../contexts/ParkoloContext"

interface ParkoloProps{
    parkolo: ParkoloTipus
}

function Parkolo({ parkolo }: ParkoloProps) {
  const { setAllapot } = useParkoloContext();
  return (
    <div className="parkoloKartya">
      <h1>{parkolo.hely}</h1>
      <p>{parkolo.allapot}</p>
      <button
        className="foglalas"
        disabled={parkolo.allapot === "Foglalt"}
        onClick={() => setAllapot(parkolo.id, "Foglalt")}
      >
        {parkolo.allapot === "Foglalt" ? "Foglalt" : "Lefoglalás"}
      </button>
    </div>
  )
}

export default Parkolo