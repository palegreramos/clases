function CoinFunction(symbol, name) {
    this._name = name;
    this._symbol = symbol;
}
CoinFunction.prototype.getName = function () {
    return this._name;
}
CoinFunction.prototype.getSymbol = function () {
    return this._symbol;
}
CoinFunction.prototype.update = function (name, symbol) {
    this._name = name;
    this._symbol = symbol;
}
CoinFunction.prototype.setSymbol = function (value) {
    if (typeof value == 'string') {
        if (!value.match(/^[A-Z0-9]*$/i)) {
            throw new Error(`Name contains invalid characters`);
        } else
            this._symbol = value;
    }
    else {
        throw new Error(`symbol should be a string`);
    }
}


class CoinClass {
    #symbol;
    #name;
    constructor(symbol, name) {
        this.#symbol = symbol;
        this.#name = name;
    }
    getName() {
        return this.#name;
    }
    getSymbol() {
        return this.#symbol;
    }
    update(name, symbol) {
        this.#name = name;
        this.#symbol = symbol;
    }
    setSymbol(value) {
        if (typeof value == 'string') {
            if (!value.match(/^[A-Z0-9]*$/i)) {
                throw new Error(`Name contains invalid characters`);
            }
            else
                this.#symbol = value;
        }
        else {
            throw new Error(`symbol should be a string`);
        }
    }
}