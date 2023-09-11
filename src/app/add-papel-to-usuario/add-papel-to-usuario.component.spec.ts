import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPapelToUsuarioComponent } from './add-papel-to-usuario.component';

describe('AddPapelToUsuarioComponent', () => {
  let component: AddPapelToUsuarioComponent;
  let fixture: ComponentFixture<AddPapelToUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPapelToUsuarioComponent]
    });
    fixture = TestBed.createComponent(AddPapelToUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
