"use server";

import {createClient} from "@/utils/supabase/server";
import {redirect} from "next/navigation";
import {revalidatePath} from "next/cache";

export async function logout() {
    const supabase = createClient()
    const { error } = await supabase.auth.signOut()

    revalidatePath('/login', 'layout')
    redirect('/login')
}
