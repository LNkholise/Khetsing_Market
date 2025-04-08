import { useEffect } from "react";
import { Button } from "@material-tailwind/react";
import { Xmark, GoogleCircle } from "iconoir-react";

export default function SignInModal({ open, setOpen }) {
  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="relative w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
        >
          <Xmark className="h-5 w-5" />
        </button>

        {/* Header */}
        <h2 className="text-md font-semibold mb-1">Sign In</h2>
        <p className="text-gray-600 mb-6 text-xs sm:text-sm">
          Enter your email and password to Sign In.
        </p>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="someone@example.com"
              className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-xs sm:text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="************"
              className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center">
            <input
              id="remember"
              type="checkbox"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <label htmlFor="remember" className="ml-2 block text-xs sm:text-sm text-gray-600">
              Remember Me
            </label>
          </div>

      <Button isFullWidth variant="gradient">
       	Sign In
      </Button>
        <div className="mt-4 text-center text-sm">
	<Button className="border-white bg-white text-black shadow-md shadow-black/10 hover:border-white hover:bg-white hover:brightness-110 w-full">
		<GoogleCircle className="mr-2 h-4 w-4 stroke-2" /> Continue with Google
	 </Button>
        </div>
        </form>

        {/* Footer */}
        <div className="mt-4 text-center text-xs sm:text-sm">
          <span>Don’t have an account? </span>
          <a href="#" className="text-blue-600 hover:underline font-medium">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}

