// React
import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
// Styles
import '../../styles/task.scss'
// Models
import { Task } from './../../models/task.class';

const TaskComponent = ({task}) => {

    useEffect(() => {
        console.log('Created Task')
        return () => {
            console.log(`Task: ${task.name} will be unmount`)
        }
    }, [task])

    return (
        <div>
            <h2 className="task-name">Name: { task.name }</h2>
            <h3>Description: { task.description }</h3>
            <h4>Level: { task.level }</h4>
            <h5>This task is: { task.completed ? 'COMPLETED' : 'PENDING' }</h5>
        </div>
    )
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
}

export default TaskComponent