const Hello = ({name, age}) => {
    const bornYear = () => new Date().getFullYear() - age

    return (
        <div>
            <p>
                Hello {name}, you are {age}
            </p>
            <p>You were maybe born in {bornYear()}</p>
        </div>
    )
 }

 const App2 = () => {
    const name = "Sean"
    const age = 10

    return(
        <div>
            <h1>Greetings</h1>
            <Hello name="Maya" age={25+6} />
            <Hello name={name} age={age} />
        </div>
    )
 }

 export default App2