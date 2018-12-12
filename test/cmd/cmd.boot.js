const Jasmine = require('jasmine');
const jasmine = new Jasmine();
jasmine.loadConfig({
    spec_dir: '/test/cmd',
    spec_files: [
        '**/*[sS]pec.js',
    ]
});
jasmine.execute();