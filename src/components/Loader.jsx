import { Spinner } from "@material-tailwind/react";

export default function Loader() {
  return (
  <div className="container max-w-screen-xl mx-auto">
  <Spinner className="h-16 w-16" />
  </div>
  );
}

