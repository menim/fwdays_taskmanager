"use server";

import {createClient} from "@/utils/supabase/server";
import {redirect} from "next/navigation";
import {revalidatePath} from "next/cache";

export async function login(formData: FormData) {
    const supabase = createClient()

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signInWithPassword(data)
    if (error) {
        redirect(`/login?error=${encodeURIComponent(error.message)}`)
    };

    revalidatePath('/tasks', 'layout')
    redirect('/tasks')
}
