import { Publisher, OrderCreatedEvent, Subjects } from '@poudel/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
