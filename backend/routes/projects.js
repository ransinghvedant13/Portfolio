import express from "express";
import { readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataPath = path.join(__dirname, "..", "data", "projects.json");

const router = express.Router();

// GET /api/projects - list all projects
// This reads from a JSON file today. To upgrade to a real CMS/database later,
// swap the readFile call below for a query to Postgres/Mongo - the route
// signature and response shape can stay exactly the same.
router.get("/", async (req, res) => {
  try {
    const raw = await readFile(dataPath, "utf-8");
    const projects = JSON.parse(raw);
    res.json(projects);
  } catch (err) {
    console.error("Failed to read projects:", err);
    res.status(500).json({ error: "Could not load projects." });
  }
});

// GET /api/projects/:id - single project
router.get("/:id", async (req, res) => {
  try {
    const raw = await readFile(dataPath, "utf-8");
    const projects = JSON.parse(raw);
    const project = projects.find((p) => p.id === req.params.id);
    if (!project) return res.status(404).json({ error: "Project not found." });
    res.json(project);
  } catch (err) {
    console.error("Failed to read project:", err);
    res.status(500).json({ error: "Could not load project." });
  }
});

export default router;
