'use client';
import {useEffect, useState} from "react";
import TaskItem from './TaskItem';
import StatusFilter from '@/components/SortFiltersComponents/StatusFilter';
import PriorityDateFilter from "@/components/SortFiltersComponents/PriorityDateFilter";
import PriorityDateSort from "@/components/SortFiltersComponents/PriorityDateSort";
import {Task} from "@/types";

const TaskList = ({data}:{data:Task[]}) => {
  const [groupedTasks, setGroupedTasks] = useState(data);

  return <div className="container mx-auto pt-10">
              <div className="grid grid-cols-4 gap-6">
                  <div className="sticky top-4 col-span-1 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 rounded-lg shadow-lg self-start">
                      <h3 className="text-center text-gray-700 text-2xl font-semibold pt-2">Filters</h3>
                      <div className="mt-4 flex flex-col pl-4 pr-4">
                          <StatusFilter />
                      </div>
                      <div className="mt-4 flex flex-col pl-4 pr-4">
                          <PriorityDateFilter tasks={data} setGroupedTasks={setGroupedTasks} />
                      </div>
                      <div className="mt-4 flex flex-col pl-4 pr-4">
                          <PriorityDateSort groupedTasks={groupedTasks} setGroupedTasks={setGroupedTasks} />
                      </div>
                  </div>
                  <div className="col-span-3">
                  {
                          groupedTasks && groupedTasks?.length > 0 ?
                              groupedTasks.map((task:Task) => <TaskItem key={task.id} {...task} />)
                              : <div className="w-full h-full flex items-center justify-center text-white font-semibold text-4xl">Filter doesnt find anything</div>
                      }
                </div>
              </div>
          </div>
}

export default TaskList;