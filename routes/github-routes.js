import express from "express";
import githubController from "../controllers/github-controller.js";

const router = express.Router();

router.route("/github").get(githubController.getGithubActivity);

router.route("/github/:repoName").get(githubController.getRepoDetails);

router.route("/github/:repoName/issues").post(githubController.createIssue);

export default router;
// handled entry points now time to test this api
// accessing these routers in app.js file
