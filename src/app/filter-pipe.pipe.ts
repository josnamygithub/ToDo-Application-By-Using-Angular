import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './_interfaces/todo';

@Pipe({
  name: 'filterPipe' 
})
export class FilterPipePipe implements PipeTransform { 

  transform(tasks: Todo[], searchText: string): Todo[] {
    if (!tasks) return [];
    if (!searchText) return tasks;
    searchText = searchText.toLowerCase();

    return tasks.filter((task: Todo) => {
      return task.name.toLowerCase().includes(searchText); 
    });
  }

}
