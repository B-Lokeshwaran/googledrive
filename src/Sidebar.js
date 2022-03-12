import React from 'react';
import "./css/sidebar.css";
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';
import DevicesIcon from '@mui/icons-material/Devices';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar_btn">
            <button>
              <div className="sidebar__logo">
            <img src={require('./images/plus.png')} alt="fixed" width="25" height="20"></img>
                <span>New</span>
                </div>
            </button>
        </div>
        <div className="sidebar_options">
        <div className="sidebar_option sidebar_option-Active">
            <MobileScreenShareIcon />
           <span><b>My Drive</b></span>
          </div>
        </div>

        <div className="sidebar_options">
        <div className="sidebar_option">
            <DevicesIcon />
           <span>computers</span>
          </div>
        </div>

        <div className="sidebar_options">
        <div className="sidebar_option">
            <PeopleAltIcon />
           <span>shared with me</span>
          </div>
        </div>

        <div className="sidebar_options">
        <div className="sidebar_option">
            <QueryBuilderIcon />
           <span>Recent</span>
          </div>
        </div>

        <div className="sidebar_options">
        <div className="sidebar_option">
            <StarBorderIcon />
           <span>Starred</span>
          </div>
        </div>

        <div className="sidebar_options">
        <div className="sidebar_option">
            <DeleteOutlineIcon />
           <span>Trash</span>
          </div>
        </div>

        <hr/>
        <div className="sidebar_options">
        <div className="sidebar_option">
            <CloudQueueIcon />
           <span>Storage</span>
          </div>
        </div>

        <div className="progress_bar">
            <progress size="tiny" value="35" max="100"/>
            <span>5.58 GB of 20 GB</span>
        </div>



    </div>
  )
}

export default Sidebar