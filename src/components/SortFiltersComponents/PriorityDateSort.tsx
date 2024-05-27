'use client';
import {useState} from "react";
import {Button} from "@/components/ui/button";

import { ArrowUpDown } from 'lucide-react';

import {Task} from "@/types";
import {Priority} from "@/types";

const PriorityDateSort = ({groupedTasks, setGroupedTasks}:{groupedTasks:Task[], setGroupedTasks: (data:Task[]) => void}) => {
    const [priorityOrder, setPriorityOrder] = useState<Boolean>(false);
    const [dateOrder, setDateOrder] = useState<Boolean>(false);

    const sortByPriority = () => {
        if(groupedTasks.length > 0) {
            const sortData = priorityOrder ? groupedTasks.sort((a,b) => {
                return Priority[a.priority] - Priority[b.priority];
            }) : groupedTasks.sort((a, b) => {
                return Priority[b.priority] - Priority[a.priority];
            });
            setPriorityOrder(priorityOrder => !priorityOrder);
            setGroupedTasks([...sortData]);
        }
    }

    const sortByDate = () => {
        if(groupedTasks.length > 0) {
            const sortData = dateOrder ? groupedTasks.sort((a,b) => {
               return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
            }) : groupedTasks.sort((a,b) => {
                return new Date(b.deadline).getTime() - new Date(a.deadline).getTime();
            });
            setDateOrder(dateOrder => !dateOrder);
            setGroupedTasks([...sortData]);
        }
    }

    return (
        <>
            <h3 className="text-center text-gray-700 text-2xl font-semibold pt-2 mb-2">Sort</h3>
            <Button className="mb-2" disabled={groupedTasks.length <= 1}
                    onClick={sortByPriority}>Priority{' '}<ArrowUpDown width={16} height={16} /></Button>
            <Button className="mb-4" disabled={groupedTasks.length <= 1} onClick={sortByDate}>Date{' '}<ArrowUpDown width={16} height={16} /></Button>
        </>
    )
}

export default PriorityDateSort;