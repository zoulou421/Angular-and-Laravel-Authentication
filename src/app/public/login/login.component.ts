import { Component, OnInit , Injectable } from '@angular/core';
//import { FormGroup, FormBuilder }  from "@angular/forms";
import { FormBuilder, FormGroup , FormControl  } from '@angular/forms';
//import { Http } from '@angular/http';

// Import HttpClientModule from @angular/common/http in AppModule
import {HttpClientModule} from '@angular/common/http';
//in place where you wanted to use `HttpClient`
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})

@Injectable()

export class LoginComponent implements OnInit {


 form!: FormGroup;//form: FormGroup | undefined;

 email = new FormControl('');

  constructor(private fb:FormBuilder, private http: HttpClient ) {

   }

  ngOnInit(): void {
    this.form =this.fb.group({
      email: '',
      password: ''
    });
  }

  submit(){
    console.log(this.form.getRawValue());
    const formData= this.form.getRawValue();
    const data ={
      username: formData.email,
      password: formData.password,
      grant_type: 'client_credentials',
      client_id: 1,
      client_secret: 'kVB7a4VsUzXdLIc06reBG6oCC0rMnbQYYhvbfMMp',
      scope:'*'
    };
    
    this.http.post('http://127.0.0.1:8000/oauth/token', data).subscribe(
      result =>{
        console.log('success');
        console.log(result);
      },
      error =>{
        console.log('failed_code');
        console.log(error);
      }
    );
  } 

}



