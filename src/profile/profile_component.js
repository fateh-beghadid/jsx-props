import React from "react"
import PropTypes from "prop-types";

 const profileComponent = ({fullName, bio, Profession, handleName,children}) =>{
     
  
  const styleProfile = {
    color: '#43658b', display: 'flex', margin: "40px 60px",
    justifyItems: 'center', textAlign: 'start'
}

      const handleAlert = e => {

        handleName(fullName) ;
    } 
     
      return( 
        <div style={styleProfile}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', justifyItems: 'center', textAlign: 'center' }}>
            <div> {children}</div>
            <div>
                <button onClick={handleAlert} style={{ width: '50%', height: '30px', border: 'solid 2px', borderRadius: '3px', fontSize: '12' }} >
                    Alert
                </button>
            </div>
        </div>
        <div style={{ margin: '20px 50px' }} >
            <h1>{fullName}</h1>

            <h4>{Profession}</h4>

            <span>{bio}</span>
        </div>
    </div>
)
}
  profileComponent.defaultProps={
      fullName:"beghadid fateh",
      bio:"I/m a full stack js developer",
      Profession:"student",
  };


  profileComponent.propTypes = {
    bio: PropTypes.string,
    fullName: PropTypes.string,
    profession: PropTypes.string,
    children: PropTypes.any,
    onClick: PropTypes.func
}


export default profileComponent;