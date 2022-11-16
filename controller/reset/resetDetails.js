const resetModel = require(`../../model/reset`);
module.exports = async (req, res) => {
  try {
    const id = req.body.id;
    const resets = await resetModel.find({ userId: req.userId });
    resets.map((item) => {
      item.resetDetails.map((reset) => {
        if (id == reset._id) {
          res.status(201).json({ message: "reset ready details", reset });
        }
      });
    });
  } catch (error) {
    res.status(500).json({ message: "catch error requesting an order reset" });
  }
};
