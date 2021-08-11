export class Book {
    constructor(
        public id: number, 
        public title: string, 
        public series: string,
        public authors: string[], 
        public genre: string[], 
        public description: string,
        public pages: number, 
        public date: string, 
        public cover: string
    ) {}
}
