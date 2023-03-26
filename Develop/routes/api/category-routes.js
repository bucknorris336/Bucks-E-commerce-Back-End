const router = require("express").Router();
const { model } = require("../../config/connection");
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  try {
    const categoryData = await Category.findAll({
      // be sure to include its associated Products
      include: [Product],
      // {
      //   Product,
      //   attributes: ["id", "product_name", "price", "stock", "category_id"],
      // },
    });

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  try {
    const categoryData = await Category.findOne({
      where: { id: req.params.id },
      // be sure to include its associated Products
      include: [Product],
      // {
      //   Product,
      //   attributes: ["id", "product_name", "price", "stock", "category_id"],
      // },
    });
    if (!categoryData) {
      res.status(404).json({ message: "No Category by this id!" });
      return;
    }
    return res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new category
router.post("/", async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update a category by its `id` value
router.put("/:id", (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((categoryData) => res.status(200).json(categoryData))
    .catch((err) => res.status(400).json(err));
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  const category = await Category.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json(category);
});

module.exports = router;
