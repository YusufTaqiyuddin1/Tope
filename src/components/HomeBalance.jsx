import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const HomeBalance = () => {
  const IconLocation = () => {
    return (
      <>
        <img src={LocationOnOutlinedIcon} alt="feed" className="AppIcon" />
        {/* <span className="icon-text">Feed</span> */}
      </>
    );
  };

  return (
    <div className="home-balance">
        <div className="whiteSpace">
            
        </div>
      <div className="home-balance-address">
          {/* <IconLocation /> */}
          <h1>Location</h1>
      </div>
    </div>
  );
};

export default HomeBalance;
