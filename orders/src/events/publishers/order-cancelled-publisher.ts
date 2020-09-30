import { Subjects, Publisher, OrderCancelledEvent } from '@poudel/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
