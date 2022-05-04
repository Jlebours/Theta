export class Service {
  constructor(public name: string, public state: string){}
}

export class Configuration {
  constructor(public name: string, public service: string){}
}
