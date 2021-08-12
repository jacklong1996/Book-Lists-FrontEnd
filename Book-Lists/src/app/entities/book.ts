import { stringify } from "@angular/compiler/src/util"

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

    getGenres(): string {
        let returnStr = "";
        for (let i = 0; i < this.genre.length; i++) {
            if (i+1 == this.genre.length) {
                returnStr += this.genre[i];
            } else {
                returnStr += this.genre[i] + ", ";
            }
        }
        return returnStr;
    }
}
