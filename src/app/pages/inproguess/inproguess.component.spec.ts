import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InproguessComponent } from './inproguess.component';

describe('InproguessComponent', () => {
  let component: InproguessComponent;
  let fixture: ComponentFixture<InproguessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InproguessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InproguessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
