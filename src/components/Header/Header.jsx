import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import UserProfile from "../UserProfile/UserProfile";
import { useNavigate, Link } from "react-router-dom";

const Header = ({isFromResult}) => {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleHistoryClick = () => {
    navigate("/history");
  };

  const handleSettingsClick = () => {
    console.log("Settings clicked");
  };

  return (
    <header>
      <div className="nav-left">
        <Link to={!isFromResult ? "/" : "/linguo-mt"} className="back-to-main">
          <i className="fas fa-arrow-left"></i> DS4H-ICTU
        </Link>
      </div>
      <div className="nav-right">
        <button className="history-btn" onClick={handleHistoryClick}>
          <i className="fas fa-history"></i>
        </button>
        <button className="settings-btn" onClick={handleSettingsClick}>
          <i className="fas fa-cog"></i>
        </button>

        <div className="auth-container">
          {!isLoggedIn ? (
            <Link to="/auth/login" id="login-link">
              <button className="login-btn">Log in</button>
            </Link>
          ) : (
            <UserProfile />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
