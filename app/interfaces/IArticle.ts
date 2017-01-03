export interface IArticle {
    getId: () => number;
    getTitle: () => string;
    getDate: () => number;
    getBody: () => string;
}