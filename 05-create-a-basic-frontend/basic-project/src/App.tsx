import { useState } from 'react';
import Card from './Card';
import image from './assets/image1.png';
import { ReactComponent as CloseSvg } from './assets/x-circle-custom.svg';

function App() {
  const [firstCardSelected, setFirstCardSelected] = useState(true);

  return (
    <div className='min-h-screen flex flex-col items-center bg-slate-50 p-10 text-yellow-950 font-serif'>
      <div className='grid justify-center items-center grid-cols-[1fr_repeat(3,_auto)_1fr] gap-1 w-full'>
        <h1 className='text-3xl font-semibold ml-auto col-start-2'>
          Adventskalender zusammenstellen
        </h1>
        <CloseSvg className='h-8 w-8 rounded-full col-start-5 ml-auto cursor-pointer' />
      </div>
      <h3 className='font-thin text-base m-4 mb-5'>1/3 Option wählen</h3>
      <img src={image} className='h-auto w-full' />
      <div className='flex flex-col md:flex-row mt-5 mb-5 gap-5'>
        <Card
          title={'Winterbiere'}
          subtitle={'Das Sortiment für Bierliebhaber'}
          description={`Diese Variante ist perfekt für Bierliebhaber, die auch gerne mal verschiedene Bierstile ausprobieren. Das
Sortiment besteht aus 12 verschiedenen Bierstilen aus 9
Ländern von 14 Marken. Die Auswahl erstreckt sich von Pilsner, Pale Ales, IPAs über Weizenbiere bis hin zum Ambrée, Stout und Sour Beer. Die besten und spannendsten Biere aus unserem Portfolio.`}
          selected={firstCardSelected}
          clickHandler={() => {
            setFirstCardSelected(true);
          }}
        />
        <Card
          title={'Leichte & fruchtige Biere'}
          subtitle={'Das Sortiment für eine Abwechslung zu Standardbieren.'}
          description={`Entdecker-Sortiment für alle, die etwas mehr Auswahl zu den Standardbieren suchen. Es besteht aus 10 verschiedenen Bierstilen aus 7 Ländern und 15 Marken.
        Von diversen Lagerbieren über Weizenbier bis hin zu Cider und aromatisiertem Bier findet sich hier alles was erfrischt.`}
          selected={!firstCardSelected}
          clickHandler={() => {
            setFirstCardSelected(false);
          }}
        />
      </div>
      <button className='cursor-pointer bg-yellow-950 mt-10 text-white self-end px-20 py-5'>
        Weiter
      </button>
    </div>
  );
}

export default App;
