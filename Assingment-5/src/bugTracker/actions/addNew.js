import bugApi from '../services/bugApi';
// let currentBugId = 0;

export async function addNew(bugName) {
  const newBug = {
    id: 0,
    name: bugName,
    isClosed: false,
    createdAt: new Date()
  };
  const bug = await bugApi.save(newBug);
  const action = { type: "BUG_ADD_NEW", payload: bug };
  return action;
}