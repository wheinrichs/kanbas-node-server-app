import bookModel from "./bookModel.js"
export const createBook = async (book) => {
  const newBook = await bookModel.create(book);
  return newBook;
}
export const findAllBooks = async () => {
  const books = await bookModel.find();
  return books;
}
export const findBookById = async (bookId) => {
  const book = await bookModel.findById(bookId);
  return book;
}
export const findBookByTitle = async (bookTitle) => {
  const book = await bookModel.find({title: bookTitle});
  return book;
}
export const updateBook = async (bookId, book) => {
  const status = await bookModel.updateOne(bookId, book);
  return status;
}
export const deleteBook = async (bookId) => {
    const status = await bookModel.findByIdAndDelete(bookId);
  return status;
}