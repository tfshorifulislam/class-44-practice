
export const CreateATask = async (formData) => {
    'use server'

    // const name = formData.get('name')

    const  newTasks = Object.fromEntries(formData.entries());

    console.log('adding a task with name', newTasks)
}