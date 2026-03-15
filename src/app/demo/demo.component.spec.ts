import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JsonEditorComponent } from '@echo-blue/ngx-jsoneditor';
import { DemoComponent } from './demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { describe, beforeEach, it, expect } from 'vitest';

describe('DemoComponent', () => {
  let component: DemoComponent;
  let fixture: ComponentFixture<DemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        JsonEditorComponent,
        FormsModule,
        ReactiveFormsModule,
        DemoComponent
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
