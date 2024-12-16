import { createCustomerController } from "../controllers/createCustomer";
import { getCustomerController } from "../controllers/getCustomer";
import { getCustomersController } from "../controllers/getCustomers";
import express from "express";

const router = express.Router();

// GET route for fetching customers
router.get('/', getCustomersController);

// POST route for creating a customer
router.post('/', createCustomerController);


router.get('/:id', getCustomerController )
module.exports = router;
