import React from 'react'
import "./css/data.css";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ListIcon from '@mui/icons-material/List';
import InfoIcon from '@mui/icons-material/Info';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';function Data() {
  return (
    <div className="data">
        <div className="data__header">
            <div className="data__headerleft">
                <p>My Drive</p>
                <ArrowDropDownIcon />
            </div>

            <div className="data__headerright">
                <ListIcon />
                <InfoIcon />
            </div>

        </div>

        <div className="data__content">
            <div className="data_grid">
               <div className="data__file">
                   <InsertDriveFileIcon />
                   <p>File Name</p>
               </div>

               <div className="data__file">
                   <InsertDriveFileIcon />
                   <p>File Name</p>
               </div>

               <div className="data__file">
                   <InsertDriveFileIcon />
                   <p>File Name</p>
               </div>

            </div>

            <div className="data_list">
                <div className="detailsrow">
                    <p><b>Name<ArrowDownwardIcon /></b></p>
                    <p><b>Owner</b></p>
                    <p><b>Last Modified</b></p>
                    <p><b>File Size</b></p>
                </div>

                <div className="detailsrow">
                    <p>Name< InsertDriveFileIcon/></p>
                    <p>Me</p>
                    <p>Yesterday</p>
                    <p>1 GB</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Data