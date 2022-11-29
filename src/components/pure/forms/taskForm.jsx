// REACT
import React from 'react'
import { PropTypes } from 'prop-types';
// MODELS
import { Task } from './../../../models/task.class';
import { LEVELS } from './../../../models/levels.enum';

// Form
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Stle
import '../../../styles/taskForm.scss';

const TaskForm = ({ add, nTasks }) => {

    const taskSchema = Yup.object({
        name: Yup.string().required('Name is requiered'),
        description: Yup.string().required('Description is requiered'),
        level: Yup.string().oneOf(Object.values(LEVELS)).required('Level is requiered')
    })

    const voidTask = {
        name: '',
        description: '',
        level: LEVELS.NORMAL
    }

    const addTask = value => {
        const newTask = new Task(
            value.name,
            value.description,
            false,
            value.level
        )
        add(newTask)
    }

    return (
        <Formik
            initialValues={voidTask}
            validationSchema={taskSchema}
            onSubmit={(values, actions) => {
                addTask(values)
                actions.resetForm({values: voidTask})
            }}
        >
        {({isSubmitting, isValid, errors, touched}) => (
            <Form>
                <h4>Nueva Tarea</h4>
                <label htmlFor="name">Name</label>
                <Field type="text" name="name" />
                <ErrorMessage name="name" component="p" />

                <label htmlFor="description">Description</label>
                <Field type="text" name="description" />
                <ErrorMessage name="description" component="p" />

                <label htmlFor="level">Level</label>
                <Field as="select" name="level">
                     { Object.entries(LEVELS).map(([k,v]) => (
                         <option key={k} value={v}>{k}</option>
                     )) }
                </Field>
                <ErrorMessage name="level" component="p" />

                <button type="submit" disabled={!isValid || isSubmitting}>
                { nTasks ? 'Add new Task' : 'Create First Task'}
                </button>
            </Form>
        )}

        </Formik>
    )
}

TaskForm.propTypes = {
    add: PropTypes.func.isRequired,
    nTasks: PropTypes.number
}

export default TaskForm