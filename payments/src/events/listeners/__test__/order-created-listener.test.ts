import mongoose from 'mongoose';
import { OrderCreatedEvent, OrderStatus } from '@poudel/common';
import { natsWrapper } from '../../../nats-wrapper';
import { OrderCreatedListener } from '../order-created-listener';
import { Message } from 'node-nats-streaming';
import { Order } from '../../../models/order';

const setup = async () => {
  const listener = new OrderCreatedListener(natsWrapper.client);

  const data: OrderCreatedEvent['data'] = {
    id: mongoose.Types.ObjectId().toHexString(),
    version: 0,
    expiresAt: 'fsdfsd',
    userId: 'asdfs',
    status: OrderStatus.Created,
    ticket: {
      id: 'fsdfs',
      price: 10
    }
  };

  //@ts-ignore
  const msg: Message = {
    ack: jest.fn(),
  }
  
  return { listener, data, msg }
};

it('Replicates the order info', async () => {
  const { listener, data, msg } = await setup();

  await listener.onMessage(data, msg);

  const order = await Order.findById(data.id);

  expect(order!.price).toEqual(data.ticket.price);
});

it('Acks the message', async () => {
  const { listener, data, msg } = await setup();

  await listener.onMessage(data, msg);

  expect(msg.ack).toHaveBeenCalled();

});

