import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

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

    if (chatInput.includes("fuck")) {
      this.isObscene = true;
    }

    if (!this.isObscene) {
      this.checkQuestionable(chatInput);
    }
  }

  checkQuestionable(chatInput: string) {
    if (chatInput.includes("butts")) {
      this.isQuestionable = true;
    }
  }

}
