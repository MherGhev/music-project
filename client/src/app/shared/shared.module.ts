import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongcardComponent } from './songcard/songcard.component';



@NgModule({
  declarations: [
    SongcardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SongcardComponent
  ]
})
export class SharedModule { }
