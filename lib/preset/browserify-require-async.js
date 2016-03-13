module.exports = {
    replacement: '"name":%s',
    value: function ( node ) {
        return node.value.value;
    },
    check: function ( node ) {

        var props = (node.parent && node.parent.properties) || [];
        var isAsync = props.filter(function ( prop ) {
            return prop.key.value === '__requireAsync';
        }).length !== 0;

        return node.type === 'Property' &&
        node.key.value === 'name' &&
        isAsync;
    }
};
