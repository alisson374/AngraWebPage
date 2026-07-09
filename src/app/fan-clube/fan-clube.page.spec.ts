import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FanClubePage } from './fan-clube.page';

describe('FanClubePage', () => {
  let component: FanClubePage;
  let fixture: ComponentFixture<FanClubePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FanClubePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not submit when required fields are empty', () => {
    component.submitForm();

    expect(component.isFormValid()).toBeFalse();
    expect(component.successMessage()).toBe('');
  });

  it('should submit and show a confirmation message when fields are filled', () => {
    component.name.set('Ana');
    component.email.set('ana@email.com');
    component.age.set('30');

    component.submitForm();

    expect(component.isFormValid()).toBeTrue();
    expect(component.successMessage()).toContain('Cadastro realizado');
  });
});
