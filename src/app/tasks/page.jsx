import { AddATask } from '@/components/modal/AddTasks';
import TasksCard from '@/components/tasksCard/TasksCard';
import { CreateATask } from '@/lib/CreateATaska';
import { getTasks } from '@/lib/tasks';
import React from 'react';


const TasksPage = async () => {

    const tasks = await getTasks()

    return (
        <div>
            <h1 className='mb-10'>Tasks: {tasks.length}</h1>
            <AddATask CreateATask =  {CreateATask} />
            <div className='grid grid-cols-3 gap-10 mt-10'>
                {
                    tasks.map(task => <TasksCard key={task.id} task={task} />)
                }
            </div>
        </div>
    );
};

export default TasksPage;