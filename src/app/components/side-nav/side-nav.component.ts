import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ListboxModule } from 'primeng/listbox';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [CommonModule, ProgressSpinnerModule, ListboxModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
  public isOpen = false;
  @Input() navType : string | undefined;
  @Input() chatBox : object[];

  constructor(){
    this.chatBox = []
  }

  public toggleSideNav(){
    this.isOpen = ! this.isOpen
    console.log(this.isOpen)
  }

}
