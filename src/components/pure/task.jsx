// React
import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
// Styles
import '../../styles/task.scss'
// Models
import { Task } from './../../models/task.class';
import { LEVELS } from '../../models/levels.enum';

const TaskComponent = ({task}) => {

    useEffect(() => {
        console.log('Created Task')
        return () => {
            console.log(`Task: ${task.name} will be unmount`)
        }
    }, [task])

    const taskCompletedIcon = () => {
        let cn = 'bi-toggle-'
        let color = ''
        if (task.completed) {
            cn += 'on'
            color = 'green'
        } else {
            cn += 'off'
            color = 'grey'
        }
        return (
            <i className={cn} style={{ color }}></i>
        )
    }
    const taskLevelBadge = () => {
        let cn = 'badge '

        switch (task.level) {
            case LEVELS.NORMAL: cn += 'bg-primary'; break;
            case LEVELS.URGENT: cn += 'bg-warning'; break;
            case LEVELS.BLOCKING: cn += 'bg-danger'; break;
            default: break;
        }

        return (
            <h6 className="mb-0">
                <span className={cn}>{task.level}</span>
            </h6>
        )
    }

    return (
        <tr className="fw-normal">
            <th>
                <span className="ms-2">{ task.name }</span>
            </th>
            <td className="align-middle">
                <span>{ task.description }</span>
            </td>
            <td className="align-middle">
                { taskLevelBadge() }
            </td>
            <td className="align-middle">
                { taskCompletedIcon() }
            </td>
        </tr>
    )
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
}

export default TaskComponent