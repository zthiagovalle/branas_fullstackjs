import DomainEvent from "../events/DomainEvent";

export default class BaseEntity {
  callbacks: { eventName: string, callBack: Function }[];

  constructor() {
    this.callbacks = [];
  }

  on(eventName: string, callBack: Function) {
    this.callbacks.push({ eventName, callBack });
  }

  publish(event: DomainEvent) {
    for (const callBack of this.callbacks) {
      if (callBack.eventName === event.name) {
        callBack.callBack(event);
      }
    }
  }
}