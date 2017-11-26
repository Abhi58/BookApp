export class Hero {
  id: number;
  name: string;
  author: string;
  isbn: number;
  publicationdate: string;
  publisher: string;
  price: number;
  genre:string;
  format: string;
  constructor(name,author,isbn,publicationdate,publisher,price,genre,format){
    this.name=name;
    this.author=author;
    this.isbn=isbn;
    this.publicationdate=publicationdate;
    this.publisher=publisher;
    this.price=price;
    this.genre=genre;
    this.format=format;
  }
}
