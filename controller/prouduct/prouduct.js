const prouductModel = require(`../../model/prouducts`);

module.exports = async (req, res) => {
  try {
    const { productName, price } = req.body;
    await prouductModel.insertMany({productName, price});
    res.status(201).json({ message: "one product added" });
  } catch (error) {
    res.status(500).json({ message: "catch error in product" });
  }
};
