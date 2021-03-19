// Write your "actions" router here!
const router = require('express').Router();
const Actions = require("./actions-model.js");

router.get("/", async (req, res, next) => {
  try {
    const action = await Actions.get();
    res.status(200).json(action);
  } catch (err) {
    next({ error: err, message: `error retrieving user`, status: 500 });
  }
});
