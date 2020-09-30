import { Subjects, Publisher, PaymentCreatedEvent } from '@poudel/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent>{
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
