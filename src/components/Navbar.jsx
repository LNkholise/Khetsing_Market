import * as React from "react";
import { Button, IconButton, Typography, Collapse, Navbar } from "@material-tailwind/react";
import { Archive, Menu, Bell, ProfileCircle, Xmark } from "iconoir-react";
import SignInModal from "./modals/SignIn";
import SellModal from "./modals/Sell";
import { Link } from "react-router-dom"; 

const LINKS = [
  {
    icon: ProfileCircle,
    title: "Account",
    href: "/account",
  },
  {
    icon: Bell,
    title: "Notifications",
    href: "/notifications", 
  },
  {
    icon: Archive, 
    title: "Manage Listings",
    href: "/manage-listings", 
  },
];


function NavList() {
  return (
    <ul className="mt-4 flex flex-col gap-x-3 gap-y-1.5 lg:mt-0 lg:flex-row lg:items-center">
      {LINKS.map(({ icon: Icon, title, href }) => (
        <li key={title}>
          <Typography
            as={Link}
            to={href}
            type="small"
            className="flex items-center gap-x-2 p-1 hover:text-primary"
          >
            <Icon className="h-4 w-4" />
            {title}
          </Typography>
        </li>
      ))}
    </ul>
  );
}

export default function NavbarDemo() {
  const [openNav, setOpenNav] = React.useState(false);
  const [openSignIn, setSignIn] = React.useState(false);
  const [openSell, setSell] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  return (
    <Navbar className="mx-auto my-5 w-full max-w-screen-xl">
      <div className="flex items-center">
        <Typography
          as={Link}
          to="/"
          type="small"
          className="ml-2 mr-2 block py-1 font-semibold"
        >
          Khetsing Market
        </Typography>
        <hr className="ml-1 mr-1.5 hidden h-5 w-px border-l border-t-0 border-secondary-dark lg:block" />
        <div className="hidden lg:block">
          <NavList />
        </div>
        <Button size="sm" className="hidden lg:ml-auto lg:inline-block" onClick={() => setSignIn(true)}>
          Sign In
        </Button>
        <Button color="success" size="sm" className="hidden lg:ml-2 lg:inline-block" onClick={() => setSell(true)}>
          Sell
        </Button>
        <IconButton
          size="sm"
          variant="ghost"
          color="secondary"
          onClick={() => setOpenNav(!openNav)}
          className="ml-auto grid lg:hidden"
        >
          {openNav ? (
            <Xmark className="h-4 w-4" />
          ) : (
            <Menu className="h-4 w-4" />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <Button isFullWidth size="sm" className="mt-4" onClick={() => setSignIn(true)}>
          Sign In
        </Button>
        <Button isFullWidth color="success" size="sm" className="mt-4" onClick={() => setSell(true)}>
        Sell Something
        </Button>
      </Collapse>
      {/*Modals*/}
      <SignInModal open={openSignIn} setOpen={setSignIn} />
      <SellModal open={openSell} setOpen={setSell} />
    </Navbar>
  );
}

