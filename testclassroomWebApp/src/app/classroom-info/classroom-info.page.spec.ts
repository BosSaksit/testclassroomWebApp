import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClassroomInfoPage } from './classroom-info.page';

describe('ClassroomInfoPage', () => {
  let component: ClassroomInfoPage;
  let fixture: ComponentFixture<ClassroomInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassroomInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClassroomInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
