import {
  TicketUpdatedEvent,
  Publisher,
  Subjects,
} from '@sgtickets-sweeptic/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
