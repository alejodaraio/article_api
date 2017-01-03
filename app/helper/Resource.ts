import resource from "../decorators/resource";

export default class Resource {
    private id: number;

    constructor(id:number){
        this.id = id;
    }

    @resource()
    public get() {
        return this.id;
    }
}