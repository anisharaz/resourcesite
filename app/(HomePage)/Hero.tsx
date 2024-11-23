export default async function Hero() {
  return (
    <div className="relative text-white h-screen">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-full object-cover fill-current text-lpri dark:text-dpri"
        style={{
          height: "100vh",
        }}
      >
        <defs>
          <pattern
            id="a"
            width="300"
            height="300"
            patternTransform="rotate(35)"
            patternUnits="userSpaceOnUse"
            viewBox="0 0 40 40"
          >
            <rect width="100%" height="100%" />
            <path
              fill="rgba(0, 194, 90,1)"
              d="m-20 30.5 10-10 10 10 10-10 10 10 10-10 10 10v-1l-10-10-10 10-10-10-10 10-10-10-10 10zm0-40 10-10 10 10 10-10 10 10 10-10 10 10v-1l-10-10-10 10-10-10-10 10-10-10-10 10zm0 80 10-10 10 10 10-10 10 10 10-10 10 10v-1l-10-10-10 10-10-10-10 10-10-10-10 10z"
            />
            <path
              fill="#d69e2e"
              d="m-20 30.5 20-20 20 20 20-20 20 20 20-20 20 20v-1l-20-20-20 20-20-20-20 20-20-20-20 20zm0-40 20-20 20 20 20-20 20 20 20-20 20 20v-1l-20-20-20 20-20-20-20 20-20-20-20 20zm0 80 20-20 20 20 20-20 20 20 20-20 20 20v-1l-20-20-20 20-20-20-20 20-20-20-20 20z"
            />
          </pattern>
        </defs>
        <rect width="200%" height="200%" fill="url(#a)" />
      </svg>
      <div className="absolute text-3xl md:text-5xl lg:text-6xl top-40 md:top-1/3 left-7 md:left-20 font-extrabold flex flex-col gap-2 md:text-center">
        <div>
          One Place For{" "}
          <span className="stroke text-transparent ">All Notes</span> &
          resources
        </div>
        <div className="text-xl md:text-2xl lg:text-4xl">
          Scroll And Start Exploring Course wise
        </div>
      </div>
    </div>
  );
}
