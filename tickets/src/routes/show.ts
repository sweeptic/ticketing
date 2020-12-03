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
