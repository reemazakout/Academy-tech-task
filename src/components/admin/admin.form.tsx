import { useAddCourse } from "../../hooks/useAddCourse";

export default function AdminForm() {
  const { register, handleSubmit, onSubmit, errors, isSubmitting, mutation } =
    useAddCourse();

  // Simple form submission without toast
  const handleFormSubmit = handleSubmit((data) => {
    onSubmit(data);
  });

  return (
    <form
      className="mx-auto container w-full pt-32 ov flex flex-col gap-5 items-center justify-center"
      onSubmit={handleFormSubmit}
    >
      {/* Title */}
      <label className="w-full max-w-md">
        <span className="block text-sm font-medium text-gray-700 mb-1">
          Title
        </span>
        <input
          type="text"
          className="p-2 border-2 border-gray-500 focus:outline-blue-500 rounded-md w-full"
          placeholder="Enter course title"
          {...register("title")}
        />
        {errors.title && (
          <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>
        )}
      </label>

      {/* Description */}
      <label className="w-full max-w-md">
        <span className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </span>
        <textarea
          className="p-2 border-2 border-gray-500 focus:outline-blue-500 rounded-md w-full"
          rows={4}
          placeholder="Enter course description"
          {...register("description")}
        />
        {errors.description && (
          <p className="text-red-500 text-xs mt-1">
            {errors.description.message}
          </p>
        )}
      </label>

      {/* Instructor */}
      <label className="w-full max-w-md">
        <span className="block text-sm font-medium text-gray-700 mb-1">
          Instructor
        </span>
        <input
          type="text"
          className="p-2 border-2 border-gray-500 focus:outline-blue-500 rounded-md w-full"
          placeholder="Enter instructor name"
          {...register("instructor")}
        />
        {errors.instructor && (
          <p className="text-red-500 text-xs mt-1">
            {errors.instructor.message}
          </p>
        )}
      </label>

      {/* Duration */}
      <label className="w-full max-w-md">
        <span className="block text-sm font-medium text-gray-700 mb-1">
          Duration
        </span>
        <input
          type="text"
          className="p-2 border-2 border-gray-500 focus:outline-blue-500 rounded-md w-full"
          placeholder="e.g. 2 hours"
          {...register("duration")}
        />
        {errors.duration && (
          <p className="text-red-500 text-xs mt-1">{errors.duration.message}</p>
        )}
      </label>

      {/* Image */}
      <label className="w-full max-w-md">
        <span className="block text-sm font-medium text-gray-700 mb-1">
          Image URL
        </span>
        <input
          type="text"
          className="p-2 border-2 border-gray-500 focus:outline-blue-500 rounded-md w-full"
          placeholder="https://example.com/image.jpg"
          {...register("image")}
        />
        {errors.image && (
          <p className="text-red-500 text-xs mt-1">{errors.image.message}</p>
        )}
      </label>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-md w-full max-w-md disabled:bg-blue-300 transition-colors"
      >
        {isSubmitting ? "Adding..." : "Add Course"}
      </button>

      {/* Status indicators */}
      {mutation.isPending && (
        <div className="text-blue-500">Adding course...</div>
      )}
      {mutation.isError && (
        <div className="text-red-500">Error: {mutation.error.message}</div>
      )}
      {mutation.isSuccess && (
        <div className="text-green-500">Course added successfully!</div>
      )}
    </form>
  );
}
