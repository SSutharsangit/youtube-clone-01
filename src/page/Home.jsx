import React from 'react';
import Header from '../components/head/Header';
import Right from '../components/right/Right';
import Post from '../components/Post/Post';
import "./Home.css"
import Topbar from '../components/topbar/Topbar';
const home = () => {
    return (
        <div className='new'>
           <Header/>
           <div className="body">
           <Right />
           <div className="content">
           <Topbar/>
           <div className="posts">
             <Post/>
             <Post/>
             <Post/>
              <Post/>
            </div>
           </div>
           
           
           </div>
           
          
        
           </div>
            
    );
};

export default home;