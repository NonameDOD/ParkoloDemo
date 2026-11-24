import type { ParkoloTipus } from "../adat"
import { useParkoloContext } from "../contexts/ParkoloContext"

interface ParkoloProps{
    parkolo: ParkoloTipus
}

function Parkolo({ parkolo }: ParkoloProps) {
  const { setAllapot } = useParkoloContext();
  return (
    <div className="parkoloKartya">
      <h1 className="text-dpd-black">{parkolo.hely}</h1>
      <p className="text-dpd-black">{parkolo.allapot}</p>
      <button
        className="foglalas bg-dpd-red text-primary px-6 py-3 rounded-lg"
        disabled={parkolo.allapot === "Foglalt"}
        onClick={() => setAllapot(parkolo.id, "Foglalt")}
      >
        {parkolo.allapot === "Foglalt" ? "Foglalt" : "Lefoglalás"}
      </button>
    </div>
  )
}

export default Parkolo