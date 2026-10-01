import { use, useState } from "react";

function TripPlanner() {
    const [liczbaDni,setLiczbaDni] = useState(1);
    const [liczbaUczestnikow,setLiczbaUczestnikow] = useState(1);

  return (
    <div>
        <h2>Zaplanuj Wycieczke</h2>
        <label htmlFor="cel">Cel podróży</label>
        <input id="cel"></input>
        <div>
            <button>Miejska</button>
            <button>Górska</button>
            <button>Nadmorska</button>
        </div>
        <div>
            <label htmlFor="liczbaUczestnikow">Liczba uczestników</label>
            <input id="liczbaUczestnikow" type="number" min={1} defaultValue={1} max={8}></input>
            <label htmlFor="liczbaDni">Liczba dni pobytu</label>
            <input id="liczbaDni" type="number" min={1} defaultValue={1} max={14}></input>
        </div>
        <input id="ubezpieczenie" type="checkbox"></input>
        <label htmlFor="ubezpieczenie">Dodaj ubezpieczenie (+50zł/os./dzień)</label>
        {liczbaUczestnikow >= 5 && 
            <p>Rabat grupowy -10%</p>
        }
    </div>
  );
}

export default TripPlanner;