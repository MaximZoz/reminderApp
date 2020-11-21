import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [HttpClientModule, ReactiveFormsModule],
  exports: [HttpClientModule],
})
export class SharedModule {}
