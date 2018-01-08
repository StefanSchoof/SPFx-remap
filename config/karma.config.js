const existingKarmaConfig = require('@microsoft/sp-build-web/lib/karma/karma.config');
const gulp_core_build = require("@microsoft/gulp-core-build");
const path = require('path');
const remapCoverageReporter = require('karma-remap-coverage');

module.exports = function (config) {
    existingKarmaConfig(config);

    config.reporters.push('remap-coverage');
    config.coverageReporter = {
        type: 'in-memory'
    }
    config.remapCoverageReporter = {
        'text-summary': null,
        html: path.join(gulp_core_build.getConfig().tempFolder, 'coverage/html'),
        cobertura: path.join(gulp_core_build.getConfig().tempFolder, 'coverage/cobertura.xml')
    };
    config.plugins.push(remapCoverageReporter);
};