import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Todo2Component } from './todo-2.component';

describe('Todo2Component', () => {
  let component: Todo2Component;
  let fixture: ComponentFixture<Todo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Todo2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Todo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
