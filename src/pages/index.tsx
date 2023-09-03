import { PuzleLogo } from '@/components/PuzleLogo';
import { Barricade, Envelope } from '@phosphor-icons/react';
import React from 'react';

const UnderConstruction = () => {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen py-8 bg-[#051A37] text-[#FFB9B8] relative">
      <div className="flex flex-col items-center">
        <div className="flex align-center justify-center">
          <Barricade size={26} className="mr-2" />
          <h3 className="text-base font-kollektif mb-8">Página en construcción</h3>
          <Barricade size={26} className="ml-2" />
        </div>
        <div className="max-w-lg text-center">
          <div className="transform transition duration-500 hover:scale-105 flex justify-center mb-2">
            <PuzleLogo />
          </div>
          <h1 className="text-5xl mb-4 font-gagalin">Consultora de Recursos Humanos</h1>
          <h2 className="font-kollektif mb-8 text-lg italic">"Donde cada pieza encaja"</h2>
          <div className="flex align-center justify-center transform transition duration-500 hover:scale-105">
            <Envelope size={30} className="mr-1" />
            <a href="mailto:contacto@puzleconsultora.com" className="font-kollektif mb-8 text-lg">
              contacto@puzleconsultora.com
            </a>
          </div>
        </div>
      </div>
      <div className="mb-4 text-sm font-montserrat">© {new Date().getFullYear()} Puzle Consultora. Todos los derechos reservados.</div>
    </div>
  );
};

export default UnderConstruction;
