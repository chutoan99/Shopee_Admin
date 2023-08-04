import { Component, OnInit, Inject } from '@angular/core';

import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  isWide: boolean = false;
  menuLinks: string[] = ['Apps', 'Your work', 'Discover', 'Market'];
  isLightMode: boolean = false;

  toggleLightMode() {
    this.document.body.classList.toggle('light-mode');
  }
  onFocus() {
    this.isWide = true;
  }

  onBlur() {
    this.isWide = false;
  }
  constructor(@Inject(DOCUMENT) private document: Document) {}
  ngOnInit(): void {}
}
