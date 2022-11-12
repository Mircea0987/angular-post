import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostService } from '../post.service';
@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private postService: PostService
  ) {}
  formGroup: FormGroup;
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      cardTitle: ['', Validators.required],
      cardSubtitle: ['', Validators.required],
      img: ['', Validators.required],
      content: ['', Validators.required],
    });
  }
  submitForm(card: any) {
    this.postService.postData(card);
    this.formGroup.reset({
      cardTitle: '',
      cardSubtitle: '',
      img: '',
      content: '',
    });
  }
}
