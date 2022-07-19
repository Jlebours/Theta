import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'containsTemplateAndDir'})
export class ContainsTemplateAndDirPipe implements PipeTransform {
  transform(confs: any[], template: string, dir: string): any[] {
    var filteredConfs: any[] = []
    for (const conf of confs) {
      if (conf.template === template && conf.dir === dir) {
        filteredConfs.push(conf)
      }
    }
    return filteredConfs;
  }
}
