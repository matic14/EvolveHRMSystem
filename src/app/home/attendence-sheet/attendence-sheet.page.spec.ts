import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AttendenceSheetPage } from './attendence-sheet.page';

describe('AttendenceSheetPage', () => {
  let component: AttendenceSheetPage;
  let fixture: ComponentFixture<AttendenceSheetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendenceSheetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AttendenceSheetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
