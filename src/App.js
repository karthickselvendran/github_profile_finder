import React, { useState } from "react";
import GitHubFindUserDetails from "./components/GitHubFindUserDetails";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [userName, setUserName] = useState("");
  const [userDetails, setUserDetails] = useState({});
  const [userDetailsLoading, setUserDetailsLoading] = useState(false);

  return (
    <div>
      <ToastContainer autoClose={2000} />
      <Header title="Github Profile Finder" />
      <div className="container">
        <GitHubFindUserDetails
          userName={userName}
          setUserName={setUserName}
          setUserDetails={setUserDetails}
          isLoading={userDetailsLoading}
          setUserDetailsLoading={setUserDetailsLoading}
        />
        {userDetails && Object.keys(userDetails)?.length ? (
          <UserProfile userDetails={userDetails} />
        ) : null}
      </div>
    </div>
  );
}

export default App;
