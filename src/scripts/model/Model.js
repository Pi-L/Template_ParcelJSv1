
export default class Model {

    id = null;
    param1 = '';
    param2 = '';

    constructor({
        id = null,
        param1 = '',
        param2 = ''
    } = {}) {

        this.id = id;
        this.param1 = param1;
        this.param2 = param2;
    }
}
