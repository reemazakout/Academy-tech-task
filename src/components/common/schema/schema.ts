import { z } from "zod";

// Form validation schema
const schema = z.object({
    title: z.string().min(2, { message: "Please enter a title" }),
    description: z.string().min(2, { message: "Please enter a description" }),
    instructor: z.string().min(2, { message: "Please enter an instructor" }),
    duration: z.string().min(1, { message: "Please enter a duration" }),
    image: z.string().url({ message: "Invalid image URL" }),
});

export type Inputs = z.infer<typeof schema>;

export default schema;
