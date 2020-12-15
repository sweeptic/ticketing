import { Message } from 'node-nats-streaming';
import {
  TicketCreatedEvent,
  Listener,
  Subjects,
} from '@sgtickets-sweeptic/common';
import { Ticket } from '../models/ticket';
import { queueGroupName } from './queue-group-name';

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
  queueGroupName = queueGroupName;

  onMessage(data: TicketCreatedEvent['data'], msg: Message) {}
}
