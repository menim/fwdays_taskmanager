export type Task = {
    title: string,
    description: string,
    deadline: string,
    id: number,
    status: boolean,
    priority: 'high' | 'medium' | 'low',
}

export enum Priority {
    low = 1,
    medium = 2,
    high = 3,
}