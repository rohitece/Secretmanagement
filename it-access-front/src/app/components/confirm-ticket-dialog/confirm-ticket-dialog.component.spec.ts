import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmTicketDialogComponent } from './confirm-ticket-dialog.component';

describe('ConfirmTicketDialogComponent', () => {
  let component: ConfirmTicketDialogComponent;
  let fixture: ComponentFixture<ConfirmTicketDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmTicketDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmTicketDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
