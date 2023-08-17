export const DescrUserProfile = ({user: {username,tag,location,avatar}}) => {
    return  (
     <div>
            <img
            src={avatar}
            height='300'
      alt="User avatar"
      className="avatar"
        />
                <p className="name">{username}</p>
                <p className="tag">{tag}</p>
                <p className="location">{location}</p>  
     </div>
        )

}