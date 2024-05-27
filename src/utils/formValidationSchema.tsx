import {z} from "zod";

const nonEmptyString = z.string().min(1, "The string must not be empty.");

export const formSchema = z.object({
    title: nonEmptyString,
    description: nonEmptyString,
    priority: z.string().refine(val => {
        return ["high", "medium", "low"].includes(val);
    }, {
        message: "Priority have to be selected"
    }),
    deadline: z.date({message: "Select deadline date"}),
    status: z.boolean()
})
