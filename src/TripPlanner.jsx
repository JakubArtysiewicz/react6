import { use, useState } from "react";

function TripPlanner() {
    const [wycieczka,setWycieczka] = useState({
        celPodrozy: "",
        liczbaDni: 1,
        liczbaUczestnikow: 1,
        rodzajWycieczkiCena: 300,
        ubezpieczenie: false,
    })

    const przecena = wycieczka.liczbaUczestnikow >= 5

    const cenaKoncowa = wycieczka.liczbaDni*wycieczka.rodzajWycieczkiCena*wycieczka.liczbaUczestnikow * (przecena? 0.9:1) + (wycieczka.ubezpieczenie ? wycieczka.liczbaUczestnikow*wycieczka.liczbaDni*50:0)
    
  return (
    <div>
        <h2>Zaplanuj Wycieczke</h2>
        <label htmlFor="cel">Cel podróży</label>
        <input id="cel" onChange={(e) => setWycieczka({...wycieczka, celPodrozy: e.target.value})} ></input>
        <div>
            <button onClick={()=> setWycieczka({...wycieczka, rodzajWycieczkiCena:300})}>Miejska</button>
            <button onClick={()=> setWycieczka({...wycieczka, rodzajWycieczkiCena:450})} >Górska</button>
            <button onClick={()=> setWycieczka({...wycieczka, rodzajWycieczkiCena:600})} >Nadmorska</button>
        </div>
        <div>
            <label htmlFor="liczbaUczestnikow">Liczba uczestników</label>
            <input id="liczbaUczestnikow" type="number" min={1} defaultValue={1} max={8} onChange={(e)=>setWycieczka({...wycieczka, liczbaUczestnikow: e.target.value})}></input>
            <label htmlFor="liczbaDni">Liczba dni pobytu</label>
            <input id="liczbaDni" type="number" min={1} defaultValue={1} max={14} onChange={(e) => setWycieczka({...wycieczka, liczbaDni: e.target.value})}></input>
        </div>

        <input id="ubezpieczenie" type="checkbox" onChange={(e)=> setWycieczka({...wycieczka, ubezpieczenie:e.target.checked})}></input>

        <label htmlFor="ubezpieczenie">Dodaj ubezpieczenie (+50zł/os./dzień)</label>
        { przecena && 
            <p>Rabat grupowy -10%</p>
        }
        <p>Cena {cenaKoncowa} zł</p>
        <button disabled = {wycieczka.celPodrozy === ""}>Zarezerwuj</button>
    </div>
  );
}

export default TripPlanner;