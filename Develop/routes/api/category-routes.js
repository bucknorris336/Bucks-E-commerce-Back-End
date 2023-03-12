const router = require("express").Router();
const { model } = require("../../config/connection");
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  try {
    const categoryData = await Catagory.findAll({
      // be sure to include its associated Products
      include: [
        {
          model: Category,
          atributes: ["category_name"],
        },
        {
          model: Tag,
          atributes: ["tag_name"],
        },
      ],
    });
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  try {
    const categoryData = await Product.findByPk(req.params.id, {
      // be sure to include its associated Products
      include: [
        {
          model: Category,
          atributes: ["category_name"],
        },
        {
          model: Tag,
          atributes: ["tag_name"],
        },
      ],
    });
    return res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create(req.body);
    return res.status(200).json(categoryData);
  } catch (err) {}
  res.status(400).json(err);
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
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    res
      .status(200)
      .json("A category has been removed from the database.", categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
