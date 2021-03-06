import { useState } from 'react';
const BugEdit = ({ addNew ,projects}) => {
  const [newBugName, setNewBugName] = useState("");
  const [projectvalue,setProjectvalue] = useState("");
  return (
    <section className="edit">
      <label htmlFor="">Bug Name :</label>
      <input type="text" onChange={evt => setNewBugName(evt.target.value)} />
      <label htmlFor="">Project:</label>
      <select name="" id="" value = {projectvalue} onChange={(e) => setProjectvalue(e.target.value)}>
        { projects.map(project => (<option key={project.id} value={project.name}>{project.name}</option>))
        }
    </select>
      <input type="button" value="Add New" onClick={() => addNew(newBugName,projectvalue)} />

    </section>
  );
};

export default BugEdit;