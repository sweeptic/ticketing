import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from '@sgtickets-sweeptic/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
