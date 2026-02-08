const username = 'Sergei'
const isLoggedIn = false

const App = () => {
    let content

    if (isLoggedIn) {
        content = <p>Hi, {username}!</p>
    } else {
        content = <button>Log in</button>
    }

    return (
       <>
            <h1 className="title">To Do List</h1>
            <p>{isLoggedIn ? 'Hi, ${username}!' : 'Please log in'}</p>
            {isLoggedIn && <p>Hi, {username}</p>}
            {isLoggedIn ? <p>Hi, {username}!</p> : <button>Log in</button>}
            {content}
       </>
    )
}

export default App
