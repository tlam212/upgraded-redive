import React from 'react';
import { Link } from 'react-router-dom'

const AccountControls = ({ user }) => {

  return (
    <div >
        <Link to="/" ><span className="topnav">Home</span></Link>
        {user && (
          <Link to="/collection">
          <span className="topnav">{user}'s collection</span>
          </Link>
        )}
        {!user && (
          <Link to="/login">
            <span className="topnav">Log in</span>
          </Link>
        )}
        {!user && (
          <Link  to="/signup">
            <span className="topnav">Sign up</span>
          </Link>
        )}
        {user && (
          <Link to="/">
            <span className="topnav">Log out</span>
          </Link>
        )}

    </div>
  )
}
export default AccountControls
