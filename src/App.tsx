import { Toaster } from "react-hot-toast";
import Providers from "./components/providers";
import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <>
      {/* Cart Context Provider */}
      <CartProvider>
        {/* Providers */}

        <Providers>
          {/* Toaster */}
          <Toaster />
        </Providers>
      </CartProvider>
    </>
  );
}
