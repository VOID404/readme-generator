#!/usr/bin/env node
'use strict'
var handlebars = require('handlebars'),
    data = require(process.cwd()+'/package.json'),
    fs = require('fs');

var dependenciesDir = process.cwd()+'/node_modules'
var dependenciesAll = fs.readdirSync(dependenciesDir).filter((i)=>{return i!='.bin'});

for(let i=0,dep=dependenciesAll[i];i<dependenciesAll.length;i++,dep=dependenciesAll[i]){
  dependenciesAll[i] = require(dependenciesDir+'/'+dep+'/package.json');
}

var dependencies = [];
var tmp = Object.keys(data.dependencies);
for(let i=0,depName=tmp[i];i<tmp.length;i++,depName=tmp[i]){
  dependencies[i] = dependenciesAll.filter((el)=>{return el.name==depName})[0]
}
data.dependencies = dependencies;

var dependenciesDev = [];
var tmp = Object.keys(data.devDependencies);
for(let i=0,depName=tmp[i];i<tmp.length;i++,depName=tmp[i]){
  dependenciesDev[i] = dependenciesAll.filter((el)=>{return el.name==depName})[0]
}
data.devDependencies = dependenciesDev;

var template = handlebars.compile(fs.readFileSync(data.readMeGenerator.template).toString());

console.log(template(data));
