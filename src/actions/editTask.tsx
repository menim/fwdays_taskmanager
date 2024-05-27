"use server";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

const supabase = createClient();
export default async function editTask(dataFromEdit:any) {
    const {title, description, priority, deadline, status, id} = dataFromEdit as any;
    if (!dataFromEdit) {
        return;
    }

    const { data, error } = await supabase
        .from('tasks')
        .update({
            title: title,
            description: description,
            priority: priority,
            deadline: deadline,
            status: status})
        .eq('id', id)

    revalidatePath("/tasks");
}
