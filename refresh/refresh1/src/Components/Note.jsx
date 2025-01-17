import PropTypes from "prop-types";

const Note = ({ notes }) => {
    return (
        <ul>
            {notes.map((note, index) => (
                <li key={index}>{note}</li>
            ))}
        </ul>
    );
};

Note.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.string).isRequired, // Expect an array of strings
};

export default Note;
