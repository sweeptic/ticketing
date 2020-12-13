import express, { Request, Response } from 'express';
import {
  BadRequestError,
  NotFoundError,
  OrderStatus,
  requireAuth,
  validateRequest,
} from '@sgtickets-sweeptic/common';
import { body } from 'express-validator';
import mongoose from 'mongoose';
import { Ticket } from '../models/ticket';
import { Order } from '../models/order';

const router = express.Router();

router.post(
  '/api/orders',
  requireAuth,
  [
    body('ticketId')
      .not()
      .isEmpty()
      .custom((input: string) => mongoose.Types.ObjectId.isValid(input))
      .withMessage('TicketIdmust be provided'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { ticketId } = req.body;

    //find the ticket the user is typing to order in the database
    const ticket = await Ticket.findById(ticketId);
    if (!ticket) {
      throw new NotFoundError();
    }
    // Make sure that this ticket is not already reserved
    // Run query to look at all orders.  Find an order where the ticket
    // is the ticket we just found *and* the orders status is *not* cancelled.
    // If we find an order from that means the ticket *is* reserved

    if (existingOrder) {
      throw new BadRequestError('Ticket is already reserved');
    }

    //calculate an expiration date for this order

    //build the order and save it to the database

    //publish an event saying that an order was created

    res.send({});
  }
);

export { router as newOrderRouter };

// import { TicketCreatedPublisher } from '../events/publishers/ticket-created-publisher';
// import { Ticket } from '../models/ticket';
// import { natsWrapper } from '../nats-wrapper';

// const router = express.Router();

// router.post(
//   '/api/tickets',
//   requireAuth,

//   [
//     body('price')
//       .isFloat({ gt: 0 })
//       .withMessage('Price must be greater than 0'),
//   ],

//   validateRequest,

//   async (req: Request, res: Response) => {
//     const { title, price } = req.body;

//     const ticket = Ticket.build({
//       title,
//       price,
//       userId: req.currentUser!.id,
//     });

//     await ticket.save();

//     await new TicketCreatedPublisher(natsWrapper.client).publish({
//       id: ticket.id,
//       title: ticket.title,
//       price: ticket.price,
//       userId: ticket.userId,
//     });

//     res.status(201).send(ticket);
//   }
// );

// export { router as createTicketRouter };
