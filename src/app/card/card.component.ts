import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  elevatedUserView: boolean;
  enabled: boolean;
  @Input()
  cardId: string;
  frequency: string;
  buttonText: string;

  constructor() { }

  ngOnInit() {
    this.elevatedUserView = true;
    this.enabled = true;
    this.buttonText ="Hide";
  }

  updateStatus() {
    if (this.buttonText === 'Hide') {
      this.buttonText = 'Show';
    } else {
      this.buttonText = 'Hide';
    }
    this.enabled = !this.enabled;
  }

}
