import {
  TicketCreatedEvent,
  Publisher,
  Subjects,
} from '@sgtickets-sweeptic/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
