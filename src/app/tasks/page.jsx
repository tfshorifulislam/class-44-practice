import { getTasks } from '@/lib/tasks';
import React from 'react';


const TasksPage = async () => {

    const tasks = await getTasks()

    return (
        <div>
            <h1>Tasks: {tasks.length}</h1>
        </div>
    );
};

export default TasksPage;