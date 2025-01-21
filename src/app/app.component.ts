import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'passwordGenerator';

  useLetters = false;
  useNumbers = false;
  useSymbols = false;

  changeUseLetters(){
    this.useLetters = !this.useLetters;
  }
  changeUseNumbers(){
    this.useNumbers = !this.useNumbers;
  }
  changeUseSymbols(){
    this.useSymbols = !this.useSymbols;
  }

  generatedPassword = '';

  onButtonClick(){
    this.generatedPassword="generated password";
  }
  
}
