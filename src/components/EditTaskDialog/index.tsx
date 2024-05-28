"use client";

import {useState} from "react";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog";
import {PencilIcon} from "lucide-react";
import {Button} from "@/components/ui/button";
import EditTaskForm  from "../EditTaskForm";

import {Task} from "@/types";

const EditTaskDialog = (props:Task) => {
    const [open, setOpen] = useState(false);

    return <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className="mt-2" asChild>
            <Button variant="tertiary" className="mr-2">
                <PencilIcon className="w-6 pr-2" />
                Edit
            </Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Edit Task</DialogTitle>
            </DialogHeader>
            <EditTaskForm task={props} handleDialogClose={setOpen} />
        </DialogContent>
    </Dialog>;
}

export default EditTaskDialog;