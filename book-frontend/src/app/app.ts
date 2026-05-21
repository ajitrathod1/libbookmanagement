import { Component } from '@angular/core';

import { Header } from './components/header/header';

import { BookList } from './components/book-list/book-list';

@Component({
  selector: 'app-root',

  standalone: true,

  imports: [Header, BookList],

  templateUrl: './app.html',

  styleUrl: './app.css'
})

export class App {

}
