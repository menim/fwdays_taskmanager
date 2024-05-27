"use server";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { Task } from "@/types";

const supabase = createClient();
export default async function addTask(dataFromForm: FormData) {
    const {title, description, priority, deadline} = dataFromForm as Partial<Task>;
    if (!dataFromForm) {
        return;
    }
   await supabase.from("tasks").insert({
        title: title,
        description: description,
        priority: priority,
        deadline: deadline,
        status: false,
        created_at: new Date().toISOString(),
    });

    revalidatePath("/tasks");
}
