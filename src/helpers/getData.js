const getData = async () => {
  const res = await fetch("http://localhost:3000/tasks");
  const data = await res.json();
  return data
};
export default getData 