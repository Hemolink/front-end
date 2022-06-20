import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";

import { useAuth } from "../../hooks";

export interface MenuItemProps {
  to: string;
  children: JSX.Element | JSX.Element[] | string;
  privateRoute?: boolean;
  hideMarker?: boolean;
}

export const MenuItem = ({
  to,
  children,
  privateRoute,
  hideMarker = false,
}: MenuItemProps) => {
  const { isLoggedIn } = useAuth();
  const { pathname } = useLocation();

  const isRouteActive = (path: string) => pathname === path;
  const visibility = (privateRoute && isLoggedIn) || !privateRoute;

  const classes = clsx(
    "text-base font-medium text-neutral-600 hover:text-neutral-900",
    isRouteActive(to) && !hideMarker && "border-b-2 border-primary-500"
  );

  return visibility ? (
    <Link to={to} className={classes}>
      {children}
    </Link>
  ) : (
    <></>
  );
};
