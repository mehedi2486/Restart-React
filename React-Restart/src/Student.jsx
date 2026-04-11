import PropTypes from 'prop-types';

function Student(props){ //child
    return <div className="student">
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Student: {props.isStudent ? "YES" : "No"}</p>
    </div>

}

Student.PropTypes = {
    name : PropTypes.string,
    age : PropTypes.number,
    isStudent : PropTypes.bool

}

Student.defaultprops = {
    name : "admin",
    age : 18,
    isStudent:true
}


export default Student;