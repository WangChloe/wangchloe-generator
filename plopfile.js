module.exports = plop => {
    plop.setGenerator('component', {
        description: 'create a component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Your project name',
                default: 'MyComponent'
            }
        ],
        actions: [
            {
                type: 'add',
                path: 'src/components/{{name}}/{{name}}.js', // 目标文件
                templateFile: 'plop-templates/component.hbs' // 模版文件
            }
        ]
    })
}