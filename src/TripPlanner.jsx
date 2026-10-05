import { use, useState } from "react";

function TripPlanner() {
    const [liczbaDni,setLiczbaDni] = useState(1)
    const [liczbaUczestnikow,setLiczbaUczestnikow] = useState(1)
    const [RodzajWycieczkiCena, setRodzajWycieczkiCena] = useState(300)

    const przecena = liczbaUczestnikow >= 5

    const cenaKoncowa = liczbaDni*RodzajWycieczkiCena*liczbaUczestnikow * (przecena? 0.9:1)
    
  return (
    <div>
        <h2>Zaplanuj Wycieczke</h2>
        <label htmlFor="cel">Cel podróży</label>
        <input id="cel"></input>
        <div>
            <button onClick={()=> setRodzajWycieczkiCena(300)}>Miejska</button>
            <button onClick={()=> setRodzajWycieczkiCena(450)} >Górska</button>
            <button onClick={()=> setRodzajWycieczkiCena(600)} >Nadmorska</button>
        </div>
        <div>
            <label htmlFor="liczbaUczestnikow">Liczba uczestników</label>
            <input id="liczbaUczestnikow" type="number" min={1} defaultValue={1} max={8} onChange={(e)=>setLiczbaUczestnikow(e.target.value)}></input>
            <label htmlFor="liczbaDni">Liczba dni pobytu</label>
            <input id="liczbaDni" type="number" min={1} defaultValue={1} max={14}></input>
        </div>
        <input id="ubezpieczenie" type="checkbox"></input>
        <label htmlFor="ubezpieczenie">Dodaj ubezpieczenie (+50zł/os./dzień)</label>
        { przecena && 
            <p>Rabat grupowy -10%</p>
        }
        <p>Cena {cenaKoncowa} zł</p>
    </div>
  );
}

export default TripPlanner;