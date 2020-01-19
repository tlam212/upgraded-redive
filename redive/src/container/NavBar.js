import React from 'react'
import Logo from '../presentation/Logo'
import AccountControls from '../presentation/AccountControls'



class NavBar extends React.Component{
  render(){
    return(
      <div className="navbar navbar-expand-lg " style={{background: "white"}}>
        <Logo />
        <AccountControls user={this.props.user}/>
      </div>
    )
  }
}
export default NavBar
