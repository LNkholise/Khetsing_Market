import { Typography, IconButton } from "@material-tailwind/react";
import { Facebook, Instagram, X, Github, Dribbble } from "iconoir-react";

const YEAR = new Date().getFullYear();

export default function FooterWithSitemap() {
  return (
    <footer className="relative w-full">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 border-t border-surface py-4 md:flex-row md:justify-between">
          <Typography type="small" className="text-center">
            &copy; {YEAR}{" "}
            <a href="https://material-tailwind.com/">Khetsing Market</a>. All
            Rights Reserved.
          </Typography>
          <div className="flex gap-1 sm:justify-center">
            <IconButton
              as="a"
              href="#"
              color="secondary"
              variant="ghost"
              size="sm"
            >
              <Facebook className="h-4 w-4" />
            </IconButton>
            <IconButton
              as="a"
              href="#"
              color="secondary"
              variant="ghost"
              size="sm"
            >
              <Instagram className="h-4 w-4" />
            </IconButton>
            <IconButton
              as="a"
              href="#"
              color="secondary"
              variant="ghost"
              size="sm"
            >
              <X className="h-4 w-4" />
            </IconButton>
          </div>
        </div>
      </div>
    </footer>
  );
}

