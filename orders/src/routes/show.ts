import express, { Request, Response } from 'express';
// import { Ticket } from '../models/ticket';

const router = express.Router();

router.get('/api/orders/:orderId', async (req: Request, res: Response) => {
  //   const tickets = await Ticket.find({});

  res.send({});
});

export { router as showOrderRouter };

// import { NotFoundError } from '@sgtickets-sweeptic/common';
// import express, { Request, Response } from 'express';
// import { Ticket } from '../models/ticket';

// const router = express.Router();

// router.get('/api/tickets/:id', async (req: Request, res: Response) => {
//   // const { title, price } = req.body;

//   const ticket = await Ticket.findById(req.params.id);
//   if (!ticket) {
//     throw new NotFoundError();
//   }
// });

// export { router as showTicketRouter };
