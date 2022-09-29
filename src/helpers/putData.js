const putData = async (task) => {
  const editTask = { ...task, check: !task.check }
  const param = {
    method: "PUT",
    body: JSON.stringify(editTask),
    headers: { "Content-type": "application/json" },
  };
  try {
    const res = await fetch(
      `http://localhost:3000/tasks/${editTask.id}`,
      param
    );
    if (!res.ok) throw res;
  } catch (err) {
    const messagge = `error ${err.status}, ${err.statusText}`;
    return messagge
  }
};
export default putData;