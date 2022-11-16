const resetModel = require(`../../model/reset`);
module.exports = async (req, res) => {
  try {

    let total = 0;
    req.body.resetDetails.map((item) => {
      total += item.count * item.price;
    });
    const myReset = await resetModel.insertMany({
      restaurantId: req.body.id,
      amount: total,
      status:req.body.status,
      userId: req.userId,
      resetDetails: req.body.resetDetails,
    });
    res.status(201).json({ message: "now one reset ready" ,myReset});
  } catch (error) {
    res.status(500).json({ message: "catch error requesting an order reset" });
  }
};
