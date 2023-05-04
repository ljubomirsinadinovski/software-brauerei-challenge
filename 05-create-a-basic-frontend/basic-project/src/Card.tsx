import React from 'react';
import { ReactComponent as CheckSvg } from './assets/check-circle-fill-white.svg';

interface Props {
  title: string;
  subtitle: string;
  description: string;
  selected: boolean;
  clickHandler: () => void;
}

const Card: React.FC<Props> = ({
  title,
  subtitle,
  description,
  selected,
  clickHandler,
}) => {
  return (
    <div
      className={`${
        selected ? 'bg-yellow-950 text-white' : 'bg-white text-black'
      } border border-black text-center flex-1 justify-center items-center h-96 px-5 py-10 overflow-auto cursor-pointer`}
      onClick={clickHandler}
    >
      <div className='grid justify-center items-center grid-cols-[1fr_repeat(3,_auto)_1fr] gap-1 mb-5'>
        <h2 className=' text-xl col-start-3'>{title}</h2>
        {selected && (
          <CheckSvg className='h-6 w-6 rounded-full col-start-5 ml-auto' />
        )}
      </div>
      <p className='mb-5'>{subtitle}</p>
      <p className='leading-relaxed'>{description}</p>
    </div>
  );
};

export default Card;
