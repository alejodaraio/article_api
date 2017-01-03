import {expect} from "chai";
import ArticleModel from '../../../app/models/Article';

describe('Article Test', () =>{

    it('Should return an instanceof Article',() =>{
        let article = new ArticleModel(1, 'Title', 876543345, 'content body');
        expect(article).to.be.an.instanceof(ArticleModel);
    });

    it('Should return an number',() =>{
        let article = new ArticleModel(1, 'Title', 876543345, 'content body');

        expect(article.getId()).to.be.an("number");
        expect(article.getDate()).to.be.an("number");
    });

    it('Should return an string',() =>{
        let article = new ArticleModel(1, 'Title', 876543345, 'content body');

        expect(article.getTitle()).to.be.an("string");
        expect(article.getBody()).to.be.an("string");
    });
});