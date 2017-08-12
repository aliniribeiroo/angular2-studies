import {async, ComponentFixture, fakeAsync, TestBed, tick} from "@angular/core/testing";
import {ShareModule} from "../../../share/share.module";
import {GiphySearchListComponent} from "../giphy-search-list.component";

import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";

describe('', () => {

  let fixture: ComponentFixture<GiphySearchListComponent>;
  let giphyComponent: GiphySearchListComponent;

  //Configurar o módulo de teste
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ShareModule ],
      declarations: [ GiphySearchListComponent ]
    }).compileComponents().then( () => {
      fixture = TestBed.createComponent(GiphySearchListComponent);
      giphyComponent = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it(' Deveria ter criado o GiphySearchListComponent', () => {
    expect(giphyComponent).toBeTruthy();
    expect(giphyComponent).not.toBeNull();
  });

  it('Should return 2 taags (a)', () => {
    giphyComponent.gifsList = [
      {
        id : '1',
        url: 'localhost',
        images: { fixed_height: { url: 'localhost/02.gif'}}
      },
      {
        id : '2',
        url: 'localhost:8080',
        images: { fixed_height: { url: 'localhost/02.gif'}}
      }
      ];

    fixture.detectChanges();
    fixture.whenStable().then( () => {
      let debugElements: DebugElement[] = fixture.debugElement.queryAll(By.css('a'));
      expect(debugElements.length).toBe(2);
    });

  });

});
