import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import schema, { Inputs } from "../components/common/schema/schema";
import toast from "react-hot-toast";

export function useAddCourse() {
  // Get API base URL
  const ApiBaseUrl = import.meta.env.VITE_API_URL;

  // Initialize React Query client
  const queryClient = useQueryClient();

  // Initialize React Hook Form with Zod validation
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
      description: "",
      instructor: "",
      duration: "",
      image: "",
    },
  });

  // Create mutation for adding a new course
  const mutation = useMutation({
    mutationFn: async (data: Inputs) => {
      const response = await fetch(`${ApiBaseUrl}/courses`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to add course");
      }

      return response.json();
    },
    onSuccess: () => {
      // Invalidate and refetch courses query on success
      queryClient.invalidateQueries({ queryKey: ["courses"] });
      setTimeout(() => toast.success("Course added successfully"), 1000);
      reset(); // Reset form fields
    },
  });

  // Form submission handler
  const onSubmit = (data: Inputs) => {
    return mutation.mutate(data);
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    isSubmitting,
    mutation,
    reset,
  };
}
