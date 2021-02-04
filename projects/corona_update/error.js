export class MyError extends Error {
    constructor(message) {
      super(message);
      this.name = this.constructor.name;
    }
}

export class NetworkError extends MyError {}