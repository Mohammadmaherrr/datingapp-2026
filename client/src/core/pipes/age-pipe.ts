import { Pipe, PipeTransform } from '@angular/core';
import { Member } from '../../types/member';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {
  transform(value: string): number {
    const today = new Date();
    const dob = new Date(value);

    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - today.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())){
      age--;
    }
    return age;
}

}
