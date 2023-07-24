import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
    name:'filter',
})
export class FilterPipe implements PipeTransform {
    transform(listSubject:string[],filter:string):string[] {
        if (!filter) return listSubject;
        filter = filter.toLowerCase();
        return  listSubject.filter((subject) => subject.toLowerCase().includes(filter));
    }
}