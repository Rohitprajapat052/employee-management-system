import { useEffect, useState, useContext } from "react"
import Login from "./components/Auth/Login"
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import { AuthContext } from "./context/AuthProvider"




const App = () => {
   
  const [user,setUser] = useState(null)
  const [loggedInUserData, setloggedInUserData] = useState(null)
  const [userData, setUserData] = useContext(AuthContext)
 
   useEffect(() => {
   
               const loggedInUser = localStorage.getItem("loggedInUser")
          
               if(loggedInUser){
                
                 const userData = JSON.parse(loggedInUser)
                
                  setUser(userData.role)
                  setloggedInUserData(userData.data)
     }
    
   },[])
  

 

  const handleLogin = (email, password) => {3
     if(email == "admin@example.com" && password=='123'){
             setUser('admin')
             localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
            
     }else if(userData){
       const employee = userData.find((e)=>  email == e.email && password==e.password)
       if(employee){

         setUser('employee')
         setloggedInUserData(employee)
         localStorage.setItem('loggedInUser', JSON.stringify({role:'employee', data:employee}))
       }

          
     }
     else{
      alert("Invalid Credentials")
     }
       

  }
 
 

  useEffect(() => {
    setLocalStorage()
    getLocalStorage()

 }, [])

 const data = useContext(AuthContext)


  return (
    <>
      {!user ? <Login  handleLogin={handleLogin}/> :''}
       {user== 'admin' ? <AdminDashboard changeUser={setUser}         
       /> : (user == "employee" ? <EmployeeDashboard data={loggedInUserData} changeUser={setUser}/> : null )}
    </>
  )
}

export default App
