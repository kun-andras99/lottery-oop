class Create {

    /**
     * egy elem létrehozása
     * 
     * @param {object} o 
     * @param {string} body 
     * @returns 
     */
    createElement(o, body) {
        let element = document.createElement(o.tag);
        element.setAttribute("id", o.id)
        element.setAttribute("class", o.cls);
        if (o.datakey)
            element.setAttribute(o.datakey, o.dataval);
        if (body)
            element.innerText = body;

        return element;
    }
}