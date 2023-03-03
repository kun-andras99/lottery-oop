class ElementCreator {

    constructor() {
        this.element = this.element || "div";
        this.converted = this.converted;
    }

    /**
     * egy elem létrehozása
     * 
     * @param {object} o 
     * @param {string} body 
     * @returns 
     */
    createElement(o) {
        this.element = document.createElement(o.tag);

        for (let key in o.attributes) {
            this.element.setAttribute(key, o.attributes[key]);
        }

        for (let key in o.datasets) {
            // for (const k in key) {
            //     if (Object.hasOwnProperty.call(key, k)) {
            //         if (key[k].replace(/[a-z]/g, "")) {
            //             this.converted = '-' + key[k].toLowerCase();
            //         }
            //     }
            // }
            this.element.setAttribute(`data-${key}`, o.datasets[key]);
        }

        if (o.innerText)
            this.element.innerText = o.innerText;

        return this.element;
    }
}