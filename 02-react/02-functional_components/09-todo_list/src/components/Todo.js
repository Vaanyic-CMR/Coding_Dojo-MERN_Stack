import React, { useState } from 'react'
import './Todo.css'

function Todo() {
    const [ tasks, setTasks ] = useState([]);

    const [ value, setValue ] = useState("");

    function addTask(e) {
        e.preventDefault();
        setTasks([ ...tasks, { value: value, complete: false } ]);
        setValue("");
    }
    function removeTask(e) {
        e.preventDefault();
        setTasks( tasks.filter( (_task, index) => e.target.children[2].name != index ) )
    }
    function handleChange(e) {
        setTasks( tasks.map( (task, index) => {
            if( e.target.name == index ) { task.complete = e.target.checked }
            return task
        }))
    }

    return (
        <div>
            <form onSubmit={ addTask }>
                <input type="text" value={ value } onChange={ (e)=>setValue( e.target.value ) } className='value'/>
                <input type="submit" value="Add" className='btn btn-add'/>
            </form>
            { tasks.map( ( task, index ) => (
                <form onSubmit={ removeTask }>
                    { task.complete?
                        <label className='complete'>{ task.value }</label>
                        :<label className='todo'>{ task.value }</label> }
                    <input name={ index } type="checkbox" onChange={ handleChange } checked={ task.complete }/>
                    <input name={ index } type="submit" value="Delete" className='btn btn-delete'/>
                </form>
            )) }
        </div>
    );
}
export default Todo;