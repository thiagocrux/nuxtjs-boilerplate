export default function(plop) {
  plop.setGenerator('component', {
    description: 'this is a skeleton plopfile',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}.vue',
        templateFile: 'templates/component.vue.hbs'
      },
      {
        type: 'add',
        path: '../src/__tests__/specs/components/{{pascalCase name}}.spec.ts',
        templateFile: 'templates/test.spec.ts.hbs'
      }
    ]
  })
}
