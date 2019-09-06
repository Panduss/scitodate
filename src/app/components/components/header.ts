import { Component, Input } from '@angular/core';

@Component({
    selector: 'custom-header',
    templateUrl: '../../templates/components/header.html',
})
class Header {
    @Input() public title?: string;
    @Input() public hasBackbutton?: boolean;
}

export { Header as HeaderComponent };
