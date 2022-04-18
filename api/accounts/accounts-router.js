const router = require("express").Router();

router.get("/", (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json("get accounts");
  } catch (error) {
    next(error);
  }
});

router.get("/:id", (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json("get accounts by id");
  } catch (error) {
    next(error);
  }
});

router.post("/", (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json("post accounts");
  } catch (error) {
    next(error);
  }
});

router.put("/:id", (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json("update accounts");
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", (req, res, next) => {
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
