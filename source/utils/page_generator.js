/**
 * initialize global funcs in the sandbox
 * @param {*} code 
 * @returns 
 */
export function generateGlobalInintializer(code) {
    let globalInit = (code.match(/^function ([\w\d_]+) ?\(/gm) || [])
        .map(it => it.split(' ').pop().slice(0, -1).trim())
        .map(it => 'globalThis.' + it + ' = ' + it).join(';\n');

    return globalInit;
}