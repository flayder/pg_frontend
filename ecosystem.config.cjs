module.exports = {
    apps: [
        {
            name: 'TTOP',
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs',
        }
    ]
}
