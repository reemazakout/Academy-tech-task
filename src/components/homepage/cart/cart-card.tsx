import { useContext } from "react";
import { CartContext } from "../../../context/CartContext"; // Make sure the path is correct
import { Link } from "react-router-dom";

export default function CartCard() {
  // Use the cart context
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext)!;

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <header className="text-center">
            {/* Heading If Cart Is Not Empty */}
            {cart.length > 0 && (
              <h2 className="text-2xl font-bold text-gray-900">Your Cart</h2>
            )}
          </header>
          <div className="mt-8">
            {/* Heading If Cart Is Empty */}
            {cart.length === 0 ? (
              <div className="font-bold pt-44 text-4xl flex flex-col items-center  text-black ">
                Your cart is empty
                <div>
                  {/* Back to Homepage Button */}
                  <Link
                    className="inline-flex text-white bg-blue-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
                    to="/"
                  >
                    Back To Homepage
                  </Link>
                </div>
              </div>
            ) : (
              <ul className="space-y-4">
                {cart.map((item) => (
                  <li key={item.id} className="flex items-center gap-4">
                    {/* Product Image */}
                    <img
                      src={item.image}
                      alt={`${item.title} image`}
                      className="size-16 rounded-sm object-cover"
                    />

                    <div>
                      {/* Product Title */}
                      <h3 className="text-sm text-gray-900">{item.title}</h3>
                    </div>
                    <div className="flex flex-1 items-center justify-end gap-3">
                      {/* Counter with increment & decrement buttons */}
                      <div className="flex items-center border border-gray-300 rounded-md">
                        {/* Decrement Button */}
                        <button
                          className="px-4 py-1 bg-red-500 text-white font-bold rounded-l-md"
                          onClick={() => decreaseQuantity(item.id)}
                        >
                          -
                        </button>
                        <div className="px-4 py-1 font-medium text-center text-gray-900 bg-white focus:outline-none">
                          {/* Quantity */}
                          {item.quantity}
                        </div>

                        {/* Increment Button */}
                        <button
                          className="px-4 py-1 bg-blue-500 text-white font-bold rounded-r-md"
                          onClick={() => increaseQuantity(item.id)}
                        >
                          +
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        className="text-gray-600 transition hover:text-red-600"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <span className="sr-only">Remove item</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            {/* Summary information */}
            {cart.length > 0 && (
              <div className="mt-8 flex justify-between border-t border-gray-100 pt-8">
                {/* Total Items */}
                <div className="text-sm font-medium text-gray-900">
                  Total Items:{" "}
                  {cart.reduce((total, item) => total + item.quantity, 0)}
                </div>

                {/* Total Products  */}
                <div className="text-sm font-medium text-gray-900">
                  Unique Products: {cart.length}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
