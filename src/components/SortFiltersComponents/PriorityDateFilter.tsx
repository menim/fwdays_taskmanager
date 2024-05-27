'use client';
import {ChangeEvent, useEffect, useState, useCallback} from "react";

import { cn } from "@/lib/utils"
import {CalendarIcon} from "lucide-react";
import { format } from "date-fns"
import {Button} from "@/components/ui/button";
import {Calendar} from "@/components/ui/calendar";
import {Task} from "@/types";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

interface Priority {
    [key: string]: boolean;
}

const PriorityDateFilter = ({tasks, setGroupedTasks}:{tasks: Task[], setGroupedTasks: (data:Task[]) => void}) => {
    const [date, setDate] = useState<Date>()
    const [priority, setPriority] = useState<Priority>({
        'low': false,
        'medium': false,
        'high': false,
    })

    const handlePriorityCheckbox = (event:ChangeEvent<HTMLInputElement>) => {
        setPriority((prevPriority) => ({...prevPriority, [event.target.id]: event.target.checked}));
    }

    const filterTasksByDeadline = useCallback((tasksData:Task[]) => {
        if(date) {
            return tasksData.filter(task => format(date,"PPP") === format(task.deadline,"PPP"));
        }
        return tasksData;
    }, [date]);

    const filterTaskByPriority = useCallback((tasksData:Task[]) => {
        const isAnyCheckboxChecked = Object.keys(priority).find((key) => priority[key]);
        if(!isAnyCheckboxChecked) {
            return tasksData;
        }

        return tasksData.filter((task) =>  priority[task.priority])
    }, [priority])

    const handleSortAndFilter = useCallback(() => {
        const resFilterByDeadline = filterTasksByDeadline(tasks);
        const resFilterByDeadlineAndPriority  = filterTaskByPriority(resFilterByDeadline);
        setGroupedTasks(resFilterByDeadlineAndPriority);
    }, [filterTasksByDeadline, filterTaskByPriority, setGroupedTasks, tasks]);

    useEffect(() => {
        handleSortAndFilter();
    },[tasks])

    return (
        <>
            <strong className="block w-full mb-1">Priority filter</strong>
            <div className="flex items-center space-x-2 mb-2">
                <input type="checkbox" id="low" name="low" checked={priority['low']} onChange={handlePriorityCheckbox} />
                <div className="grid gap-1.5 leading-none">
                    <label
                        htmlFor="low"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Low
                    </label>
                </div>
            </div>
            <div className="flex items-center space-x-2 mb-2">
                <input type="checkbox" id="medium" name="medium" checked={priority['medium']} onChange={handlePriorityCheckbox} />
                <div className="grid gap-1.5 leading-none">
                    <label
                        htmlFor="medium"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Medium
                    </label>
                </div>
            </div>
            <div className="flex items-center space-x-2 mb-4">
                <input type="checkbox" id="high" name="high" checked={priority['high']} onChange={handlePriorityCheckbox} />
                <div className="grid gap-1.5 leading-none">
                    <label
                        htmlFor="high"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        High
                    </label>
                </div>
            </div>
            <strong className="block w-full mb-1">Deadline filter</strong>
            <div className="flex items-center space-x-2 mb-2">
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            variant={"outline"}
                            className={cn(
                                "w-full justify-start text-left font-normal",
                                !date && "text-muted-foreground"
                            )}
                        >
                            <CalendarIcon className="mr-2 h-4 w-4"/>
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                            disabled={(date) =>
                                date <= new Date()
                            }
                        />
                    </PopoverContent>
                </Popover>
            </div>
            <Button onClick={() => handleSortAndFilter()} className="w-full" variant="tertiary">Apply filters</Button>
        </>
    )
}

export default PriorityDateFilter;