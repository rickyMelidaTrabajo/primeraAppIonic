import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaisajesPage } from './paisajes.page';

describe('PaisajesPage', () => {
  let component: PaisajesPage;
  let fixture: ComponentFixture<PaisajesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaisajesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaisajesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
