import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongcardComponent } from './songcard/songcard.component';
import { SongCardStyleDirective } from './song-card-style.directive';



@NgModule({
  declarations: [
    SongcardComponent,
    SongCardStyleDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SongcardComponent,
    SongCardStyleDirective
  ]
})
export class SharedModule { }
