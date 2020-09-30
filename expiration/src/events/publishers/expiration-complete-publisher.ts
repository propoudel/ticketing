import { Subjects, Publisher, ExpirationCompleteEvent } from '@poudel/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent>{
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
  
}