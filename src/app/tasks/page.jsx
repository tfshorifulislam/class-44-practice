import TasksCard from '@/components/tasksCard/TasksCard';
import tasksCard from '@/components/tasksCard/TasksCard';
import { getTasks } from '@/lib/tasks';
import React from 'react';


const TasksPage = async () => {

    const tasks = await getTasks()

    return (
        <div>
            <h1>Tasks: {tasks.length}</h1>
            <div className='grid grid-cols-3 gap-10'>
                {
                    tasks.map(task => <TasksCard key={task.id} task={task} />)
                }
            </div>
        </div>
    );
};

export default TasksPage;