import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { BookService } from '../../services/book';

@Component({
  selector: 'app-book-list',

  standalone: true,

  imports: [CommonModule],

  templateUrl: './book-list.html',

  styleUrl: './book-list.css'
})

export class BookList implements OnInit {

  books: any[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {

    console.log("Component loaded");

    this.loadBooks();

  }

  loadBooks() {

    console.log("Loading books...");

    this.bookService.getBooks().subscribe({

      next: (data: any[]) => {

        console.log("Books received:", data);

        this.books = data;

      },

      error: (err) => {

        console.error("API ERROR:", err);

      }

    });

  }

  deleteBook(id: number) {

    if (confirm('Delete this book?')) {

      this.bookService.deleteBook(id).subscribe(() => {

        this.loadBooks();

      });

    }
  }
}
