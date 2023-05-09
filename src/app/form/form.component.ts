import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface Field {
  field: string;
  label: string;
  type: string;
  hidden: string;
  mandatory?: boolean;
  value?: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  fields!: Field[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Field[]>('assets/form.json').subscribe(data => {
      console.log(data);
      this.fields = data;
      this.updateFormControls();
    });
  }

  private updateFormControls() {
    const controls: {[key: string]: FormControl} = {};
    for (const field of this.fields) {
      const validators = field.mandatory ? Validators.required : null;
      controls[field.field] = new FormControl(field.value || '', validators);
    }
    this.form = new FormGroup(controls);
  }
  onSubmit() {
    console.log(this.form.value);
  }

  onFieldsChanged() {
    this.updateFormControls();
  }}
