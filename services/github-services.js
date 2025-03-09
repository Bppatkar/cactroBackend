import axios from "axios";
import { GITHUB_USERNAME, GITHUB_TOKEN, GITHUB_API_URL } from "../config/constant.js";

// getting user data and repo data
const getUserData = async () => {
  const response = await axios.get(`${GITHUB_API_URL}/users/${GITHUB_USERNAME}`, {
    headers: { Authorization: `token ${GITHUB_TOKEN}` },
  });
  return response.data;
};

const getUserRepos = async () => {
  const response = await axios.get(`${GITHUB_API_URL}/users/${GITHUB_USERNAME}/repos`, {
    headers: { Authorization: `token ${GITHUB_TOKEN}` },
  });
  return response.data;
};

// repo details
const getRepoDetails = async (repoName) => {
  const response = await axios.get(`${GITHUB_API_URL}/repos/${GITHUB_USERNAME}/${repoName}`, {
    headers: { Authorization: `token ${GITHUB_TOKEN}` },
  });
  return response.data;
};

// if any error facing
const facingIssue = async (repoName, title, body) => {
  const response = await axios.post(
    `${GITHUB_API_URL}/repos/${GITHUB_USERNAME}/${repoName}/issues`,
    { title, body },
    { headers: { Authorization: `token ${GITHUB_TOKEN}` } }
  );
  return response.data;
};

export default {
  getUserData,
  getUserRepos,
  getRepoDetails,
  facingIssue,
};

// now going to controller where we will call these functions and handle logic
