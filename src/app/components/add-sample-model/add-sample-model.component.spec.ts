import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSampleModelComponent } from './add-sample-model.component';

describe('AddSampleModelComponent', () => {
  let component: AddSampleModelComponent;
  let fixture: ComponentFixture<AddSampleModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSampleModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSampleModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
