const App = () => {
    const tasks = [
        'Feed cat',
        'Make cofee',
        'Watch TV',
    ]
    return (
       <>
            <h1 className="title">To Do List</h1>
            <ul>
                {tasks.map((task) => <li key={task}>{task}</li>)}
            </ul>
       </>
    )
}

export default App
