import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

  export class LoginComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  
  login = {
    fName: '',
    lName: '',
    email: '',
    phne: '',
    passwrd: '',
  };

  //regex 
  firstNamePattern: string = '^[A-Za-z]+$';  
  lastNamePattern: string = '^[A-Za-z]+$'; 
  emailPattern: string = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$";  
  phonePattern: string = '^[0-9]{10}$'; 
  passwordPattern: string=  '^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$';



  onSubmit(form: any) {
    if (form.valid) {
      alert('Form submitted successfully');
      console.log(form);
      form.reset();
    } else {
    alert('Form is invalid');
    }
  }

  onlyNumbers(event: KeyboardEvent): void {
    const charCode = event.charCode;
    if (!(charCode >= 48 && charCode <= 57) && charCode !== 8) {
      event.preventDefault();  
    }
  }

  onlyLetters(event: KeyboardEvent): void {
    const charCode = event.charCode;
    if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 8)) {
      event.preventDefault();   
    }
  }
}
 
