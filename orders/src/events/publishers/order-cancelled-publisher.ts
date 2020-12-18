import {
  Subjects,
  Publisher,
  OrderCancelledEvent,
} from '@sgtickets-sweeptic/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
