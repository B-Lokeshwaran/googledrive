import React from 'react'
import "./css/header.css"
import SearchIcon from '@mui/icons-material/Search';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Header() {
  return (
    <div className="header">
        <div className="header__logo">
         <img src={require('./images/drivelogo.png')}alt="fixed" ></img>   
         <span>Drive</span>

        </div>
        <div className="header__search">
            <SearchIcon/>
            <input type="text" placeholder="search in drive"/>
            <FormatAlignCenterIcon />
        </div>
        <div className="header__icons">
            <span>
                <HelpOutlineIcon/>
                </span>
                <span>
                <SettingsIcon />
                </span>
                <span>
                <AppsIcon />
                <AccountCircleIcon/>
                </span>

            
        </div>
    </div>
  )
}

export default Header