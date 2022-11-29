// REACT
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
// COMPONENTS
import TaskComponent from './../pure/task';
import TaskForm from '../pure/forms/taskForm';
// MODELS
import { Task } from './../../models/task.class';
import { LEVELS } from './../../models/levels.enum';

const TaskListComponent = () => {


    const defaultTasks = [
        new Task(
            'Example1',
            'Description 1',
            true,
            LEVELS.NORMAL
        ),
        new Task(
            'Example2',
            'Description 1',
            false,
            LEVELS.URGENT
        ),
        new Task(
            'Example3',
            'Description 3',
            false,
            LEVELS.BLOCKING
        )
    ]
    
    // Estado del componente
    const [tasks, setTasks] = useState([...defaultTasks])
    const [loading, setLoading] = useState(true)  

    // Control del ciclo de vida del componente
    useEffect(() => {
      console.log('Task State has been modified')
      setTimeout(() => setLoading(false), 1000)
      return () => {
        console.log('TaskList Component will be unmount')
      }
    }, [tasks])
    

    const completeTask = (task) => {
        console.log('Complete this Task:', task)
        const index = tasks.indexOf(task)
        const tempTasks = [...tasks]

        tempTasks[index].completed = !tempTasks[index].completed

        setTasks(tempTasks)
    }

    const removeTask = (task) => {
        console.log('Remove this Task:', task)
        const index = tasks.indexOf(task)
        const tempTasks = [...tasks]

        tempTasks.splice(index,1)

        setTasks(tempTasks)
    }

    const addTask = (task) => {
        setTasks([...tasks, task])
    }

    const taskActions = {
        complete: completeTask,
        remove: removeTask
    }

    return (
        <div>
            <div className="col-12">
                { loading
                    ? <p>Loading...</p>
                    : <div className="card">
                    <div className="card-header p-3">
                        <h5>Your Tasks:</h5>
                    </div>
                    <div className="card-body"
                        data-mdb-perfect-scrollbar="true"
                        style={{ position: 'relative' }}>

                        <table>
                            <thead>
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Level</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                            { 
                                tasks.map((task, index) => (
                                    <TaskComponent
                                        key={index}
                                        task={task}
                                        actions={taskActions}>
                                    </TaskComponent>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                    <hr />
                    <TaskForm add={addTask} nTasks={tasks.length}></TaskForm>
                </div>
                }
                
            </div>
        </div>
    )
}

TaskListComponent.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.instanceOf(Task)) 
}

export default TaskListComponent