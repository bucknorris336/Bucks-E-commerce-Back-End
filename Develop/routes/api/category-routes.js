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

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
      indivisualHooks: true,
    });
    // res.status(200).json("No category found with this id", categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// delete a category by its `id` value
router.delete("/:id", async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!categoryData) {
      res.status(404).json({ message: "No Category found with this id." });
    }

    res
      .status(200)
      .json("A category has been removed from the database.", categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
