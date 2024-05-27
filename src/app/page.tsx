import { redirect } from 'next/navigation'
import Headline from "@/components/ui/headline";
import Placeholder from "@/components/ui/placeholder";
import AddTaskDialog from "../components/AddTaskDialog";
import TaskItem from "../components/TaskItem";

export default async function Home() {
    redirect('/tasks')
}
