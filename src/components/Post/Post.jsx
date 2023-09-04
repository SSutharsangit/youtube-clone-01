import './Post.css' ;
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Post = () => {
    return (
        <div>
            <div className="postcontainer">
               <div className="posttop">
               <img src="./images/game/game1.jpg" alt="photosssss"/>
               <div className="timeduration">2:50</div>
               </div>
               <div className="postcenter">
                <div className="logo">
                <img src="./images/avatar/profile4.jpg" alt="profile" />
                </div>
                <div className="titilecontainer">
                <div className="title">Hariharan Melody Hits Songs | Hariharan Hits </div>
                </div>
                
                <div className="setting" >< MoreVertIcon/></div>
               </div>
               <div className="postbottom">
                   <div className="channealname"> Tamil Music Center</div>
                   <div className="details">
                    <div className="viewcount">336k views.</div>
                    <div className="year">1 year ago</div>
                   </div>
               </div>

            </div>
        </div>
    );
};

export default Post;