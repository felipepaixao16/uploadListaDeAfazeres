import React, {useState, useEffect} from 'react'
import { link } from 'react-router-dom'
import api from '../../Services/api'

export default function Main() {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        api.get('/tasks')
        .then(res => {
            setTasks(res.data)
        })
        .catch(err => console.log('DEU RUIM: ', err))
    }, [])
    
    return (
        <h1>Suas Tarefas</h1>

        <hr/>

        <main>
            {
                tasks.map(tasks => {
                    return (
                        <div key={task._id}>
                            <h3>{task.title}</h3>
                            <div>
                                <link to={'/tasks/${task._id}'}>Ver mais!</link>
                            </div>
                        </div>
                    )
                })
            }
        </main>

        </div>
    )
}