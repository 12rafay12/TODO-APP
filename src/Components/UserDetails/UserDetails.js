import React ,{useState, useEffect} from 'react'
import axios from "axios";
import { useSelector } from "react-redux";

const UserDetails = () => {

  const userId = useSelector(
    (state) => state.users.userProfile.id
  );
  const [userDetails, setUserDetails] = useState(null)
  useEffect(()=>{
    axios
  .get(`https://dummyjson.com/users/${userId}`)
  .then(function (response) {
    
    setUserDetails(response?.data)
    
  })
  .catch(function (error) {
   
    // alert("No user exists right now!");
  });

  })
  
  return (
    <div >
        <h1 >User Details</h1>
        {userDetails && (
        <ul>
         
          <li>
            <strong>UserName: </strong>{userDetails.firstName+" "+userDetails.maidenName+" "+userDetails.lastName}
          </li>
          <li>
            <strong>Age: </strong>{userDetails.age}
          </li>
          <li>
            <strong>Gender: </strong>{userDetails.gender}
          </li>
          <li>
            <strong>Phone Number: </strong>{userDetails.phone}
          </li>
          <li>
            <strong>City: </strong>{userDetails.address.city}
          </li>
          <li>
            <strong>Company Address: </strong>{userDetails.company.address.address+" , "+userDetails.company.address.city}
          </li>
          
            PostalCode:{userDetails.company.address.postalCode},
            State:{userDetails.company.address.state}
          
        </ul>
      )}

      
    </div>
  )
}

export default UserDetails
