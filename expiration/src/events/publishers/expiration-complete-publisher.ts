import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@sgtickets-sweeptic/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
