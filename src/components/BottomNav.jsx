import * as React from "react";
import {useState} from 'react';
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

// import icon
import iconFeed from "../assets/navButton/iconFeed.png";
import iconHome from "../assets/navButton/IconHome.png";
import iconOfficial from "../assets/navButton/iconOfficial.png";
import iconTransaction from "../assets/navButton/iconTransaction.png";
import iconWishlist from "../assets/navButton/iconWishlist.png";

// import Iconhome from "./Iconhome.png";

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("favorite");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

// useEffect(() =>{
//     icons.map((icon) => 
//     <div key={icon.id}>
//         <img src={icon.src} />
//         <p>{icon.text}</p>
//     </div>)
// })

  const IconFeed = () => {
    return (
      <>
        <img src={iconFeed} alt="feed" className="AppIcon" />
        <span className="icon-text">Feed</span>
      </>
    );
  };

  const IconHome = () => {
    return (
      <>
        <img src={iconHome} alt="home" className="AppIcon" />
        <span className="icon-text">Home</span>
      </>
    );
  };

  const IconOfficial = () => {
    return (
      <>
        <img src={iconOfficial} alt="official" className="AppIcon" />
        <span className="icon-text">Official Store</span>
      </>
    );
  };

  const IconTransaction = () => {
    return (
      <>
        <img src={iconTransaction} alt="transaction" className="AppIcon" />
        <span className="icon-text">Transaction</span>
      </>
    );
  };

  const IconWishlist = () => {
    return (
      <>
        <img src={iconWishlist} alt="wishlist" className="AppIcon" />
        <span className="icon-text">Wishlist</span>
      </>
    );
  };

  return (
    <BottomNavigation
      className="navBottom"
      sx={{ width: 531 }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction value="home" icon={<IconHome />} />
      <BottomNavigationAction value="favorites" icon={<IconFeed />} />
      <BottomNavigationAction value="favorites" icon={<IconOfficial />} />
      <BottomNavigationAction value="folder" icon={<IconWishlist />} />
      <BottomNavigationAction value="nearby" icon={<IconTransaction />} />
    </BottomNavigation>
  );
}