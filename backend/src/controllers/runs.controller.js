import { runsService } from "../modules/runs/runs.service.js";

export const runsController = {
  // Generate a new test run from the provided request data.
  async generate(req, res, next) {
    try {
      const result = await runsService.generate(req.body);
      res.json(result);
    } catch (err) {
      next(err);
    }
  },

  // Generate a run using an existing specification.
  async generateFromSpec(req, res, next) {
    try {
      const result = await runsService.generateFromSpec(req.body);
      res.json(result);
    } catch (err) {
      next(err);
    }
  },

  // Update test cases associated with a run.
  async updateTestcases(req, res, next) {
    try {
      const result = await runsService.updateTestcases(req.body);
      res.json(result);
    } catch (err) {
      next(err);
    }
  },

  // Fetch the generated collection for a specific run.
  async getCollection(req, res, next) {
    try {
      const result = await runsService.getCollection(req.params.runId);
      res.json(result);
    } catch (err) {
      next(err);
    }
  },

  // Execute all test cases belonging to a run.
  async execute(req, res, next) {
    try {
      const result = await runsService.execute(req.params.runId);
      res.json(result);
    } catch (err) {
      next(err);
    }
  },

  // Execute a selected batch of test cases.
  async executeBatch(req, res, next) {
    try {
      const { runId } = req.params;
      const { batchIndex = 0, batchSize = 10 } = req.body;

      // Defaults allow callers to execute the first batch without
      // explicitly providing pagination parameters.
      const result = await runsService.executeBatch(runId, batchIndex, batchSize);
      res.json(result);
    } catch (err) {
      next(err);
    }
  },

  async getTestCount(req, res, next) {
    try {
      const result = await runsService.getTestCount(req.params.runId);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
};
