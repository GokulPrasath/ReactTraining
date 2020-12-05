let currentBugId = 0;

export function addNew(bugName,projectName) {
  const newBug = {
    id: ++currentBugId,
    name: bugName,
    isClosed: false,
    createdAt: new Date(),
    proj : projectName
  };
  const action = { type: "BUG_ADD_NEW", payload: newBug };
  return action;
}