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
  generatedPassword = '';
  passwordLength = 0;
  passLength(length: string){
    this.passwordLength = parseInt(length);
  }
  changeUseLetters(){
    this.useLetters = !this.useLetters;
  }
  changeUseNumbers(){
    this.useNumbers = !this.useNumbers;
  }
  changeUseSymbols(){
    this.useSymbols = !this.useSymbols;
  }

  generate(){
    let letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let numbers = '0123456789';
    let symbols = '!@#$%^&*()_+';

    let validChars = '';
    if(this.useLetters){
      validChars += letters;
    }
    if(this.useNumbers){
      validChars += numbers;
    }
    if(this.useSymbols){
      validChars += symbols;
    }
    if(validChars == ''){
      this.generatedPassword = "Please select at least one character type";
      return;
    }

    if(this.passwordLength == 0){
      this.generatedPassword = "Please enter a password length";
      return;
    }
    let generatedPassword = '';
    for(let i=0; i<this.passwordLength; i++){
      let index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.generatedPassword = generatedPassword;
  }

  

  
  
}
