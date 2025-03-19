import { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";

export default function Card({ course }: { course: Courses }) {
  // Destructure course object
  const { title, description, image, instructor, duration } = course;

  // Get the addToCart function from the CartContext
  const { addToCart } = useContext(CartContext)!;
  return (
    <section className="border border-gray-300 rounded-lg shadow-md max-w-[350px] w-full h-[500px] flex flex-col">
      <div className="flex flex-col justify-between h-full p-2">
        {/* Course Image */}
        <div className="relative w-full">
          <img
            src={image}
            alt="image"
            className="w-full object-cover h-[200px] rounded-t-lg"
          />
          <a className="absolute w-full h-full top-0 left-0 bg-blue-900 opacity-0 transition-opacity duration-300 hover:opacity-30"></a>
        </div>

        {/* Course Title */}
        <h2 className="text-2xl font-bold text-center overflow-hidden">
          {title}
        </h2>

        {/* Course Description */}
        <p className="text-center font-normal h-[80px] overflow-hidden line-clamp-3">
          {description}
        </p>

        {/* Instructor Name and Duration */}
        <div className="flex justify-between text-sm text-gray-600">
          <span>
            <span className="font-semibold">Instructor:</span> {instructor}
          </span>
          <span>
            <span className="font-semibold">Duration:</span> {duration}
          </span>
        </div>

        {/* Add To Cart Button */}
        <button
          onClick={() => addToCart(course)}
          className="bg-blue-500 hover:bg-blue-700 text-white w-full font-bold py-2 px-4 rounded-full mb-4"
        >
          Add To Cart
        </button>
      </div>
    </section>
  );
}
