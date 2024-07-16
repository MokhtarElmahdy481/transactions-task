const useLocalhost = (key: string) => {
    const setItem = (item: string) => {
        localStorage.setItem(key, JSON.stringify(item))
    }
    const getItem = () => {
       return JSON.parse(localStorage.getItem(key)!)
    }
    const removeItem = () => {
       return localStorage.removeItem(key)
    }
    
  return ({
    setItem,getItem,removeItem
  })
}

export default useLocalhost