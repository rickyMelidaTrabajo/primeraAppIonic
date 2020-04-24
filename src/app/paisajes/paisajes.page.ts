import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paisajes',
  templateUrl: './paisajes.page.html',
  styleUrls: ['./paisajes.page.scss'],
})
export class PaisajesPage implements OnInit {
  private paisajes = [
    {
        id: '1',
        titulo: 'Torre Eiffel',
        imagenURL: 'https://i1.wp.com/hotbook.com.mx/wp-content/uploads/2015/03/effiel.jpg',
        cometanrio: ['Paisaje asombroso', 'Unica Experiencia']
    },
    {
        id: '2',
        titulo: 'Estatua de la Libertad',
        imagenURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Statue_of_Liberty_7.jpg/1200px-Statue_of_Liberty_7.jpg',
        cometanrio: ['Paisaje asombroso', 'Unica Experiencia']
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
