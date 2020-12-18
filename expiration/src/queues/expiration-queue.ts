import Queue from 'bull';

interface Payload {
  orderId: string;
}

//define queue
const expirationQueue = new Queue<Payload>('order:expiration', {
  redis: {
    host: process.env.REDIS_HOST,
  },
});

//receive job
//code to process a job
expirationQueue.process(async job => {
  console.log(
    'I want to publish an expiration:complete event for orderId',
    job.data.orderId
  );
});

export { expirationQueue };
