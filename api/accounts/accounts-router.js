const router = require("express").Router();
const md = require("./accounts-middleware");

router.get("/", (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json("get accounts");
  } catch (error) {
    next(error);
  }
});

router.get("/:id", md.checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json("get accounts by id");
  } catch (error) {
    next(error);
  }
});

router.post(
  "/",
  md.checkAccountPayload,
  md.checkAccountNameUnique,
  (req, res, next) => {
    // DO YOUR MAGIC
    try {
      res.json("post accounts");
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  "/:id",
  md.checkAccountId,
  md.checkAccountPayload,
  md.checkAccountNameUnique,
  (req, res, next) => {
    // DO YOUR MAGIC
    try {
      res.json("update accounts");
    } catch (error) {
      next(error);
    }
  }
);

router.delete("/:id", md.checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json("delete accounts");
  } catch (error) {
    next(error);
  }
});

router.use((err, req, res, next) => {
  // eslint-disable-line
  // DO YOUR MAGIC
  res.status(err.status || 500).json({ message: err.message });
});

module.exports = router;
