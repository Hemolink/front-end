import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Popover } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/outline";

import { route } from "../../pages";
import { useAuth } from "../../hooks";
import UserThumbSource from "../../assets/user-thumb.jpg";
import { MenuItem } from "./MenuItem";

export const Header = () => {
  const { isLoggedIn, user, logout } = useAuth();

  return (
    <Popover className="relative bg-background">
      <div className="max-w-7x1 mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-neutral-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <MenuItem to={route.home} hideMarker>
              <span className="sr-only">HemoLink</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="HemoLink"
              />
            </MenuItem>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-light rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <MenuItem to={route.home}>Home</MenuItem>
            <MenuItem to={route.appointment} privateRoute>
              Agendamento
            </MenuItem>
            <MenuItem to={route.donate}>Porque Doar</MenuItem>
            <MenuItem to={route.about}>Sobre</MenuItem>
          </Popover.Group>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            {!isLoggedIn && (
              <>
                <Link
                  to={route.login}
                  className="whitespace-nowrap text-base font-medium text-neutral-600 hover:text-neutral-900"
                >
                  Entrar
                </Link>
                <Link
                  to={route.register}
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-light bg-primary-600 hover:bg-primary-700"
                >
                  Registrar
                </Link>
              </>
            )}
            {isLoggedIn && (
              <Popover className="relative">
                <Popover.Button className="flex gap-4 items-center hover:opacity-90 cursor-pointer">
                  <div className="flex rounded-full overflow-hidden h-12 w-12 ">
                    <img
                      src={UserThumbSource}
                      alt={user?.name}
                      title={user?.name}
                    />
                  </div>
                  <div>
                    <span className="text-base font-medium text-neutral-600 ">
                      {user?.name}
                    </span>
                  </div>
                </Popover.Button>
                <Popover.Panel className="absolute z-10 bg-light border border-neutral-200 shadow-md rounded-md py-2 mt-2 flex flex-col w-full">
                  <p
                    onClick={logout}
                    className="hover:bg-neutral-50 text-center py-2 cursor-pointer"
                  >
                    Sair
                  </p>
                </Popover.Panel>
              </Popover>
            )}
          </div>
        </div>
      </div>
    </Popover>
  );
};
