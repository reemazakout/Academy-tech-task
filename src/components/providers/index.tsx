import ReactQuery from "./react-query";
import RouterDomProvider from "./route-dom";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* ReactQuery Provider */}
      <ReactQuery>
        {/* Router Dom Provider */}
        <RouterDomProvider />

        {children}
      </ReactQuery>
    </>
  );
}
