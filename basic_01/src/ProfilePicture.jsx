import React from "react";

const ProfilePicture = () => {
  const handleClick = (e) => (e.target.style.display = "none");

  const imageUrl = "./public/img-3.jpg";

  return <img onClick={(e) => handleClick(e)} src={imageUrl} alt="#" />;
};

export default ProfilePicture;
