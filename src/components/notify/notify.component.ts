import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.scss']
})
export class NotifyComponent {
  @Input() title: string =''
  @Input() content: string =''
  @Input() orderId: string =''
  @Input() type: string =''
  
}
