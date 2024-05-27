import { createClient } from "@/utils/supabase/server";
import Headline from "@/components/ui/headline";
import Placeholder from "@/components/ui/placeholder";
import AddTaskDialog from "@/components/AddTaskDialog";
import TaskList from "@/components/TaskList";
import LogoutButton from "@/components/Buttons/LogoutButton";
import { redirect } from 'next/navigation'

import {Task} from "@/types";

const supabase = createClient();
const getData = async () => {
    const res = await supabase.from("tasks").select("id, title, description, deadline, priority, status").order('id')
    return res;
}

const getDataFilterByStatus = async (status:string) => {
    let res = null;
    switch(status) {
        case 'complete':
            res = await supabase.from("tasks").select("id, title, description, deadline, priority, status").eq('status', true)
            break;
        case 'uncomplete':
            res = res = await supabase.from("tasks").select("id, title, description, deadline, priority, status").eq('status', false)
            break;
    }
    return res;
}

export default async function Home({searchParams}:{searchParams:{[key:string]:string}}) {
    const { data:authData, error } = await supabase.auth.getUser()
    if (error || !authData?.user) {
        redirect('/login')
    }

   let data = null;
    if(Object.keys(searchParams).length === 0) {
        ({ data } = await getData());
   }
   if(searchParams['statusFilter']) {
       ({ data } = await getDataFilterByStatus(searchParams['statusFilter']) as any);
   }

    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <Headline>
                Task Manager
            </Headline>
            <AddTaskDialog />
            { (data?.length === 0) ?
                <Placeholder>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    You don't have any tasks yet
                </Placeholder> : <TaskList data={data} />
            }
            <LogoutButton />
        </main>
    );
}
