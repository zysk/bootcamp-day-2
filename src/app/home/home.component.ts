import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  addingNewSkill: boolean;
  addingAcademicCredentials: boolean;
  newSkillName: string;
  skills: any = [];
  academicDetails: any = [];
  academicForm: FormGroup;
  userData: any;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {

    this.userData = JSON.parse(sessionStorage.getItem('userData'));
    console.log(this.userData);

    if (this.userData  === null) {
      this.router.navigateByUrl('/register');
    }

    this.academicForm = this.fb.group({
      institutionName: ['', [Validators.required]],
      qualification: ['', [Validators.required]],
      yop: ['', [Validators.required]],
      city: ['', [Validators.required]],
      achievement: ['', []],
    })
  }

  addNewSkill() {
    this.skills.push({name : this.newSkillName});
    this.newSkillName = '';
  }

  saveAcademicData() {
    this.academicDetails.push(this.academicForm.value);
    this.academicForm.reset();
  }

  cancelAddQualification() {
    this.addingAcademicCredentials = false;
    this.academicForm.reset();
  }

  removeQualification(index) {
    this.academicDetails.splice(index, 1);
  }
}
