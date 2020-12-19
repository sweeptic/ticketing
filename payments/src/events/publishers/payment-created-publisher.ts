import {
  Subjects,
  Publisher,
  PaymentCreatedEvent,
} from '@sgtickets-sweeptic/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
