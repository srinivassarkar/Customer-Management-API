const express = require("express");
const app = express();
const connectToDatabase = require("./db");
const Customer = require("./Models/Customer");

app.use(express.json());
connectToDatabase();

app.get("/", (req, res) => {
  res.json("Hey! Customer Management API here 🙋‍♂️");
});

//GET

app.get("/customers", async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(201).json(customers);
  } catch (error) {
    console.error("Error creating customer:", error);
    res.status(500).json({ error: "Internal Server Error!" });
  }
});

//POST -> CREATE

app.post("/customer", async (req, res) => {
  try {
    const { firstName, lastName, age, gender, email } = req.body;
    const customer = new Customer({ firstName, lastName, age, gender, email });
    const savedCustomer = await customer.save();
    res.status(201).json(savedCustomer);
    console.log("New Customer Added!");
  } catch (error) {
    console.error("Error creating customer:", error);
    res.status(500).json({ error: "Internal Server Error!" });
  }
});

app.get("/customer/:id", async (req, res) => {
  try {
    const customerById = req.params.id;
    const foundById = await Customer.findById(customerById);

    if (!foundById)
      return res.status(404).json("No user is connected to this ID");
    else res.status(200).json(foundById);
  } catch (error) {
    console.log("Error getting this user ID", error);
    res.status(500).json({ error: "Internal server error!" });
  }
});

//PUT -> UPDATE

app.put("/customer/:id", async (req, res) => {
  try {
    const customerID = req.params.id;
    const updateData = req.body;

    const updatedCustomer = await Customer.findByIdAndUpdate(
      customerID,
      updateData,
      { new: true }
    );
    if (!updatedCustomer) {
      res
        .status(404)
        .json({ error: "No customer with the given ID was found." });
    }
    res.status(201).json(updatedCustomer);
    console.log("updated customer data!");
  } catch (error) {
    console.error("Error creating customer:", error);
    res.status(500).json({ error: "Internal Server Error!" });
  }
});

// DELETE  -> DESTROY/REMOVE
app.delete("/customer/:id", async (req, res) => {
  try {
    const customerID = req.params.id;
    await Customer.findByIdAndDelete(customerID);
    console.log("Deleted customer successfully!");
    res.status(204)
  } catch (error) {
    console.error("Error deleting customer:", error);
    res.status(500).json({ error: "Internal Server Error!" });
  }
});

app.listen(3000, () => {
  console.log("Server started at port 3000🚀");
});
