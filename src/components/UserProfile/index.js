import moment from "moment";
import React from "react";
import Button from "../Button";
import "./userProfile.css";

const UserProfile = ({ userDetails = {} }) => {
  console.log("userDetails  :: ", userDetails);
  const {
    avatar_url = "",
    name = "",
    blog = "",
    company = "",
    created_at = "",
    followers = "",
    following = "",
    location = "",
    public_repos = "",
    html_url = "",
  } = userDetails;

  const gotoProfile = (url) => {
    window.open(url);
  };

  return (
    <div className="userProfileCard">
      <div className="imageCard">
        <img src={avatar_url} alt="user_profile" height={"230"} />
        <Button name="View Profile" onClick={() => gotoProfile(html_url)} />
      </div>
      <div className="detailsCard">
        <div className="countsCardComponent">
          <span className="countsCard bgGreen">
            Public Repositories: {public_repos}
          </span>
          <span className="countsCard bgBlue">Followers: {followers}</span>
          <span className="countsCard bgViolet">Following: {following}</span>
        </div>
        <div className="detailsRow">
          <div>
            <span>
              <b>Username:</b> {name || "-"}
            </span>
          </div>
          <div>
            <span>
              <b>Company:</b> {company || "-"}
            </span>
          </div>
          <div>
            <span>
              <b>Website:</b>{" "}
              {blog ? (
                <a href={blog} target="_blank" rel="noreferrer">
                  {blog}
                </a>
              ) : (
                "-"
              )}
            </span>
          </div>
          <div>
            <span>
              <b>Location:</b> {location || "-"}
            </span>
          </div>
          <div>
            <span>
              <b>Member Since:</b>{" "}
              {created_at ? moment(created_at).format("MMM'DD YYYY") : "-"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserProfile;
