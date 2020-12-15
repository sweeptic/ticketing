import { Message } from 'node-nats-streaming';

import {
  TicketCreatedEvent,
  Listener,
  Subjects,
} from '@sgtickets-sweeptic/common';
import { Ticket } from '../models/ticket';

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
  queueGroupName = 'orders-service';

  onMessage(data: TicketCreatedEvent['data'], msg: Message) {}
}
