import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Button from "../Button";
import Input from "../Input";
import "./gitHubFindUserDetails.css";

const githubAPILink = process.env.REACT_APP_GITHUB_API_LINK;

const GitHubFindUserDetails = ({
  userName = "",
  setUserName = {},
  setUserDetails = {},
  isLoading = false,
  setUserDetailsLoading = {},
}) => {
  const findUser = async (e) => {
    e.preventDefault();
    if (!userName.trim()) {
      toast.error("Username should not be empty!");
      return;
    }
    setUserDetailsLoading(true);
    try {
      const { data = {} } = await axios.get(`${githubAPILink}/${userName}`);
      setUserDetails(data);
      setUserName("");
      toast.success("Users data fetched!");
    } catch (error) {
      if (error?.response?.status === 404) {
        toast.error("No users found");
      } else {
        toast.error(error.message);
      }
      setUserDetails({});
    } finally {
      setUserDetailsLoading(false);
    }
  };

  return (
    <form>
      <p>
        Welcome to our platform. Just type GiHub username in below input box and
        click Search button. Then you will get user details below...
      </p>
      <Input
        placeholder="Enter github username..."
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        autoFocus={true}
      />
      <Button name="Search" onClick={findUser} isLoading={isLoading} />
    </form>
  );
};
export default GitHubFindUserDetails;
