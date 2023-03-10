import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { IoMenu } from "react-icons/io5/index.js";
import DropdownMenuItem from "./DropdownMenuItem";

export default function DropdownMenu() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          className="inline-flex justify-center rounded-md
                 border border-bgdark dark:border-zinc-700 px-2 py-2 text-sm 
                 font-medium shadow-sm hover:bg-bgdark hover:text-white dark:hover:bg-white dark:hover:text-zinc-600 
                 focus:outline-none focus:ring-2 focus:ring-indigo-500 
                 focus:ring-offset-2 focus:ring-offset-gray-100 transition-all"
          aria-label="menu"
        >
          <IoMenu className="h-5 w-5" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="trasform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className="absolute right-0 z-10 mt-2 w-56 
          origin-top-right rounded-md border dark:border-bgprimary
          border-zinc-700 bg-zinc-600 text-white  shadow-xl 
          ring-1 ring-black ring-opacity-5 focus:outline-none 
          divide-zinc-400 dark:divide-zinc-700"
        >
          <div className="py-1">
            <div className="px-3 py-2 uppercase font-bold italic text-xs">
              Facultades
            </div>
            <DropdownMenuItem href="/facultad/bromatologia-nutricion">
              Bromatologia y Nutricion
            </DropdownMenuItem>
            <DropdownMenuItem href="/facultad/ciencias">
              Ciencias
            </DropdownMenuItem>
            <DropdownMenuItem href="/facultad/ciencias-economicas">
              Ciencias Economicas, Contabilidad y Financieras
            </DropdownMenuItem>
            <DropdownMenuItem href="/facultad/ciencias-empresariales">
              Ciencias Empresariales
            </DropdownMenuItem>
            <DropdownMenuItem href="/facultad/ciencias-sociales">
              Ciencias Sociales
            </DropdownMenuItem>
            <DropdownMenuItem href="/facultad/ciencias-politicas">
              Derecho y Ciencias Politicas
            </DropdownMenuItem>
            <DropdownMenuItem href="/facultad/educacion">
              Educaci??n
            </DropdownMenuItem>
            <DropdownMenuItem href="/facultad/agraria-alimentaria-ambiental">
              Ingenieria Agraria, Industria alimentaria y Ambiental
            </DropdownMenuItem>
            <DropdownMenuItem href="/facultad/civil">
              Ingenieria Civil
            </DropdownMenuItem>
            <DropdownMenuItem href="/facultad/industrial-sistemas-informatica">
              Ingenieria Industrial, Sistemas e Inform??tica
            </DropdownMenuItem>
            <DropdownMenuItem href="/facultad/pesquera">
              Ingenieria Pesquera
            </DropdownMenuItem>
            <DropdownMenuItem href="/facultad/quimica-metalurgica">
              Ingenieria Quimica y Metalurgica
            </DropdownMenuItem>
            <DropdownMenuItem href="/facultad/medicina-humana">
              Medicina Humana
            </DropdownMenuItem>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
