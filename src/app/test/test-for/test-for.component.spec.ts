import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestForComponent } from './test-for.component';

describe('TestForComponent', () => {
  let component: TestForComponent;
  let fixture: ComponentFixture<TestForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestForComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
