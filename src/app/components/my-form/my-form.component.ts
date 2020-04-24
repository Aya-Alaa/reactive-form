import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {
  userInfo = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    address: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zip: new FormControl(''),
    check: new FormControl(''),
    gender: new FormControl('')
  });

  constructor(private fb: FormBuilder, private usersService: UsersService) {}

  initForm() {
    this.userInfo = this.fb.group({
      email: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    // here we can call inintForm()
  }
  //
  onSubmit() {
    if (this.userInfo.valid) {
      this.userInfo.value.name = 'any name';
      console.log(this.userInfo.value);
      this.usersService.users.push(this.userInfo.value);
      console.warn(this.usersService.users);
    }
  }
}
