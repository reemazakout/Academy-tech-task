import { useQuery } from "@tanstack/react-query";
import Card from "./courses-card";
import CardSkeleton from "../../skeletones/card.skeleton";
import { Courses } from "../../../utils/types/courses";

export default function CardList({ searchQuery }: { searchQuery: string }) {
  // Get the API base URL
  const ApiBaseUrl = import.meta.env.VITE_API_URL;

  // Fetch all courses from the database (JSON server)
  const { isPending, data, error } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const response = await fetch(`${ApiBaseUrl}/courses`);

      // Check if the request was successful
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Parse the response as JSON
      const data = await response.json();
      console.log(data);

      // Return the data
      return data;
    },

    // Cache time and refetch settings
    staleTime: 60 * 1000,
    refetchInterval: 60 * 1000,
    refetchIntervalInBackground: true,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    refetchOnReconnect: true,
  });

  // Display an error message if there's an issue
  if (error) {
    return (
      <div className="text-red-500 text-center font-bold">
        Something went wrong: <span>{error.message}</span>
      </div>
    );
  }

  // Filter courses based on the search query
  const filteredCourses = data?.filter((course: Courses) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto min-h-screen py-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-center place-items-center">
        {/* Skeleton Loader */}
        {isPending &&
          Array(4)
            .fill(0)
            .map((_, index) => <CardSkeleton key={index} />)}

        {/* Render filtered course cards */}
        {!isPending &&
          filteredCourses?.map((course: Courses) => (
            <Card key={course.id} course={course} />
          ))}

        {/* Show message if no courses match the search query */}
        {!isPending && filteredCourses?.length === 0 && (
          <p className="text-center text-gray-500 col-span-full">
            No courses found.
          </p>
        )}
      </div>
    </div>
  );
}
