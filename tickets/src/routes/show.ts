import { NotFoundError } from '@sgtickets-sweeptic/common';
import express, { Request, Response } from 'express';
import { Ticket } from '../models/ticket';

const router = express.Router();

router.get('/api/tickets/:id', async (req: Request, res: Response) => {
  // const { title, price } = req.body;

  const ticket = await Ticket.findById(req.params.id);
  if (!ticket) {
    throw new NotFoundError();
  }
});

export { router as showTicketRouter };

/*
import { requireAuth, validateRequest } from '@sgtickets-sweeptic/common';
import { body } from 'express-validator';


router.post(
  '/api/tickets',
  requireAuth,

  [body('title').not().isEmpty().withMessage('Title is required')],
  [
    body('price')
      .isFloat({ gt: 0 })
      .withMessage('Price must be greater than 0'),
  ],

  validateRequest,

  async (req: Request, res: Response) => {
    const { title, price } = req.body;

    const ticket = Ticket.build({
      title,
      price,
      userId: req.currentUser!.id,
    });

    await ticket.save();

    res.status(201).send(ticket);
  }
);

export { router as createTicketRouter };
*/
