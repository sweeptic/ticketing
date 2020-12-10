import nats, { Stan } from 'node-nats-streaming';

class NatsWrapper {
  private _client?: Stan; //? - tell ts this value may be undefined som period of time

  connect(clusterId: string, clientId: string, url: string) {
    this._client = nats.connect(clusterId, clientId, { url });

    return new Promise((resolve, reject) => {
      this._client!.on('connect', () => {
        console.log('Connected to NATS');
        resolve();
      });
      this._client!.on('error', err => {
        reject();
      });
    });
  }
}

export const natsWrapper = new NatsWrapper(); //exporting instance, not class ! thats why called singleton
