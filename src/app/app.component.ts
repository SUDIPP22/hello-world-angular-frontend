import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hello-world';
  imgUrl = '';
  url = '';
  userName: string = '';
  nameError: string = '';

  ngOnInit(): void {
    this.title = 'Hello From BridgeLabz';
    this.imgUrl = '../assets/BL_LOGO.jpg';
    this.url = 'https://www.bridgelabz.com';
  }
  onClick($event: Event) {
    console.log('Save button is clicked', $event);
    window.open(this.url, '_blank');
  }
  onInput($event: Event) {
    console.log('Change Event Occurred!');
    const nameRegex = RegExp('^[A-Z][a-zA-Z\\s]{2,}$');
    if (nameRegex.test(this.userName)) {
      this.nameError = '';
      return;
    }
    this.nameError = 'Name is Incorrect!';
  }
}
