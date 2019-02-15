import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  TemplateRef,
  OnInit,
  HostBinding,
} from '@angular/core';
import { InputBoolean } from '../util/convert';
import { isTemplateRef } from '../util/check';

@Component({
  selector: 'ngl-pill',
  templateUrl: './pill.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.slds-pill]': 'true',
  },
})
export class NglPill implements OnInit {
  isTemplateRef = isTemplateRef;
  canRemove: boolean;

  /**
	 * NglIcon component or iconName to show on the left of the pill.
	 */
  @Input() icon: string | TemplateRef<void>;
  /**
	 * NglAvatar component or src to show on the left of the pill.
	 */
  @Input() avatar: string | TemplateRef<void>;
  /**
	 * Applies the error style to the component.
	 */
  @Input() @InputBoolean() @HostBinding('class.slds-has-error') hasError = false;
  /**
	 * Whether or not to override the remove button's visibility, if `remove` is set.
	 */
  @Input() @InputBoolean() removable = true;
  /**
	 * Remove button title (and assistive text).
	 */
  @Input() removeTitle = 'Remove';
  /**
	 * The event emitted when the remove button is clicked.
	 */
  @Output() remove = new EventEmitter<MouseEvent>();

  @HostBinding('class.slds-pill_link') linked = false;

  ngOnInit() {
    this.canRemove = this.remove.observers.length > 0;
  }

  onRemove(e: MouseEvent) {
    this.remove.emit(e);
  }

  get pillIcon() {
    return this.icon || this.avatar;
  }
}
