import React from "react";
import { Breadcrumb } from "@material-tailwind/react";
import { HomeSimple } from "iconoir-react";
import { Link } from "react-router-dom";

export default function BreadcrumbWithIcon({ label = "Page", to = "/" }) {
  return (
    <Breadcrumb className="ml-3">
      <Link to="/">
        <HomeSimple className="h-[18px] w-[18px]" />
      </Link>
      <Breadcrumb.Separator />
      <Link
        to={to}
        className="text-sm font-medium text-blue-600"
      >
        {label}
      </Link>
    </Breadcrumb>
  );
}

