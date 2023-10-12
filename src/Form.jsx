
import React, { useRef, useState } from 'react';

function Student() {
  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const courseRef = useRef(null);

  const [studentName, setStudentName] = useState('');
  const [studentAge, setStudentAge] = useState('');
  const [studentCourse, setStudentCourse] = useState('');

  const handleAddStudent = () => {
    const name = nameRef.current.value;
    const age = ageRef.current.value;
    const course = courseRef.current.value;

    setStudentName(name);
    setStudentAge(age);
    setStudentCourse(course);

   
    nameRef.current.value = '';
    ageRef.current.value = '';
    courseRef.current.value = '';
  };

  return (
    <div>
      <h1>Student Details</h1>
      <div>
        <input type="text" ref={nameRef} placeholder='name'/>
      </div>
      <div>
        <input type="number" ref={ageRef} placeholder='age'/>
      </div>
      <div>
        <input type="text" ref={courseRef} placeholder='course' />
      </div>
      <button onClick={handleAddStudent}>Add Student</button>
      <div>
        <p>Name: {studentName}</p>
        <p>Age: {studentAge}</p>
        <p>Course: {studentCourse}</p>
      </div>
    </div>
  );
}

export default Student;
