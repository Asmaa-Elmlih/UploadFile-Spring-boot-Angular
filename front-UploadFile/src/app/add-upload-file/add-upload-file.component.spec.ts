import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUploadFileComponent } from './add-upload-file.component';

describe('AddUploadFileComponent', () => {
  let component: AddUploadFileComponent;
  let fixture: ComponentFixture<AddUploadFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUploadFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUploadFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
