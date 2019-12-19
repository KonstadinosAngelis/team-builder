import React, { useState } from 'react';
import './App.css';

import Members from './components/Members';
import MemberForm from './components/MemberForm'

function App() {
  const [member, setMember] = useState([
    {
      id: 1,
      name: "Konstadinos Angelis",
      email: "konstadinosangelis@gmail.com",
      role: "Front end developer"
  }]);
  
  const addNewMember = members => {
    const newMember = {
      id: Date.now(),
      name: members.name,
      email: members.email,
      role: members.role
    }
    setMember([...member, newMember])
  }

  return (
    <div className="App">
      <h1>Member List</h1>
      <MemberForm addNewMember = {addNewMember}/>
      <Members member = {member}/>
    </div>
  );
}

export default App;
