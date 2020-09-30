import { Publisher, Subjects, TicketUpdatedEvent } from '@poudel/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
