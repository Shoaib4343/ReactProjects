const todoKey = "todoKey"
export const getLocalData = ()=>{
  const rawTodo = localStorage.getItem(todoKey)
  if(!rawTodo) return [];
  return JSON.parse(rawTodo)
}

export const setLocalData = (task)=>{
  localStorage.setItem(todoKey,JSON.stringify(task))
}