export class Device {
  constructor(
    public name: string,
    public vendor: string,
    public platform: string,
    public type: string,
    public os: string,
    public templates: Template[]
  ){}
}

export class Template{
  constructor(
    public name: string,
    public confDirectories: ConfDirectory[]
  ){}
}

export class ConfDirectory {
  constructor(
    public name: string,
    public files: string[]
  ){}
}
