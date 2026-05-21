using Microsoft.AspNetCore.Mvc;
using bookmanagementsystem.Data;
using bookmanagementsystem.Models;

namespace bookmanagementsystem.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BooksController : ControllerBase
    {
        private readonly AppDbContext _context;

        public BooksController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/books
        [HttpGet]
        public IActionResult GetBooks()
        {
            var books = _context.Books.ToList();

            return Ok(books);
        }

        // GET: api/books/1
        [HttpGet("{id}")]
        public IActionResult GetBookById(int id)
        {
            var book = _context.Books.Find(id);

            if (book == null)
            {
                return NotFound("Book not found");
            }

            return Ok(book);
        }

        // POST: api/books
        [HttpPost]
        public IActionResult AddBook(Book book)
        {
            // Validation

            if (string.IsNullOrWhiteSpace(book.Title))
            {
                return BadRequest("Title is required");
            }

            if (book.Price <= 0)
            {
                return BadRequest("Price must be greater than 0");
            }

            if (book.PublishedDate > DateTime.Now)
            {
                return BadRequest("Published date cannot be future date");
            }

            _context.Books.Add(book);

            _context.SaveChanges();

            return Ok(book);
        }

        // PUT: api/books/1
        [HttpPut("{id}")]
        public IActionResult UpdateBook(int id, Book updatedBook)
        {
            var book = _context.Books.Find(id);

            if (book == null)
            {
                return NotFound("Book not found");
            }

            // Update fields

            book.Price = updatedBook.Price;
            book.Category = updatedBook.Category;
            book.IsAvailable = updatedBook.IsAvailable;

            _context.SaveChanges();

            return Ok(book);
        }

        // DELETE: api/books/1
        [HttpDelete("{id}")]
        public IActionResult DeleteBook(int id)
        {
            var book = _context.Books.Find(id);

            if (book == null)
            {
                return NotFound("Book not found");
            }

            _context.Books.Remove(book);

            _context.SaveChanges();

            return Ok("Book deleted successfully");
        }
    }
}