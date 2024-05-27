'use client';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

import {usePathname, useSearchParams, useRouter} from "next/navigation";

type statusFilterType = "all" | "complete" | "uncomplete";

const StatusFilter = () => {
    const {replace} = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    function handleStatusFilter(selectedStatus:statusFilterType) {
       const params = new URLSearchParams();
       if(selectedStatus == "all") {
           replace(pathname)
       } else {
           params.set("statusFilter", selectedStatus);
           replace(`${pathname}?${params.toString()}`);
       }
    }

    return (
        <>
            <strong className="mt-2 pb-2">Status filter</strong>
            <Select onValueChange={handleStatusFilter} defaultValue='all'>
                <SelectTrigger>
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="complete">Complete</SelectItem>
                    <SelectItem value="uncomplete">Uncomplete</SelectItem>
                </SelectContent>
            </Select>
        </>
    )
}

export default StatusFilter;