import {
  Publisher,
  OrderCreatedEvent,
  Subjects,
} from '@sgtickets-sweeptic/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
