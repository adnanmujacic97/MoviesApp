export class Movie {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public imageUrl: string,
    public price: number
  ) {}

  printPrice(){
    return this.price + ' KM'
  }
}

