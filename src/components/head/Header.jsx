import "./Header.css";
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import TableRowsIcon from '@mui/icons-material/TableRows';

// import { Avatar } from '@mui/material';

const Header = ()=> {
   
    return (
        <div>
            <div className="container">
                <div className="left">
                <TableRowsIcon/>
                    <div className="container2">
                   <div className="logo"><YouTubeIcon/></div>
                   <div className="title">YouToube<sup>LK</sup></div>
                </div>
                </div>
                <div className="center">
                    <div className="search">
                    <input type="text" placeholder="serach" />
                    <div className="searchicon">< SearchIcon/> </div>
                    </div>
                    <div className="mic"><MicIcon/></div>
            
                </div>
                <div className="right">
               < VideoCallIcon/>
               <NotificationsNoneIcon/>
               <div className="profile"><img src="./images/avatar/profile1.jpg" alt="suthu" /></div>
                </div>
            </div>
        </div>
    );
};

export default Header;