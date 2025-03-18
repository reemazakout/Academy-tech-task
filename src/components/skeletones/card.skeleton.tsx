export default function CardSkeleton() {
  return (
    <section className="border border-gray-300 rounded-lg shadow-md max-w-[350px] w-full h-[420px] animate-pulse">
      <div className="flex flex-col items-center justify-center gap-5">
        {/* Skeleton for Course Image */}
        <div className="relative w-full h-auto">
          <div className="w-full max-w-sm mx-auto h-48 bg-gray-300 rounded-t-lg"></div>
        </div>

        {/* Skeleton for Course Title */}
        <div className="w-3/4 h-6 bg-gray-300 rounded-md"></div>

        {/* Skeleton for Course Description */}
        <div className="w-5/6 h-4 bg-gray-300 rounded-md"></div>

        {/* Skeleton for Instructor Name & Duration */}
        <div className="flex justify-between items-center gap-4 w-full px-4">
          <div className="w-1/3 h-4 bg-gray-300 rounded-md"></div>
          <div className="w-1/4 h-4 bg-gray-300 rounded-md"></div>
        </div>

        {/* Skeleton for Button */}
        <div className="w-[80%] h-10 bg-gray-300 rounded-full mb-2"></div>
      </div>
    </section>
  );
}
