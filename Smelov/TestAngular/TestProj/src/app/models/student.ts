export class Student {
  constructor(id: number, name: string, spec: string, group: number, syear: number) {
    this.id = id;
    this.name = name;
    this.syear = syear;
    this.group = group;
    this.spec = spec;
  }

  id: number;
  name: string;
  spec: string;
  group: number;
  syear: number;
}
