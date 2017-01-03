import {IArticle} from "../interfaces/IArticle";

export default class ArticleModel implements IArticle {

    private id: number;
    private title: string;
    private date: number;
    private body: string;

    constructor(id: number, title: string, date: number, body: string) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.body = body;
    }

    public getId(): number {
        return this.id;
    }

    public getTitle(): string {
        return this.title;
    }

    public getDate(): number {
        return this.date;
    }

    public getBody(): string {
        return this.body;
    }
}