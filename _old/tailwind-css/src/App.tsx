function App() {
  return (
    <>
      <div className="bg-sky-600 p-4 font-sans text-xl text-white font-bold flex flex-col text-center md:flex-row md:justify-between md:items-center">
        Facebook
        <input
          className="border border-transparent outline-none bg-white p-1 rounded placeholder:text-slate-200 text-gray-500 text-base placeholder:text-base focus:ring-2 focus:ring-sky-400 mt-5 md:mt-0"
          type="text"
          placeholder="Buscar"
        />
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md bg-white text-sky-600"
          disabled
        >
          <svg
            className="motion-reduce:hidden animate-spin -ml-1 mr-3 h-5 w-5 text-sky-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Loading...
        </button>
      </div>
    </>
  );
}

export default App;
