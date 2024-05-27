'use client';

import {Badge} from "@/components/ui/badge";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import DeleteTaskButton from "@/components/Buttons/DeleteTaskButton";
import EditTaskDialog from "../EditTaskDialog";

import { Task } from "@/types";

const TaskItem: React.FC<Task> = (props) => {
      const {title, description, deadline, id, status, priority} = props;
      return (<Card className="w-full flex align-bottom justify-between mb-6 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200">
                   <CardHeader>
                       <CardTitle>{title}</CardTitle>
                       <CardDescription className="text-xl">{description}</CardDescription>
                       <p><strong>Priority:</strong><span className="font-semibold text-gray-700">{' '}{priority}</span></p>
                       <p><strong>Expire date:</strong><span className="font-semibold text-gray-700">{' '}{deadline}</span></p>
                       <Badge className="self-start" variant={status ? 'success' : 'destructive'}>{status ? 'Complete' : 'Uncomplete'}</Badge>
                   </CardHeader>
                  <CardFooter className="flex items-end pr-6 pb-6">
                      <EditTaskDialog {...props} />
                      <DeleteTaskButton taskId={id} />
                   </CardFooter>
               </Card>);
}

export default TaskItem;