import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightBar/Rightbar';
import "./profile.css";

export default function Profile(){
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <>
        <Topbar/>
        <div className="profile">
        <Rightbar profile/>
        
        <div className='profileRight'>
            <div className="profileRt">
                <div className="profileCover">
                <img className='profileCoverImg' src={`${PF}post/2.jpeg`} alt="" />
                <img className='profileUserImg' src={`${PF}person/1.jpeg`} alt="" />
                </div>
                <div className="profileInfo">
                    <h4 className='profileInfoName'>Naneeta</h4>
                    <span className="profileInfoDesc">Hello My Friends!</span>
                </div>
            </div>
            <div className="profileRb">
        <Feed/>
        <Sidebar/>
        </div>
        </div>
        </div>
    </>
    );
}