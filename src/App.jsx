const username = 'Sergei'

const App = () => {
    return (
        <div>
            <h1 className="title">To Do List</h1>
            <p style={{color: 'red', fontWeight: 700}}>Hi, {username}</p>
            <p>{1+1}</p>
            <p>{username.toUpperCase()}</p>
            <p>{new Date().toLocaleDateString()}</p>
            {/*comment inside jsx*/}
            <hr />
            <label htmlFor="email">Email:</label>
            <input type="email" required={true} />
            <input type="email" required />
        </div>
    )
}

export default App
