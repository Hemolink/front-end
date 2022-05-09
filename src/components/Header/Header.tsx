import { Popover } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/outline";
import React from "react";
import { Link } from "react-router-dom";
import { route } from "../../pages";

export const Header = () => {
  return (
    <Popover className="relative bg-background">
      <div className="max-w-7x1 mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-neutral-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link
              to={route.home}
              className="text-base font-medium text-neutral-600 hover:text-neutral-900"
            >
              <span className="sr-only">HemoLink</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="HemoLink"
              />
            </Link>
            <a href="#"></a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-light rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <Link
              to={route.home}
              className="text-base font-medium text-neutral-600 hover:text-neutral-900"
            >
              Home
            </Link>
            <Link
              to={route.appointment}
              className="text-base font-medium text-neutral-600 hover:text-neutral-900"
            >
              Agendamento
            </Link>
            <Link
              to={route.donate}
              className="text-base font-medium text-neutral-600 hover:text-neutral-900"
            >
              Porque Doar
            </Link>
            <Link
              to={route.about}
              className="text-base font-medium text-neutral-600 hover:text-neutral-900"
            >
              Sobre
            </Link>
          </Popover.Group>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="#"
              className="whitespace-nowrap text-base font-medium text-neutral-600 hover:text-neutral-900"
            >
              Sign in
            </a>
            <a
              href="#"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-light bg-primary-600 hover:bg-primary-700"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </Popover>
  );
};
