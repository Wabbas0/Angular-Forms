import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      declarations: [FormComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });


  interface Field {
    field: string;
    label: string;
    type: string;
    hidden: string;
    mandatory?: boolean;
    value?: string;
  }

  it('should initialize the form with the fields from the json', () => {
    const fields = [
      { field: 'name', label: 'Name', type: 'text', hidden: 'false', mandatory: true },
      { field: 'email', label: 'Email', value: 'email@example.com', type: 'text', hidden: 'false', mandatory: true },
      { field: 'confirm', label: 'Checkbox with confirmation', type: 'check', hidden: 'false' }
    ];
    const expectedForm = {
      name: jasmine.any(Object),
      email: jasmine.any(Object),
      confirm: jasmine.any(Object)
    };
    component.fields = fields;
    component.ngOnInit();
    expect(component.form.value).toEqual({ name: '', email: 'email@example.com', confirm: false });
    expect(component.form.controls).toEqual(expectedForm);
  });
});
