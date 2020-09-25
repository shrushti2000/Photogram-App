import React,{useContext} from 'react';
import {UserContext} from '../App';
import {Link, useHistory} from 'react-router-dom';

export const Navbar = () => {
  const {state,dispatch}=useContext(UserContext)
  const history=useHistory()
  const renderList=()=>{
    if(state){
      return[
        <li><Link to="/profile">Profile</Link></li>,
        <li><Link to="/create">Create Post</Link></li>,
        <li><Link to="/myfollowingpost">My following Posts</Link></li>,
        
        <li><button className="btn waves-effect waves-light"
        
            onClick={()=>{localStorage.clear() 
                    dispatch({type:"CLEAR"})
                    history.push('/signin')}} >
                      Logout
        
        </button></li>
      ]

    }else{
      return[
        <li><Link to="/signin">Signin</Link></li>,
        <li><Link to="/signup">Signup</Link></li>
      ]

    }
  }
    return (
        
            <nav>
    <div class="nav-wrapper #80deea cyan lighten-3">
      <Link to={state ? "/":"/signin"} class="brand-logo left">Instagram</Link>
      <ul id="nav-mobile" class="right">
        {renderList()}
       
      </ul>
    </div>
  </nav>
        
    
    )
}
