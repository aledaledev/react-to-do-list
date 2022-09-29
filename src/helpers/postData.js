import id from "../helpers/idGenerator";
const postData = async ({ title, description }) => {
  const newTask = {
    title,
    id: id(),
    description,
    check: false,
  };
  const param = {
    method: "POST",
    body: JSON.stringify(newTask),
    headers: { "Content-type": "application/json" },
  };
  try {
    const res = await fetch("http://localhost:3000/tasks", param);
    if (!res.ok) throw res;
  } catch (err) {
    const messagge = `error ${err.status}, ${err.statusText}`;
    return messagge
  }
};
export default postData;
