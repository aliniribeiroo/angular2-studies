import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {

  dataCriacao: Date = new Date(2017, 7, 21);
  mensagem = 'Alini jogando de Orisa ';
  youtube = 'https://www.youtube.com/watch?v=_PdcbAbYH_A';
}
