import type { ParkoloTipus } from "../adat"
import { useParkoloContext } from "../contexts/ParkoloContext"

interface ParkoloProps{
    parkolo: ParkoloTipus
}

function Parkolo({ parkolo }: ParkoloProps) {
  const { setAllapot } = useParkoloContext();
  return (
    <div className="parkoloKartya shadow-lg border border-border flex flex-col items-center gap-3 p-4 m-2 rounded-xl w-full sm:w-64">
      <h1 className="text-dpd-primary">{parkolo.hely}</h1>
      <p className="text-dpd-primary">{parkolo.allapot}</p>
      <button
        className="foglalas bg-dpd-red text-white px-6 py-3 rounded-lg"
        disabled={parkolo.allapot === "Foglalt"}
        onClick={() => setAllapot(parkolo.id, "Foglalt")}
      >
        {parkolo.allapot === "Foglalt" ? "Foglalt" : "Lefoglalás"}
      </button>
    </div>
  )
}

export default Parkolo