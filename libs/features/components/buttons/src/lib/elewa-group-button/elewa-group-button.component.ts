import { ChangeDetectionStrategy, Component, OnInit, Input, Output, EventEmitter } from '@angular/core'; 

@Component({
  selector: 'elewa-group-elewa-group-button',
  templateUrl: './elewa-group-button.component.html',
  styleUrls: ['./elewa-group-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ElewaGroupButtonComponent {
  public buttonText = 'Learn More';

  @Input()
	set text(name: string) {
		this.buttonText = name;
	}
	get name(): string {
		return this.buttonText;
	}

	@Input() color = '0068B4';
	@Input() type = 'hover';
  @Output() btnClick = new EventEmitter();

  onClick() {
		this.btnClick.emit();
	}
}
