const deleteData = async (taskId) => {
  const param = {
    method: "DELETE",
    headers: { "Content-type": "application/json" },
  };
  try {
    const res = await fetch(`http://localhost:3000/tasks/${taskId}`, param);
    if (!res.ok) throw res;
  } catch (err) {
    const messagge = `error ${err.status}, ${err.statusText}`;
    return messagge
  }
};
export default deleteData;
