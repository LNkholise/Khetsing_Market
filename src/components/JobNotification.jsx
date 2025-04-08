export default function NotificationCTA() {
  return (
    <div className="px-6 py-6 bg-gradient-to-r from-blue-900 via-teal-700 to-green-600 rounded-sm md:py-10 md:px-12 lg:py-12 lg:px-14 xl:flex xl:items-center sm:rounded-lg">
      <div className="xl:w-0 xl:flex-1">
        <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
          Never Miss a Gig—Get Instant Job Alerts!
        </h2>
        <p className="max-w-2xl mt-2 text-sm text-gray-200">
          Whether it's a quick gig or a temp job, stay ahead with instant notifications. 
          Be the first to know when fresh opportunities pop up—tailored just for you.
        </p>
      </div>
      <div className="mt-6 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
        <div className="rounded-md shadow">
          <button className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white transition duration-300 ease-in-out bg-white bg-opacity-20 border border-white border-opacity-40 rounded-md backdrop-blur-md hover:bg-opacity-30 focus:outline-none">
            Notify Me
          </button>
        </div>
        <p className="mt-2 text-xs text-gray-200">
          Stay ahead of the curve and never miss out on your next opportunity.
        </p>
      </div>
    </div>
  );
}

