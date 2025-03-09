import githubServices from "../services/github-services.js";

// fetching github activity log
const getGithubActivity = async (req, res) => {
  try {
    const userData = await githubServices.getUserData();
    const repoData = await githubServices.getUserRepos();

    res.json({
      followers: userData.followers,
      following: userData.following,
      public_repos: userData.public_repos,
      repos: repoData.map((repo) => ({
        name: repo.name,
        description: repo.description,
        url: repo.html_url,
      })),
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch GitHub data" });
  }
};

// fetching repo details
const getRepoDetails = async (req, res) => {
  const { repoName } = req.params;
  try {
    const repoData = await githubServices.getRepoDetails(repoName);
    res.json({
      name: repoData.name,
      description: repoData.description,
      url: repoData.html_url,
      stars: repoData.stargazers_count,
      forks: repoData.forks_count,
      issues: repoData.open_issues_count,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch repo details" });
  }
};

// creating an issue
const createIssue = async (req, res) => {
  const { repoName } = req.params;
  const { title, body } = req.body;
  if (!title || !body)
    return res.status(400).json({ error: "Title and body are required" });

  try {
    const issueData = await githubServices.facingIssue(repoName, title, body);
    res.json({ url: issueData.html_url });
  } catch (error) {
    res.status(500).json({ error: "Failed to create issue" });
  }
};

export default { getGithubActivity, getRepoDetails, createIssue };

// finally handled all github api request logic now going to route folder for routing
