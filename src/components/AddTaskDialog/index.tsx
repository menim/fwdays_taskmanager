"use client";

import {useState} from "react";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog";

import {Button} from "@/components/ui/button";
import AddTaskForm  from "../AddTaskForm";

const AddTaskDialog = () => {
    const [open, setOpen] = useState(false);
    return <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className="mt-2" asChild>
            <Button variant="success">Add Task</Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Add Task</DialogTitle>
            </DialogHeader>
            <AddTaskForm handleDialogClose={setOpen}/>
        </DialogContent>
    </Dialog>;
}


export default AddTaskDialog;