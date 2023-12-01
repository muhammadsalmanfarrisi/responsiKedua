import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SiswaPage } from './siswa.page';

describe('SiswaPage', () => {
  let component: SiswaPage;
  let fixture: ComponentFixture<SiswaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SiswaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
