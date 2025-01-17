const Form = ({inputValue, handleInputChange, handleSubmit}) =>{
    return(
        <form onSubmit={handleSubmit}>
          <input value={inputValue} onChange={handleInputChange} />
          <button type='submit'>Submit me</button>
        </form>
    )
}

export default Form