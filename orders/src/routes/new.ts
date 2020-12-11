import express, { Request, Response } from 'express';
import { requireAuth, validateRequest } from '@sgtickets-sweeptic/common';
import { body } from 'express-validator';
import mongoose from 'mongoose';

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
