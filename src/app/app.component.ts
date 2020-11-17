import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { swears, lesserSwears, deplorable } from '../assets/swears.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('mainInputForm', { static: true }) mainInputForm: NgForm;
  mainInputText = '';
  isObscene = false;
  isQuestionable = false;
  totalObsceneWordsFound = 0;
  silenced = false;
  willSilence = false;
  silenceCounter = 0; // Persist per account

  constructor() { }

  ngOnInit() {
    this.mainInputForm.form.valueChanges.subscribe(formData => {
      if (formData.mainInput) {
        const mainFormData = formData.mainInput.toLowerCase();
        this.checkObscene(mainFormData);
      }
    });
  }

  checkObscene(chatInput: string) {
    this.isObscene = false;
    this.isQuestionable = false;
    this.totalObsceneWordsFound = 0;

    if (chatInput.includes(deplorable)) {
      this.willSilence = true;
    } else {
      this.willSilence = false;
    }

    swears.forEach(word => {
      if (chatInput.includes(word)) {
        this.isObscene = true;
        this.totalObsceneWordsFound++;
        return;
      }
    });

    if (!this.isObscene) {
      this.checkQuestionable(chatInput);
    }
  }

  checkQuestionable(chatInput: string) {
    lesserSwears.forEach(word => {
      if (chatInput.includes(word)) {
        this.isQuestionable = true;
      }
    });
  }

  checkForSend(event: KeyboardEvent) {
    if (event.ctrlKey && event.key === 'Enter') {
      this.sendChatMessage();
    }
  }

  sendChatMessage() {
    if (this.totalObsceneWordsFound > 9 || this.willSilence) {
      this.silenced = true;
    }

    if (this.silenced) {
      this.silenceCounter++;
      this.silenceTimeout();
    }

    this.mainInputForm.reset();
  }

  silenceTimeout() {
    let silenceTimer = 3000;

    console.log(
      this.silenceCounter
    );

    if (this.silenceCounter < 9) {
      if (this.silenceCounter < 3) {
        silenceTimer == 3000
      } else {
        switch (this.silenceCounter) {
          case 3:
            silenceTimer = 5000;
            break;

          case 4:
            silenceTimer = 7500;
            break

          case 5:
            silenceTimer = 10000;
            break

          default:
            silenceTimer = 30000;
            break;
        }
      }
      setTimeout(() => this.liftSilence(), silenceTimer);
    } else {
      // ban
    }
    console.log(silenceTimer);

  }

  liftSilence() {
    this.silenced = false;
  }
}
