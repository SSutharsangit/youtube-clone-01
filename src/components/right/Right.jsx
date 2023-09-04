import "./Right.css";
import { Avatar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MissedVideoCallIcon from '@mui/icons-material/MissedVideoCall';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CircleIcon from '@mui/icons-material/Circle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SettingsIcon from '@mui/icons-material/Settings';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';

const Right = () => {
    return (
        <div >
        <div className="container-items" >
            <div className="right-item">
                <div className="item-icon"><HomeIcon/></div>
                <div className="item-title">Home</div>
            </div>
            <div className="right-item">
                <div className="item-icon"><MissedVideoCallIcon/></div>
                <div className="item-title">Shorts</div>
            </div>
            <div className="right-item">
                <div className="item-icon">< SubscriptionsIcon/></div>
                <div className="item-title">Subscriptions</div>
            </div>
            <hr/>
            <div className="right-item">
                <div className="item-icon"><VideoLibraryIcon/></div>
                <div className="item-title">Library</div>
            </div>
            <div className="right-item">
                <div className="item-icon"><HistoryIcon/></div>
                <div className="item-title">History</div>
            </div>
            <div className="right-item">
                <div className="item-icon"><SlideshowIcon/></div>
                <div className="item-title">Your Videos</div>
            </div>
            <div className="right-item">
                <div className="item-icon"><WatchLaterIcon/></div>
                <div className="item-title">Watch later</div>
            </div>
            <div className="right-item">
                <div className="item-icon"><ThumbUpIcon/></div>
                <div className="item-title">Liked videos</div>
            </div>
            <hr />
            <p>Subscriptions</p>
            <div className="subscribers">
            <div className="right-item">
                <div className="item-icon"><Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /></div>
                <div className="item-title">suthu</div>
                <div className="isonline"><CircleIcon/></div>
            </div>
            <div className="right-item">
                <div className="item-icon"><Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /></div>
                <div className="item-title">suthu</div>
                <div className="isonline"><CircleIcon/></div>
            </div>
            <div className="right-item">
                <div className="item-icon"><Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /></div>
                <div className="item-title">suthu</div>
                <div className="isonline"><CircleIcon/></div>
            </div>
            <div className="right-item">
                <div className="item-icon"><Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /></div>
                <div className="item-title">suthu</div>
                <div className="isonline"><CircleIcon/></div>
            </div>
            <div className="right-item">
                <div className="item-icon"><Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /></div>
                <div className="item-title">suthu</div>
                <div className="isonline"><CircleIcon/></div>
            </div>
            <div className="right-item">
                <div className="item-icon"><Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /></div>
                <div className="item-title">suthu</div>
                <div className="isonline"><CircleIcon/></div>
            </div>
            <div className="right-item">
            <div className="item-icon"><ExpandMoreIcon/></div>
                <div className="item-title">show more 145</div>
            </div>
            <hr />
            <div className="explore">
                <p>Explore</p>
                <div className="right-item">
                <div className="item-icon"><WhatshotIcon/></div>
                <div className="item-title">Trending</div>
                </div>
                <div className="right-item">
                <div className="item-icon"><MusicNoteIcon/></div>
                <div className="item-title">Music</div>
                </div>
                <div className="right-item">
                <div className="item-icon"><SportsEsportsIcon/></div>
                <div className="item-title">Gaming</div>
                </div>
                <div className="right-item">
                <div className="item-icon"><EmojiEventsIcon/></div>
                <div className="item-title">Sports</div>
                </div>
            </div>
            <hr />
            <div className="more">
                <p>More From Youtube</p>
                <div className="right-item">
                <div className="item-icon">< YouTubeIcon/></div>
                <div className="item-title">YouTube Premium</div>
                </div>
                <div className="right-item">
                <div className="item-icon">< YouTubeIcon/></div>
                <div className="item-title">Youtube Studio</div>
                </div>
                <div className="right-item">
                <div className="item-icon">< YouTubeIcon/></div>
                <div className="item-title">Youtube Music</div>
                </div>
                <div className="right-item">
                <div className="item-icon">< YouTubeIcon/></div>
                <div className="item-title">Youtube Kids</div>
                </div>
            </div>
            <hr />
            <div className="other">
            <div className="right-item">
                <div className="item-icon"><SettingsIcon/></div>
                <div className="item-title">Settings</div>
                </div>
                <div className="right-item">
                <div className="item-icon"><OutlinedFlagIcon/></div>
                <div className="item-title">Report History</div>
                </div>
                <div className="right-item">
                <div className="item-icon"><  HelpOutlineOutlinedIcon/></div>
                <div className="item-title">Help</div>
                </div>
                <div className="right-item">
                <div className="item-icon"><FeedbackOutlinedIcon/></div>
                <div className="item-title">Send Feedback</div>
                </div>
            </div>
            <hr />
            <div className="discription">
                <p>AboutPressCopyrightContact usCreatorsAdvertiseDevelopers </p>
                 <p>TermsPrivacyPolicy & SafetyHow YouTube worksTest new features</p>
                 <div className="year">© 2023 Google LLC</div>
            </div>
    
            </div>
            </div>
            
        </div>
    
    );
};

export default Right;