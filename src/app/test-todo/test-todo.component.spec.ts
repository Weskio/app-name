import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTodoComponent } from './test-todo.component';

describe('TestTodoComponent', () => {
  let component: TestTodoComponent;
  let fixture: ComponentFixture<TestTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestTodoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
