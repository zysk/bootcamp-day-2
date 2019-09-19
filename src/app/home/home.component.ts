import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  addingAcademicDetails: boolean;
  academicForm: FormGroup;
  userData: any;
  degrees = JSON.parse(sessionStorage.getItem('degrees')) || [];

  addingCertificate: boolean;
  certificateForm: FormGroup;
  certificates = JSON.parse(sessionStorage.getItem('certificates')) || [];

  addingProject: boolean;
  projectForm: FormGroup;
  projects = JSON.parse(sessionStorage.getItem('projects')) || [];

  addingAchievement: boolean;
  achievementForm: FormGroup;
  achievements = JSON.parse(sessionStorage.getItem('achievements')) || [];

  addingLanguage: boolean;
  languageForm: FormGroup;
  languages = JSON.parse(sessionStorage.getItem('languages')) || [];

  addingNewSkill: boolean;
  newSkillName: string;
  skills: any = JSON.parse(sessionStorage.getItem('skills')) || [];

  newInterest: boolean;
  interest: string;
  interests: any = JSON.parse(sessionStorage.getItem('interests')) || [];

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.userData = JSON.parse(sessionStorage.getItem('userData'));
    if (this.userData  === null) {
      this.router.navigateByUrl('/register');
    }

    this.academicForm = this.fb.group({
      courseName: ['', [Validators.required]],
      college: ['', [Validators.required]],
      university: ['', [Validators.required]],
      duration: ['', [Validators.required]],
      achievement: ['', []],
    });

    // Certificate form
    this.certificateForm = this.fb.group({
      certificateName: ['', [Validators.required]],
      issuedBy: ['', [Validators.required]],
      description: ['', [Validators.required]],
      issuedDate: ['', [Validators.required]]
    })

    // Project form
    this.projectForm = this.fb.group({
      projectName: ['', [Validators.required]],
      description: ['', [Validators.required]],
      duration: ['', [Validators.required]]
    })

    // Achievement form
    this.achievementForm = this.fb.group({
      achievement: ['', [Validators.required]],
      description: ['', [Validators.required]],
    })

    // Language form
    this.languageForm = this.fb.group({
      name: ['', [Validators.required]],
      proficiency: ['', [Validators.required]],
    })
  }

  // Save academic details
  saveAcademicData() {
    this.degrees.push(this.academicForm.value);
    sessionStorage.setItem('degrees', JSON.stringify(this.degrees));
    this.addingAcademicDetails = false;
    this.academicForm.reset();
  }

  cancelAddQualification() {
    this.addingAcademicDetails = false;
    this.academicForm.reset();
  }

  // Save certificate details
  saveCerificate() {
    this.certificates.push(this.certificateForm.value);
    sessionStorage.setItem('certificates', JSON.stringify(this.certificates));
    this.addingCertificate = false;
    this.certificateForm.reset();
  }

  cancelAddCertificate() {
    this.addingCertificate = false;
    this.certificateForm.reset();
  }


  // Save project details
  saveProject() {
    this.projects.push(this.projectForm.value);
    sessionStorage.setItem('projects', JSON.stringify(this.projects));
    this.addingProject = false;
    this.projectForm.reset();
  }

  cancelAddProject() {
    this.addingProject = false;
    this.projectForm.reset();
  }

  // Save project details
  saveAchievement() {
    this.achievements.push(this.achievementForm.value);
    sessionStorage.setItem('achievements', JSON.stringify(this.achievements));
    this.addingAchievement = false;
    this.achievementForm.reset();
  }

  cancelAddAchievement() {
    this.addingAchievement = false;
    this.achievementForm.reset();
  }

  // Save Languages
  saveLanguage() {
    this.languages.push(this.languageForm.value);
    sessionStorage.setItem('languages', JSON.stringify(this.languages));
    this.addingLanguage = false;
    this.languageForm.reset();
  }

  cancelAddLanguage() {
    this.addingLanguage = false;
    this.languageForm.reset();
  }

  addNewSkill() {
    this.skills.push({name : this.newSkillName});
    sessionStorage.setItem('skills', JSON.stringify(this.skills));
    this.newSkillName = '';
  }

  addNewInterest() {
    this.interests.push({name : this.interest});
    sessionStorage.setItem('interests', JSON.stringify(this.interests));
    this.interest = '';
  }
}
