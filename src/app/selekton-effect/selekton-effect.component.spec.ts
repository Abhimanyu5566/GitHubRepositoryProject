import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelektonEffectComponent } from './selekton-effect.component';

describe('SelektonEffectComponent', () => {
  let component: SelektonEffectComponent;
  let fixture: ComponentFixture<SelektonEffectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelektonEffectComponent]
    });
    fixture = TestBed.createComponent(SelektonEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
