"use client";

import { useTransition } from "react";
import deleteTask from "@/actions/deleteTask";
import {Button} from "@/components/ui/button";
import {TrashIcon} from "lucide-react";

export const DeleteTodoButton = ({ taskId }: {taskId: number}) => {
    const [isPending, startTransition] = useTransition();

    const handleDeleteTask = (taskId: number) => {
        startTransition(async () => {
            await deleteTask(taskId);
        });
    };

    return (
        <Button variant="destructive"
                disabled={isPending}
                onClick={() => handleDeleteTask(taskId)}>
            <TrashIcon className="w-6 pr-2"/>
            Delete
        </Button>
    );
};

export default DeleteTodoButton;
