import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore'
import { useChatStore } from '../../lib/chatStore'
import { auth, db } from '../../lib/firebase'
import { useUserStore } from '../../lib/userStore'
import './detail.css'


const Detail = () => {
  const  { chatId, user, isCurrentUserBlocked, isRecieverBlocked, changeBlock } = useChatStore()
  const { currentUser } = useUserStore()


  const handleBlock = async () => {
      if(!user) return

      const userDocRef = doc(db, "users", currentUser.id)
      try {

        await updateDoc(userDocRef, {
            blocked: isRecieverBlocked ? arrayRemove(user.id) : arrayUnion(user.id)
        })
        changeBlock()
      } catch (err) {
        console.log(err)
      }
  }

  return (
    <div className='detail'>
      <div className="user">
        <img src={user?.avatar || "avatar.png"} alt="" />
        <h2>{user?.username}</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & Help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://images.pexels.com/photos/21371176/pexels-photo-21371176.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" />
              <span>Photo_2024_2.png</span> 
              </div>
             <img src="./download.png" alt="" className='icons'/>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://images.pexels.com/photos/21371176/pexels-photo-21371176.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" />
              <span>Photo_2024_2.png</span> 
              </div>
             <img src="./download.png" alt="" className='icons'/>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://images.pexels.com/photos/21371176/pexels-photo-21371176.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" />
              <span>Photo_2024_2.png</span> 
              </div>
             <img src="./download.png" alt="" className='icons'/>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://images.pexels.com/photos/21371176/pexels-photo-21371176.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" />
              <span>Photo_2024_2.png</span> 
              </div>
             <img src="./download.png" alt="" className='icons'/>
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button onClick={handleBlock}>
          {isCurrentUserBlocked
            ? "You are Blocked!"
            : isRecieverBlocked
            ? "User blocked"
            : "Block User"}
        </button>
        <button className='logout' onClick={() => auth.signOut()}>Log out</button>

      </div>
    </div>
  )
}

export default Detail
