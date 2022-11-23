import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { Task } from './../../models/task.class';
import TaskComponent from './../pure/task';
import { LEVELS } from './../../models/levels.enum';

const TaskListComponent = () => {


    const defaultTask = new Task(
        'Example',
        'Default description',
        false,
        LEVELS.NORMAL
    )
    
    // Estado del componente
    const [tasks, setTasks] = useState(defaultTask)

    // Control del ciclo de vida del componente
    useEffect(() => {
      console.log('Task State has been modified')
    
      return () => {
        console.log('TaskList Component will be unmount')
      }
    }, [tasks])
    

    const changeCompleted = (id) => {
        console.log('TODO: Cambiar estado de una tarea', id)
    }

    return (
        <div>
            <h1>Tareas:</h1>
            { 
                tasks.map(task => (
                    <TaskComponent task={task}></TaskComponent>
                ))
            }
        </div>
    )
}

TaskListComponent.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.instanceOf(Task)) 
}

export default TaskListComponent