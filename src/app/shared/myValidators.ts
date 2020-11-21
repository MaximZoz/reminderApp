import { FormControl } from '@angular/forms';
export class MyValidators {
  static restrictedNote(control: FormControl): { [key: string]: boolean } {
    if (JSON.parse(localStorage.getItem('note')).includes(control.value)) {
      return { restrictedNote: true };
    }
    return null;
  }

  //   static restrictedDate(control: FormControl): { [key: string]: boolean } {
  //     if (new Date().toString() > control.value) {
  //       return { restrictedDate: true };
  //     }
  //     return null;
  //   }
}
