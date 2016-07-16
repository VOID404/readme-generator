# {{name}}

{{description}}

## Instalation

```sh
npm install -g
```

{{#if dependencies}}
## Dependencies

{{#each dependencies}}
- [{{this.name}}]({{this.homepage}}): {{this.description}}
{{/each}}
{{/if}}

{{#if devDependencies}}
## Dev Dependencies

{{#each devDependencies}}
- [{{this.name}}]({{this.homepage}}): {{this.description}}
{{/each}}
{{/if}}

## License

{{#if readMeGenerator.licenseFile}}
[{{license}}]({{readMeGenerator.licenseFile}})
{{else}}
{{license}}
{{/if}}
