import { ChangeDetectionStrategy, Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {} from '@fortawesome/angular-fontawesome'

@Component({
  selector: 'elewa-group-elewa-group-button',
  templateUrl: './elewa-group-button.component.html',
  styleUrls: ['./elewa-group-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ElewaGroupButtonComponent {
  public buttonText = 'Get this offer now';

  @Input()
	set text(name: string) {
		this.buttonText = name;
	}

	//@Input() set theme (mode: 'light' | 'dark') 
	get name(): string {
		return this.buttonText;
	}

	@Input() color = 'black';
	@Input() type = 'hover';
  @Output() btnClick = new EventEmitter();

  onClick() {
		this.btnClick.emit();
	}
}
