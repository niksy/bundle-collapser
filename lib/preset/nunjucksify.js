module.exports = {
    replacement: '%s',
    value: function (node) {
        return node.value;
    },
    check: function (node) {
        var c = node;
        var parent = c.parent && c.parent.callee;
        return c &&
            c.type === 'Literal' &&
            parent &&
            parent.object &&
            parent.object.name === 'env' &&
            parent.object.type === 'Identifier' &&
            parent.property &&
            parent.property.name === 'getTemplate' &&
            parent.property.type === 'Identifier'
        ;
    }
};
