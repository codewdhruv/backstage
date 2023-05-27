/*! For license information please see b6170319.45b4f7fa.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[834741],{594416:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(824246),o=n(511151);const i={id:"writing-custom-actions",title:"Writing Custom Actions",description:"How to write your own actions"},c=void 0,s={unversionedId:"features/software-templates/writing-custom-actions",id:"features/software-templates/writing-custom-actions",title:"Writing Custom Actions",description:"How to write your own actions",source:"@site/../docs/features/software-templates/writing-custom-actions.md",sourceDirName:"features/software-templates",slug:"/features/software-templates/writing-custom-actions",permalink:"/docs/features/software-templates/writing-custom-actions",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/software-templates/writing-custom-actions.md",tags:[],version:"current",frontMatter:{id:"writing-custom-actions",title:"Writing Custom Actions",description:"How to write your own actions"},sidebar:"docs",previous:{title:"Builtin actions",permalink:"/docs/features/software-templates/builtin-actions"},next:{title:"Writing Custom Field Extensions",permalink:"/docs/features/software-templates/writing-custom-field-extensions"}},a={},l=[{value:"Writing your Custom Action",id:"writing-your-custom-action",level:2},{value:"Naming Conventions",id:"naming-conventions",level:4},{value:"The context object",id:"the-context-object",level:3},{value:"Registering Custom Actions",id:"registering-custom-actions",level:2},{value:"List of custom action packages",id:"list-of-custom-action-packages",level:2}];function d(e){const t=Object.assign({p:"p",a:"a",blockquote:"blockquote",strong:"strong",h2:"h2",code:"code",pre:"pre",ul:"ul",li:"li",h4:"h4",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["If you're wanting to extend the functionality of the Scaffolder, you can do so\nby writing custom actions which can be used along side our\n",(0,r.jsx)(t.a,{href:"/docs/features/software-templates/builtin-actions",children:"built-in actions"}),"."]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["Note: When adding custom actions, the actions array will ",(0,r.jsx)(t.strong,{children:"replace the\nbuilt-in actions too"}),". Meaning, you will no longer be able to use them.\nIf you want to continue using the builtin actions, include them in the actions\narray when registering your custom actions, as seen below."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"writing-your-custom-action",children:"Writing your Custom Action"}),"\n",(0,r.jsxs)(t.p,{children:["Your custom action can live where you choose, but simplest is to include it\nalongside your ",(0,r.jsx)(t.code,{children:"backend"})," package in ",(0,r.jsx)(t.code,{children:"packages/backend"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Let's create a simple action that adds a new file and some contents that are\npassed as ",(0,r.jsx)(t.code,{children:"input"})," to the function."]}),"\n",(0,r.jsxs)(t.p,{children:["In ",(0,r.jsx)(t.code,{children:"packages/backend/src/plugins/scaffolder/actions/custom.ts"})," we can create a\nnew action."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="With Zod"',children:"import { createTemplateAction } from '@backstage/plugin-scaffolder-node';\nimport fs from 'fs-extra';\nimport { z } from 'zod';\n\nexport const createNewFileAction = () => {\n  return createTemplateAction({\n    id: 'acme:file:create',\n    schema: {\n      input: z.object({\n        contents: z.string().describe('The contents of the file'),\n        filename: z\n          .string()\n          .describe('The filename of the file that will be created'),\n      }),\n    },\n\n    async handler(ctx) {\n      await fs.outputFile(\n        `${ctx.workspacePath}/${ctx.input.filename}`,\n        ctx.input.contents,\n      );\n    },\n  });\n};\n"})}),"\n",(0,r.jsxs)(t.p,{children:["So let's break this down. The ",(0,r.jsx)(t.code,{children:"createNewFileAction"})," is a function that returns a\n",(0,r.jsx)(t.code,{children:"createTemplateAction"}),", and it's a good place to pass in dependencies which\nclose over the ",(0,r.jsx)(t.code,{children:"TemplateAction"}),". Take a look at our\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend/src/scaffolder/actions/builtin",children:"built-in actions"}),"\nfor reference."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"createTemplateAction"})," takes an object which specifies the following:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"id"})," - a unique ID for your custom action. We encourage you to namespace these\nin some way so that they won't collide with future built-in actions that we\nmay ship with the ",(0,r.jsx)(t.code,{children:"scaffolder-backend"})," plugin."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"schema.input"})," - A ",(0,r.jsx)(t.code,{children:"zod"})," or JSON schema object for input values to your function"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"schema.output"})," - A ",(0,r.jsx)(t.code,{children:"zod"})," or JSON schema object for values which are output from the\nfunction using ",(0,r.jsx)(t.code,{children:"ctx.output"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"handler"})," - the actual code which is run part of the action, with a context"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["You can also choose to define your custom action using JSON schema instead of ",(0,r.jsx)(t.code,{children:"zod"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="With JSON Schema"',children:"import { createTemplateAction } from '@backstage/plugin-scaffolder-node';\nimport { writeFile } from 'fs';\n\nexport const createNewFileAction = () => {\n  return createTemplateAction<{ contents: string; filename: string }>({\n    id: 'acme:file:create',\n    schema: {\n      input: {\n        required: ['contents', 'filename'],\n        type: 'object',\n        properties: {\n          contents: {\n            type: 'string',\n            title: 'Contents',\n            description: 'The contents of the file',\n          },\n          filename: {\n            type: 'string',\n            title: 'Filename',\n            description: 'The filename of the file that will be created',\n          },\n        },\n      },\n    },\n    async handler(ctx) {\n      const { signal } = ctx;\n      await writeFile(\n        `${ctx.workspacePath}/${ctx.input.filename}`,\n        ctx.input.contents,\n        { signal },\n        _ => {},\n      );\n    },\n  });\n};\n"})}),"\n",(0,r.jsx)(t.h4,{id:"naming-conventions",children:"Naming Conventions"}),"\n",(0,r.jsxs)(t.p,{children:["Try to keep names consistent for both your own custom actions, and any actions contributed to open source. We've found that a separation of ",(0,r.jsx)(t.code,{children:":"})," and using a verb as the last part of the name works well.\nWe follow ",(0,r.jsx)(t.code,{children:"provider:entity:verb"})," or as close to this as possible for our built in actions. For example, ",(0,r.jsx)(t.code,{children:"github:actions:create"})," or ",(0,r.jsx)(t.code,{children:"github:repo:create"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Also feel free to use your company name to namespace them if you prefer too, for example ",(0,r.jsx)(t.code,{children:"acme:file:create"})," like above."]}),"\n",(0,r.jsxs)(t.p,{children:["Prefer to use ",(0,r.jsx)(t.code,{children:"camelCase"})," over ",(0,r.jsx)(t.code,{children:"snake-case"})," for these actions if possible, which leads to better reading and writing of template entity definitions."]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"We're aware that there are some exceptions to this, but try to follow as close as possible. We'll be working on migrating these in the repository over time too."}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"the-context-object",children:"The context object"}),"\n",(0,r.jsxs)(t.p,{children:["When the action ",(0,r.jsx)(t.code,{children:"handler"})," is called, we provide you a ",(0,r.jsx)(t.code,{children:"context"})," as the only\nargument. It looks like the following:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"ctx.baseUrl"})," - a string where the template is located"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"ctx.logger"})," - a Winston logger for additional logging inside your action"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"ctx.logStream"})," - a stream version of the logger if needed"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"ctx.workspacePath"})," - a string of the working directory of the template run"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"ctx.input"})," - an object which should match the ",(0,r.jsx)(t.code,{children:"zod"})," or JSON schema provided in the\n",(0,r.jsx)(t.code,{children:"schema.input"})," part of the action definition"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"ctx.output"})," - a function which you can call to set outputs that match the\nJSON schema or ",(0,r.jsx)(t.code,{children:"zod"})," in ",(0,r.jsx)(t.code,{children:"schema.output"})," for ex. ",(0,r.jsx)(t.code,{children:"ctx.output('downloadUrl', myDownloadUrl)"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"createTemporaryDirectory"})," a function to call to give you a temporary\ndirectory somewhere on the runner so you can store some files there rather\nthan polluting the ",(0,r.jsx)(t.code,{children:"workspacePath"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"ctx.metadata"})," - an object containing a ",(0,r.jsx)(t.code,{children:"name"})," field, indicating the template\nname. More metadata fields may be added later."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"registering-custom-actions",children:"Registering Custom Actions"}),"\n",(0,r.jsxs)(t.p,{children:["Once you have your Custom Action ready for usage with the scaffolder, you'll\nneed to pass this into the ",(0,r.jsx)(t.code,{children:"scaffolder-backend"})," ",(0,r.jsx)(t.code,{children:"createRouter"})," function. You\nshould have something similar to the below in\n",(0,r.jsx)(t.code,{children:"packages/backend/src/plugins/scaffolder.ts"})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"return await createRouter({\n  containerRunner,\n  catalogClient,\n  logger: env.logger,\n  config: env.config,\n  database: env.database,\n  reader: env.reader,\n});\n"})}),"\n",(0,r.jsxs)(t.p,{children:["There's another property you can pass here, which is an array of ",(0,r.jsx)(t.code,{children:"actions"})," which\nwill set the available actions that the scaffolder has access to."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"import { createBuiltinActions } from '@backstage/plugin-scaffolder-backend';\nimport { ScmIntegrations } from '@backstage/integration';\nimport { createNewFileAction } from './scaffolder/actions/custom';\n\nexport default async function createPlugin(\n  env: PluginEnvironment,\n): Promise<Router> {\n  const catalogClient = new CatalogClient({ discoveryApi: env.discovery });\n  const integrations = ScmIntegrations.fromConfig(env.config);\n\n  const builtInActions = createBuiltinActions({\n    integrations,\n    catalogClient,\n    config: env.config,\n    reader: env.reader,\n  });\n\n  const actions = [...builtInActions, createNewFileAction()];\n\n  return createRouter({\n    actions,\n    catalogClient: catalogClient,\n    logger: env.logger,\n    config: env.config,\n    database: env.database,\n    reader: env.reader,\n  });\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"list-of-custom-action-packages",children:"List of custom action packages"}),"\n",(0,r.jsx)(t.p,{children:"Here is a list of Open Source custom actions that you can add to your Backstage\nscaffolder backend:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Package"}),(0,r.jsx)(t.th,{children:"Owner"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Yeoman"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@backstage/plugin-scaffolder-backend-module-yeoman",children:"plugin-scaffolder-backend-module-yeoman"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://backstage.io",children:"Backstage"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Cookiecutter"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@backstage/plugin-scaffolder-backend-module-cookiecutter",children:"plugin-scaffolder-backend-module-cookiecutter"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://backstage.io",children:"Backstage"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Rails"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@backstage/plugin-scaffolder-backend-module-rails",children:"plugin-scaffolder-backend-module-rails"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://backstage.io",children:"Backstage"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"HTTP requests"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@roadiehq/scaffolder-backend-module-http-request",children:"scaffolder-backend-module-http-request"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://roadie.io",children:"Roadie"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Utility actions"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@roadiehq/scaffolder-backend-module-utils",children:"scaffolder-backend-module-utils"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://roadie.io",children:"Roadie"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"AWS cli actions"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@roadiehq/scaffolder-backend-module-aws",children:"scaffolder-backend-module-aws"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://roadie.io",children:"Roadie"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Scaffolder .NET Actions"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@plusultra/plugin-scaffolder-dotnet-backend",children:"plugin-scaffolder-dotnet-backend"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://github.com/alefcarlos",children:"Alef Carlos"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Scaffolder Git Actions"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@mdude2314/backstage-plugin-scaffolder-git-actions",children:"plugin-scaffolder-git-actions"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://github.com/arhill05",children:"Drew Hill"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Azure Pipeline Actions"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@parfuemerie-douglas/scaffolder-backend-module-azure-pipelines",children:"scaffolder-backend-module-azure-pipelines"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://github.com/Parfuemerie-Douglas",children:"Parf\xfcmerie Douglas"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Azure Repository Actions"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@parfuemerie-douglas/scaffolder-backend-module-azure-repositories",children:"scaffolder-backend-module-azure-repositories"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://github.com/Parfuemerie-Douglas",children:"Parf\xfcmerie Douglas"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Snyk Import Project"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@ma11hewthomas/plugin-scaffolder-backend-module-snyk",children:"plugin-scaffolder-backend-module-snyk"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://github.com/Ma11hewThomas",children:"Matthew Thomas"})})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"Have fun! \ud83d\ude80"})]})}const u=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,c,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var l in i=Object(arguments[a]))n.call(i,l)&&(s[l]=i[l]);if(t){c=t(i);for(var d=0;d<c.length;d++)r.call(i,c[d])&&(s[c[d]]=i[c[d]])}}return s}},371426:(e,t,n)=>{n(862525);var r=n(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),t.Fragment=i("react.fragment")}var c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,i={},l=null,d=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,r)&&!a.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:d,props:i,_owner:c.current}}t.jsx=l,t.jsxs=l},541535:(e,t,n)=>{var r=n(862525),o=60103,i=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var c=60109,s=60110,a=60112;t.Suspense=60113;var l=60115,d=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;o=u("react.element"),i=u("react.portal"),t.Fragment=u("react.fragment"),t.StrictMode=u("react.strict_mode"),t.Profiler=u("react.profiler"),c=u("react.provider"),s=u("react.context"),a=u("react.forward_ref"),t.Suspense=u("react.suspense"),l=u("react.memo"),d=u("react.lazy")}var h="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function g(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||p}function j(){}function x(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||p}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=g.prototype;var y=x.prototype=new j;y.constructor=x,r(y,g.prototype),y.isPureReactComponent=!0;var b={current:null},w=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function v(e,t,n){var r,i={},c=null,s=null;if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(c=""+t.key),t)w.call(t,r)&&!k.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(1===a)i.children=n;else if(1<a){for(var l=Array(a),d=0;d<a;d++)l[d]=arguments[d+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===i[r]&&(i[r]=a[r]);return{$$typeof:o,type:e,key:c,ref:s,props:i,_owner:b.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var C=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,n,r,c){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var a=!1;if(null===e)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case o:case i:a=!0}}if(a)return c=c(a=e),e=""===r?"."+S(a,0):r,Array.isArray(c)?(n="",null!=e&&(n=e.replace(C,"$&/")+"/"),O(c,t,n,"",(function(e){return e}))):null!=c&&(_(c)&&(c=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,n+(!c.key||a&&a.key===c.key?"":(""+c.key).replace(C,"$&/")+"/")+e)),t.push(c)),1;if(a=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var d=r+S(s=e[l],l);a+=O(s,t,n,d,c)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),l=0;!(s=e.next()).done;)a+=O(s=s.value,t,n,d=r+S(s,l++),c);else if("object"===s)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return a}function A(e,t,n){if(null==e)return e;var r=[],o=0;return O(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function P(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function E(){var e=R.current;if(null===e)throw Error(f(321));return e}var T={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:A,forEach:function(e,t,n){A(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return A(e,(function(){t++})),t},toArray:function(e){return A(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error(f(143));return e}},t.Component=g,t.PureComponent=x,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.cloneElement=function(e,t,n){if(null==e)throw Error(f(267,e));var i=r({},e.props),c=e.key,s=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,a=b.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(d in t)w.call(t,d)&&!k.hasOwnProperty(d)&&(i[d]=void 0===t[d]&&void 0!==l?l[d]:t[d])}var d=arguments.length-2;if(1===d)i.children=n;else if(1<d){l=Array(d);for(var u=0;u<d;u++)l[u]=arguments[u+2];i.children=l}return{$$typeof:o,type:e.type,key:c,ref:s,props:i,_owner:a}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=v,t.createFactory=function(e){var t=v.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:a,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return E().useCallback(e,t)},t.useContext=function(e,t){return E().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return E().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return E().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return E().useLayoutEffect(e,t)},t.useMemo=function(e,t){return E().useMemo(e,t)},t.useReducer=function(e,t,n){return E().useReducer(e,t,n)},t.useRef=function(e){return E().useRef(e)},t.useState=function(e){return E().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>s,ah:()=>i});var r=n(667294);const o=r.createContext({});function i(e){const t=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function s({components:e,children:t,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||c:i(e),r.createElement(o.Provider,{value:s},t)}}}]);