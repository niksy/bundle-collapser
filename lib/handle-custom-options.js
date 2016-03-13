function handlePreset ( preset ) {
    if ( typeof preset === 'string' ) {
        return require('./preset/' + preset);
    }
    return preset;
}

module.exports = function ( opts ) {
    var custom = (opts && opts.custom) || [];
    var preset = (opts && opts.preset) || [];
    preset = preset.map(handlePreset);
    return [].concat(preset, custom);
};
