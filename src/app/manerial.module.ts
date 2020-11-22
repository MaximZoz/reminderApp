import { NgModule } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  exports: [MatProgressBarModule, MatInputModule],
  imports: [MatProgressBarModule, MatInputModule],
})
export class MaterialModule {}
