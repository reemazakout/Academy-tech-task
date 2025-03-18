export default function Header() {
  return (
    <header className="bg-gray-900 text-white">
      {/* Hero section */}
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          {/* Heading */}
          <h1 className="title-text  text-3xl font-extrabold  sm:text-5xl">
            Join Teach Academy Courses Now.
            <span className="sm:block"> Elevate Your Skills. </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Teach Academy is your gateway to a world of knowledge and
            innovation. Our courses are designed to empower you with the skills.
          </p>
        </div>
      </div>
    </header>
  );
}
