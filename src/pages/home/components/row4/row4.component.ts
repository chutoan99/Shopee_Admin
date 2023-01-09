import { Component } from '@angular/core';
import { applications } from 'src/utils/applications';

@Component({
  selector: 'app-row4',
  templateUrl: './row4.component.html',
  styleUrls: ['./row4.component.scss'],
})
export class Row4Component {
  applications = applications;
}
