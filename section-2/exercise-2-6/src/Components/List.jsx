const List = ({filterText, filteredSearch, persons}) => {
    return (
        <ul>
        {filterText ? 
          filteredSearch.map((person) => 
          <li key={person.id}>
            {person.name}: {person.number}
          </li>
        )
        : persons.map((person, index) => (
          <li key={index}>{person.name}: {person.number}</li>
        ))}
      </ul>
    )
}

export default List