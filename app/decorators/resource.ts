import Article from "../models/Article";

export default function resource() {
    return function (target: any, propertyName: string, descriptor: TypedPropertyDescriptor<any>) {
        let originalMethod = descriptor.value;

        descriptor.value = function (id: number) {
            let resource_id = originalMethod.apply(this, id);

            //todo here need be instance the DB connector to be generic
            return new Article(resource_id, 'Dummy Title', 1482172265, 'dummy body');
        };
    };
}