(this["webpackJsonp@banana-cake-pop/main"]=this["webpackJsonp@banana-cake-pop/main"]||[]).push([[94],{935:function(n,e,t){"use strict";t.r(e),t.d(e,"setupMode1",(function(){return Fn})),t.d(e,"setupMode",(function(){return Dn}));var r,i,o,a,s,u,c,d,g,f,l,h,p,v,m,w,_,y,k,b,E,x,C,I,A,S,R=t(614),T=function(){function n(n){var e=this;this._defaults=n,this._worker=null,this._idleCheckInterval=window.setInterval((function(){return e._checkIfIdle()}),3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange((function(){return e._stopWorker()}))}return n.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},n.prototype.dispose=function(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()},n.prototype._checkIfIdle=function(){this._worker&&(Date.now()-this._lastUsedTime>12e4&&this._stopWorker())},n.prototype._getClient=function(){return this._lastUsedTime=Date.now(),this._client||(this._worker=R.editor.createWebWorker({moduleId:"vs/language/html/htmlWorker",createData:{languageSettings:this._defaults.options,languageId:this._defaults.languageId},label:this._defaults.languageId}),this._client=this._worker.getProxy()),this._client},n.prototype.getLanguageServiceWorker=function(){for(var n,e=this,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return this._getClient().then((function(e){n=e})).then((function(n){if(e._worker)return e._worker.withSyncedResources(t)})).then((function(e){return n}))},n}();!function(n){n.MIN_VALUE=-2147483648,n.MAX_VALUE=2147483647}(r||(r={})),function(n){n.MIN_VALUE=0,n.MAX_VALUE=2147483647}(i||(i={})),function(n){n.create=function(n,e){return n===Number.MAX_VALUE&&(n=i.MAX_VALUE),e===Number.MAX_VALUE&&(e=i.MAX_VALUE),{line:n,character:e}},n.is=function(n){var e=n;return gn.objectLiteral(e)&&gn.uinteger(e.line)&&gn.uinteger(e.character)}}(o||(o={})),function(n){n.create=function(n,e,t,r){if(gn.uinteger(n)&&gn.uinteger(e)&&gn.uinteger(t)&&gn.uinteger(r))return{start:o.create(n,e),end:o.create(t,r)};if(o.is(n)&&o.is(e))return{start:n,end:e};throw new Error("Range#create called with invalid arguments["+n+", "+e+", "+t+", "+r+"]")},n.is=function(n){var e=n;return gn.objectLiteral(e)&&o.is(e.start)&&o.is(e.end)}}(a||(a={})),function(n){n.create=function(n,e){return{uri:n,range:e}},n.is=function(n){var e=n;return gn.defined(e)&&a.is(e.range)&&(gn.string(e.uri)||gn.undefined(e.uri))}}(s||(s={})),function(n){n.create=function(n,e,t,r){return{targetUri:n,targetRange:e,targetSelectionRange:t,originSelectionRange:r}},n.is=function(n){var e=n;return gn.defined(e)&&a.is(e.targetRange)&&gn.string(e.targetUri)&&(a.is(e.targetSelectionRange)||gn.undefined(e.targetSelectionRange))&&(a.is(e.originSelectionRange)||gn.undefined(e.originSelectionRange))}}(u||(u={})),function(n){n.create=function(n,e,t,r){return{red:n,green:e,blue:t,alpha:r}},n.is=function(n){var e=n;return gn.numberRange(e.red,0,1)&&gn.numberRange(e.green,0,1)&&gn.numberRange(e.blue,0,1)&&gn.numberRange(e.alpha,0,1)}}(c||(c={})),function(n){n.create=function(n,e){return{range:n,color:e}},n.is=function(n){var e=n;return a.is(e.range)&&c.is(e.color)}}(d||(d={})),function(n){n.create=function(n,e,t){return{label:n,textEdit:e,additionalTextEdits:t}},n.is=function(n){var e=n;return gn.string(e.label)&&(gn.undefined(e.textEdit)||y.is(e))&&(gn.undefined(e.additionalTextEdits)||gn.typedArray(e.additionalTextEdits,y.is))}}(g||(g={})),function(n){n.Comment="comment",n.Imports="imports",n.Region="region"}(f||(f={})),function(n){n.create=function(n,e,t,r,i){var o={startLine:n,endLine:e};return gn.defined(t)&&(o.startCharacter=t),gn.defined(r)&&(o.endCharacter=r),gn.defined(i)&&(o.kind=i),o},n.is=function(n){var e=n;return gn.uinteger(e.startLine)&&gn.uinteger(e.startLine)&&(gn.undefined(e.startCharacter)||gn.uinteger(e.startCharacter))&&(gn.undefined(e.endCharacter)||gn.uinteger(e.endCharacter))&&(gn.undefined(e.kind)||gn.string(e.kind))}}(l||(l={})),function(n){n.create=function(n,e){return{location:n,message:e}},n.is=function(n){var e=n;return gn.defined(e)&&s.is(e.location)&&gn.string(e.message)}}(h||(h={})),function(n){n.Error=1,n.Warning=2,n.Information=3,n.Hint=4}(p||(p={})),function(n){n.Unnecessary=1,n.Deprecated=2}(v||(v={})),function(n){n.is=function(n){var e=n;return void 0!==e&&null!==e&&gn.string(e.href)}}(m||(m={})),function(n){n.create=function(n,e,t,r,i,o){var a={range:n,message:e};return gn.defined(t)&&(a.severity=t),gn.defined(r)&&(a.code=r),gn.defined(i)&&(a.source=i),gn.defined(o)&&(a.relatedInformation=o),a},n.is=function(n){var e,t=n;return gn.defined(t)&&a.is(t.range)&&gn.string(t.message)&&(gn.number(t.severity)||gn.undefined(t.severity))&&(gn.integer(t.code)||gn.string(t.code)||gn.undefined(t.code))&&(gn.undefined(t.codeDescription)||gn.string(null===(e=t.codeDescription)||void 0===e?void 0:e.href))&&(gn.string(t.source)||gn.undefined(t.source))&&(gn.undefined(t.relatedInformation)||gn.typedArray(t.relatedInformation,h.is))}}(w||(w={})),function(n){n.create=function(n,e){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var i={title:n,command:e};return gn.defined(t)&&t.length>0&&(i.arguments=t),i},n.is=function(n){var e=n;return gn.defined(e)&&gn.string(e.title)&&gn.string(e.command)}}(_||(_={})),function(n){n.replace=function(n,e){return{range:n,newText:e}},n.insert=function(n,e){return{range:{start:n,end:n},newText:e}},n.del=function(n){return{range:n,newText:""}},n.is=function(n){var e=n;return gn.objectLiteral(e)&&gn.string(e.newText)&&a.is(e.range)}}(y||(y={})),function(n){n.create=function(n,e,t){var r={label:n};return void 0!==e&&(r.needsConfirmation=e),void 0!==t&&(r.description=t),r},n.is=function(n){var e=n;return void 0!==e&&gn.objectLiteral(e)&&gn.string(e.label)&&(gn.boolean(e.needsConfirmation)||void 0===e.needsConfirmation)&&(gn.string(e.description)||void 0===e.description)}}(k||(k={})),function(n){n.is=function(n){return"string"===typeof n}}(b||(b={})),function(n){n.replace=function(n,e,t){return{range:n,newText:e,annotationId:t}},n.insert=function(n,e,t){return{range:{start:n,end:n},newText:e,annotationId:t}},n.del=function(n,e){return{range:n,newText:"",annotationId:e}},n.is=function(n){var e=n;return y.is(e)&&(k.is(e.annotationId)||b.is(e.annotationId))}}(E||(E={})),function(n){n.create=function(n,e){return{textDocument:n,edits:e}},n.is=function(n){var e=n;return gn.defined(e)&&D.is(e.textDocument)&&Array.isArray(e.edits)}}(x||(x={})),function(n){n.create=function(n,e,t){var r={kind:"create",uri:n};return void 0===e||void 0===e.overwrite&&void 0===e.ignoreIfExists||(r.options=e),void 0!==t&&(r.annotationId=t),r},n.is=function(n){var e=n;return e&&"create"===e.kind&&gn.string(e.uri)&&(void 0===e.options||(void 0===e.options.overwrite||gn.boolean(e.options.overwrite))&&(void 0===e.options.ignoreIfExists||gn.boolean(e.options.ignoreIfExists)))&&(void 0===e.annotationId||b.is(e.annotationId))}}(C||(C={})),function(n){n.create=function(n,e,t,r){var i={kind:"rename",oldUri:n,newUri:e};return void 0===t||void 0===t.overwrite&&void 0===t.ignoreIfExists||(i.options=t),void 0!==r&&(i.annotationId=r),i},n.is=function(n){var e=n;return e&&"rename"===e.kind&&gn.string(e.oldUri)&&gn.string(e.newUri)&&(void 0===e.options||(void 0===e.options.overwrite||gn.boolean(e.options.overwrite))&&(void 0===e.options.ignoreIfExists||gn.boolean(e.options.ignoreIfExists)))&&(void 0===e.annotationId||b.is(e.annotationId))}}(I||(I={})),function(n){n.create=function(n,e,t){var r={kind:"delete",uri:n};return void 0===e||void 0===e.recursive&&void 0===e.ignoreIfNotExists||(r.options=e),void 0!==t&&(r.annotationId=t),r},n.is=function(n){var e=n;return e&&"delete"===e.kind&&gn.string(e.uri)&&(void 0===e.options||(void 0===e.options.recursive||gn.boolean(e.options.recursive))&&(void 0===e.options.ignoreIfNotExists||gn.boolean(e.options.ignoreIfNotExists)))&&(void 0===e.annotationId||b.is(e.annotationId))}}(A||(A={})),function(n){n.is=function(n){var e=n;return e&&(void 0!==e.changes||void 0!==e.documentChanges)&&(void 0===e.documentChanges||e.documentChanges.every((function(n){return gn.string(n.kind)?C.is(n)||I.is(n)||A.is(n):x.is(n)})))}}(S||(S={}));var P,F,D,L,M,j,O,N,U,W,V,z,H,K,X,B,J,$,q,Q,G,Y,Z,nn,en,tn,rn,on,an,sn,un=function(){function n(n,e){this.edits=n,this.changeAnnotations=e}return n.prototype.insert=function(n,e,t){var r,i;if(void 0===t?r=y.insert(n,e):b.is(t)?(i=t,r=E.insert(n,e,t)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(t),r=E.insert(n,e,i)),this.edits.push(r),void 0!==i)return i},n.prototype.replace=function(n,e,t){var r,i;if(void 0===t?r=y.replace(n,e):b.is(t)?(i=t,r=E.replace(n,e,t)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(t),r=E.replace(n,e,i)),this.edits.push(r),void 0!==i)return i},n.prototype.delete=function(n,e){var t,r;if(void 0===e?t=y.del(n):b.is(e)?(r=e,t=E.del(n,e)):(this.assertChangeAnnotations(this.changeAnnotations),r=this.changeAnnotations.manage(e),t=E.del(n,r)),this.edits.push(t),void 0!==r)return r},n.prototype.add=function(n){this.edits.push(n)},n.prototype.all=function(){return this.edits},n.prototype.clear=function(){this.edits.splice(0,this.edits.length)},n.prototype.assertChangeAnnotations=function(n){if(void 0===n)throw new Error("Text edit change is not configured to manage change annotations.")},n}(),cn=function(){function n(n){this._annotations=void 0===n?Object.create(null):n,this._counter=0,this._size=0}return n.prototype.all=function(){return this._annotations},Object.defineProperty(n.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),n.prototype.manage=function(n,e){var t;if(b.is(n)?t=n:(t=this.nextId(),e=n),void 0!==this._annotations[t])throw new Error("Id "+t+" is already in use.");if(void 0===e)throw new Error("No annotation provided for id "+t);return this._annotations[t]=e,this._size++,t},n.prototype.nextId=function(){return this._counter++,this._counter.toString()},n}();!function(){function n(n){var e=this;this._textEditChanges=Object.create(null),void 0!==n?(this._workspaceEdit=n,n.documentChanges?(this._changeAnnotations=new cn(n.changeAnnotations),n.changeAnnotations=this._changeAnnotations.all(),n.documentChanges.forEach((function(n){if(x.is(n)){var t=new un(n.edits,e._changeAnnotations);e._textEditChanges[n.textDocument.uri]=t}}))):n.changes&&Object.keys(n.changes).forEach((function(t){var r=new un(n.changes[t]);e._textEditChanges[t]=r}))):this._workspaceEdit={}}Object.defineProperty(n.prototype,"edit",{get:function(){return this.initDocumentChanges(),void 0!==this._changeAnnotations&&(0===this._changeAnnotations.size?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),n.prototype.getTextEditChange=function(n){if(D.is(n)){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var e={uri:n.uri,version:n.version};if(!(r=this._textEditChanges[e.uri])){var t={textDocument:e,edits:i=[]};this._workspaceEdit.documentChanges.push(t),r=new un(i,this._changeAnnotations),this._textEditChanges[e.uri]=r}return r}if(this.initChanges(),void 0===this._workspaceEdit.changes)throw new Error("Workspace edit is not configured for normal text edit changes.");var r;if(!(r=this._textEditChanges[n])){var i=[];this._workspaceEdit.changes[n]=i,r=new un(i),this._textEditChanges[n]=r}return r},n.prototype.initDocumentChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._changeAnnotations=new cn,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},n.prototype.initChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._workspaceEdit.changes=Object.create(null))},n.prototype.createFile=function(n,e,t){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var r,i,o;if(k.is(e)||b.is(e)?r=e:t=e,void 0===r?i=C.create(n,t):(o=b.is(r)?r:this._changeAnnotations.manage(r),i=C.create(n,t,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o},n.prototype.renameFile=function(n,e,t,r){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var i,o,a;if(k.is(t)||b.is(t)?i=t:r=t,void 0===i?o=I.create(n,e,r):(a=b.is(i)?i:this._changeAnnotations.manage(i),o=I.create(n,e,r,a)),this._workspaceEdit.documentChanges.push(o),void 0!==a)return a},n.prototype.deleteFile=function(n,e,t){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var r,i,o;if(k.is(e)||b.is(e)?r=e:t=e,void 0===r?i=A.create(n,t):(o=b.is(r)?r:this._changeAnnotations.manage(r),i=A.create(n,t,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o}}();!function(n){n.create=function(n){return{uri:n}},n.is=function(n){var e=n;return gn.defined(e)&&gn.string(e.uri)}}(P||(P={})),function(n){n.create=function(n,e){return{uri:n,version:e}},n.is=function(n){var e=n;return gn.defined(e)&&gn.string(e.uri)&&gn.integer(e.version)}}(F||(F={})),function(n){n.create=function(n,e){return{uri:n,version:e}},n.is=function(n){var e=n;return gn.defined(e)&&gn.string(e.uri)&&(null===e.version||gn.integer(e.version))}}(D||(D={})),function(n){n.create=function(n,e,t,r){return{uri:n,languageId:e,version:t,text:r}},n.is=function(n){var e=n;return gn.defined(e)&&gn.string(e.uri)&&gn.string(e.languageId)&&gn.integer(e.version)&&gn.string(e.text)}}(L||(L={})),function(n){n.PlainText="plaintext",n.Markdown="markdown"}(M||(M={})),function(n){n.is=function(e){var t=e;return t===n.PlainText||t===n.Markdown}}(M||(M={})),function(n){n.is=function(n){var e=n;return gn.objectLiteral(n)&&M.is(e.kind)&&gn.string(e.value)}}(j||(j={})),function(n){n.Text=1,n.Method=2,n.Function=3,n.Constructor=4,n.Field=5,n.Variable=6,n.Class=7,n.Interface=8,n.Module=9,n.Property=10,n.Unit=11,n.Value=12,n.Enum=13,n.Keyword=14,n.Snippet=15,n.Color=16,n.File=17,n.Reference=18,n.Folder=19,n.EnumMember=20,n.Constant=21,n.Struct=22,n.Event=23,n.Operator=24,n.TypeParameter=25}(O||(O={})),function(n){n.PlainText=1,n.Snippet=2}(N||(N={})),function(n){n.Deprecated=1}(U||(U={})),function(n){n.create=function(n,e,t){return{newText:n,insert:e,replace:t}},n.is=function(n){var e=n;return e&&gn.string(e.newText)&&a.is(e.insert)&&a.is(e.replace)}}(W||(W={})),function(n){n.asIs=1,n.adjustIndentation=2}(V||(V={})),function(n){n.create=function(n){return{label:n}}}(z||(z={})),function(n){n.create=function(n,e){return{items:n||[],isIncomplete:!!e}}}(H||(H={})),function(n){n.fromPlainText=function(n){return n.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")},n.is=function(n){var e=n;return gn.string(e)||gn.objectLiteral(e)&&gn.string(e.language)&&gn.string(e.value)}}(K||(K={})),function(n){n.is=function(n){var e=n;return!!e&&gn.objectLiteral(e)&&(j.is(e.contents)||K.is(e.contents)||gn.typedArray(e.contents,K.is))&&(void 0===n.range||a.is(n.range))}}(X||(X={})),function(n){n.create=function(n,e){return e?{label:n,documentation:e}:{label:n}}}(B||(B={})),function(n){n.create=function(n,e){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var i={label:n};return gn.defined(e)&&(i.documentation=e),gn.defined(t)?i.parameters=t:i.parameters=[],i}}(J||(J={})),function(n){n.Text=1,n.Read=2,n.Write=3}($||($={})),function(n){n.create=function(n,e){var t={range:n};return gn.number(e)&&(t.kind=e),t}}(q||(q={})),function(n){n.File=1,n.Module=2,n.Namespace=3,n.Package=4,n.Class=5,n.Method=6,n.Property=7,n.Field=8,n.Constructor=9,n.Enum=10,n.Interface=11,n.Function=12,n.Variable=13,n.Constant=14,n.String=15,n.Number=16,n.Boolean=17,n.Array=18,n.Object=19,n.Key=20,n.Null=21,n.EnumMember=22,n.Struct=23,n.Event=24,n.Operator=25,n.TypeParameter=26}(Q||(Q={})),function(n){n.Deprecated=1}(G||(G={})),function(n){n.create=function(n,e,t,r,i){var o={name:n,kind:e,location:{uri:r,range:t}};return i&&(o.containerName=i),o}}(Y||(Y={})),function(n){n.create=function(n,e,t,r,i,o){var a={name:n,detail:e,kind:t,range:r,selectionRange:i};return void 0!==o&&(a.children=o),a},n.is=function(n){var e=n;return e&&gn.string(e.name)&&gn.number(e.kind)&&a.is(e.range)&&a.is(e.selectionRange)&&(void 0===e.detail||gn.string(e.detail))&&(void 0===e.deprecated||gn.boolean(e.deprecated))&&(void 0===e.children||Array.isArray(e.children))&&(void 0===e.tags||Array.isArray(e.tags))}}(Z||(Z={})),function(n){n.Empty="",n.QuickFix="quickfix",n.Refactor="refactor",n.RefactorExtract="refactor.extract",n.RefactorInline="refactor.inline",n.RefactorRewrite="refactor.rewrite",n.Source="source",n.SourceOrganizeImports="source.organizeImports",n.SourceFixAll="source.fixAll"}(nn||(nn={})),function(n){n.create=function(n,e){var t={diagnostics:n};return void 0!==e&&null!==e&&(t.only=e),t},n.is=function(n){var e=n;return gn.defined(e)&&gn.typedArray(e.diagnostics,w.is)&&(void 0===e.only||gn.typedArray(e.only,gn.string))}}(en||(en={})),function(n){n.create=function(n,e,t){var r={title:n},i=!0;return"string"===typeof e?(i=!1,r.kind=e):_.is(e)?r.command=e:r.edit=e,i&&void 0!==t&&(r.kind=t),r},n.is=function(n){var e=n;return e&&gn.string(e.title)&&(void 0===e.diagnostics||gn.typedArray(e.diagnostics,w.is))&&(void 0===e.kind||gn.string(e.kind))&&(void 0!==e.edit||void 0!==e.command)&&(void 0===e.command||_.is(e.command))&&(void 0===e.isPreferred||gn.boolean(e.isPreferred))&&(void 0===e.edit||S.is(e.edit))}}(tn||(tn={})),function(n){n.create=function(n,e){var t={range:n};return gn.defined(e)&&(t.data=e),t},n.is=function(n){var e=n;return gn.defined(e)&&a.is(e.range)&&(gn.undefined(e.command)||_.is(e.command))}}(rn||(rn={})),function(n){n.create=function(n,e){return{tabSize:n,insertSpaces:e}},n.is=function(n){var e=n;return gn.defined(e)&&gn.uinteger(e.tabSize)&&gn.boolean(e.insertSpaces)}}(on||(on={})),function(n){n.create=function(n,e,t){return{range:n,target:e,data:t}},n.is=function(n){var e=n;return gn.defined(e)&&a.is(e.range)&&(gn.undefined(e.target)||gn.string(e.target))}}(an||(an={})),function(n){n.create=function(n,e){return{range:n,parent:e}},n.is=function(e){var t=e;return void 0!==t&&a.is(t.range)&&(void 0===t.parent||n.is(t.parent))}}(sn||(sn={}));var dn;!function(n){function e(n,t){if(n.length<=1)return n;var r=n.length/2|0,i=n.slice(0,r),o=n.slice(r);e(i,t),e(o,t);for(var a=0,s=0,u=0;a<i.length&&s<o.length;){var c=t(i[a],o[s]);n[u++]=c<=0?i[a++]:o[s++]}for(;a<i.length;)n[u++]=i[a++];for(;s<o.length;)n[u++]=o[s++];return n}n.create=function(n,e,t,r){return new fn(n,e,t,r)},n.is=function(n){var e=n;return!!(gn.defined(e)&&gn.string(e.uri)&&(gn.undefined(e.languageId)||gn.string(e.languageId))&&gn.uinteger(e.lineCount)&&gn.func(e.getText)&&gn.func(e.positionAt)&&gn.func(e.offsetAt))},n.applyEdits=function(n,t){for(var r=n.getText(),i=e(t,(function(n,e){var t=n.range.start.line-e.range.start.line;return 0===t?n.range.start.character-e.range.start.character:t})),o=r.length,a=i.length-1;a>=0;a--){var s=i[a],u=n.offsetAt(s.range.start),c=n.offsetAt(s.range.end);if(!(c<=o))throw new Error("Overlapping edit");r=r.substring(0,u)+s.newText+r.substring(c,r.length),o=u}return r}}(dn||(dn={}));var gn,fn=function(){function n(n,e,t,r){this._uri=n,this._languageId=e,this._version=t,this._content=r,this._lineOffsets=void 0}return Object.defineProperty(n.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),n.prototype.getText=function(n){if(n){var e=this.offsetAt(n.start),t=this.offsetAt(n.end);return this._content.substring(e,t)}return this._content},n.prototype.update=function(n,e){this._content=n.text,this._version=e,this._lineOffsets=void 0},n.prototype.getLineOffsets=function(){if(void 0===this._lineOffsets){for(var n=[],e=this._content,t=!0,r=0;r<e.length;r++){t&&(n.push(r),t=!1);var i=e.charAt(r);t="\r"===i||"\n"===i,"\r"===i&&r+1<e.length&&"\n"===e.charAt(r+1)&&r++}t&&e.length>0&&n.push(e.length),this._lineOffsets=n}return this._lineOffsets},n.prototype.positionAt=function(n){n=Math.max(Math.min(n,this._content.length),0);var e=this.getLineOffsets(),t=0,r=e.length;if(0===r)return o.create(0,n);for(;t<r;){var i=Math.floor((t+r)/2);e[i]>n?r=i:t=i+1}var a=t-1;return o.create(a,n-e[a])},n.prototype.offsetAt=function(n){var e=this.getLineOffsets();if(n.line>=e.length)return this._content.length;if(n.line<0)return 0;var t=e[n.line],r=n.line+1<e.length?e[n.line+1]:this._content.length;return Math.max(Math.min(t+n.character,r),t)},Object.defineProperty(n.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),n}();function ln(n){if(n)return{character:n.column-1,line:n.lineNumber-1}}function hn(n){if(n)return new R.Range(n.start.line+1,n.start.character+1,n.end.line+1,n.end.character+1)}function pn(n){var e=R.languages.CompletionItemKind;switch(n){case O.Text:return e.Text;case O.Method:return e.Method;case O.Function:return e.Function;case O.Constructor:return e.Constructor;case O.Field:return e.Field;case O.Variable:return e.Variable;case O.Class:return e.Class;case O.Interface:return e.Interface;case O.Module:return e.Module;case O.Property:return e.Property;case O.Unit:return e.Unit;case O.Value:return e.Value;case O.Enum:return e.Enum;case O.Keyword:return e.Keyword;case O.Snippet:return e.Snippet;case O.Color:return e.Color;case O.File:return e.File;case O.Reference:return e.Reference}return e.Property}function vn(n){if(n)return{range:hn(n.range),text:n.newText}}!function(n){var e=Object.prototype.toString;n.defined=function(n){return"undefined"!==typeof n},n.undefined=function(n){return"undefined"===typeof n},n.boolean=function(n){return!0===n||!1===n},n.string=function(n){return"[object String]"===e.call(n)},n.number=function(n){return"[object Number]"===e.call(n)},n.numberRange=function(n,t,r){return"[object Number]"===e.call(n)&&t<=n&&n<=r},n.integer=function(n){return"[object Number]"===e.call(n)&&-2147483648<=n&&n<=2147483647},n.uinteger=function(n){return"[object Number]"===e.call(n)&&0<=n&&n<=2147483647},n.func=function(n){return"[object Function]"===e.call(n)},n.objectLiteral=function(n){return null!==n&&"object"===typeof n},n.typedArray=function(n,e){return Array.isArray(n)&&n.every(e)}}(gn||(gn={}));var mn=function(){function n(n){this._worker=n}return Object.defineProperty(n.prototype,"triggerCharacters",{get:function(){return[".",":","<",'"',"=","/"]},enumerable:!1,configurable:!0}),n.prototype.provideCompletionItems=function(n,e,t,r){var i=n.uri;return this._worker(i).then((function(n){return n.doComplete(i.toString(),ln(e))})).then((function(t){if(t){var r=n.getWordUntilPosition(e),i=new R.Range(e.lineNumber,r.startColumn,e.lineNumber,r.endColumn),o=t.items.map((function(n){var e,t,r={label:n.label,insertText:n.insertText||n.label,sortText:n.sortText,filterText:n.filterText,documentation:n.documentation,command:(e=n.command,e&&"editor.action.triggerSuggest"===e.command?{id:e.command,title:e.title,arguments:e.arguments}:void 0),detail:n.detail,range:i,kind:pn(n.kind)};return n.textEdit&&("undefined"!==typeof(t=n.textEdit).insert&&"undefined"!==typeof t.replace?r.range={insert:hn(n.textEdit.insert),replace:hn(n.textEdit.replace)}:r.range=hn(n.textEdit.range),r.insertText=n.textEdit.newText),n.additionalTextEdits&&(r.additionalTextEdits=n.additionalTextEdits.map(vn)),n.insertTextFormat===N.Snippet&&(r.insertTextRules=R.languages.CompletionItemInsertTextRule.InsertAsSnippet),r}));return{isIncomplete:t.isIncomplete,suggestions:o}}}))},n}();function wn(n){return"string"===typeof n?{value:n}:(e=n)&&"object"===typeof e&&"string"===typeof e.kind?"plaintext"===n.kind?{value:n.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:n.value}:{value:"```"+n.language+"\n"+n.value+"\n```\n"};var e}function _n(n){if(n)return Array.isArray(n)?n.map(wn):[wn(n)]}var yn=function(){function n(n){this._worker=n}return n.prototype.provideHover=function(n,e,t){var r=n.uri;return this._worker(r).then((function(n){return n.doHover(r.toString(),ln(e))})).then((function(n){if(n)return{range:hn(n.range),contents:_n(n.contents)}}))},n}();function kn(n){var e=R.languages.DocumentHighlightKind;switch(n){case $.Read:return e.Read;case $.Write:return e.Write;case $.Text:return e.Text}return e.Text}var bn=function(){function n(n){this._worker=n}return n.prototype.provideDocumentHighlights=function(n,e,t){var r=n.uri;return this._worker(r).then((function(n){return n.findDocumentHighlights(r.toString(),ln(e))})).then((function(n){if(n)return n.map((function(n){return{range:hn(n.range),kind:kn(n.kind)}}))}))},n}();function En(n){var e=R.languages.SymbolKind;switch(n){case Q.File:return e.Array;case Q.Module:return e.Module;case Q.Namespace:return e.Namespace;case Q.Package:return e.Package;case Q.Class:return e.Class;case Q.Method:return e.Method;case Q.Property:return e.Property;case Q.Field:return e.Field;case Q.Constructor:return e.Constructor;case Q.Enum:return e.Enum;case Q.Interface:return e.Interface;case Q.Function:return e.Function;case Q.Variable:return e.Variable;case Q.Constant:return e.Constant;case Q.String:return e.String;case Q.Number:return e.Number;case Q.Boolean:return e.Boolean;case Q.Array:return e.Array}return e.Function}var xn=function(){function n(n){this._worker=n}return n.prototype.provideDocumentSymbols=function(n,e){var t=n.uri;return this._worker(t).then((function(n){return n.findDocumentSymbols(t.toString())})).then((function(n){if(n)return n.map((function(n){return{name:n.name,detail:"",containerName:n.containerName,kind:En(n.kind),tags:[],range:hn(n.location.range),selectionRange:hn(n.location.range)}}))}))},n}(),Cn=function(){function n(n){this._worker=n}return n.prototype.provideLinks=function(n,e){var t=n.uri;return this._worker(t).then((function(n){return n.findDocumentLinks(t.toString())})).then((function(n){if(n)return{links:n.map((function(n){return{range:hn(n.range),url:n.target}}))}}))},n}();function In(n){return{tabSize:n.tabSize,insertSpaces:n.insertSpaces}}var An=function(){function n(n){this._worker=n}return n.prototype.provideDocumentFormattingEdits=function(n,e,t){var r=n.uri;return this._worker(r).then((function(n){return n.format(r.toString(),null,In(e)).then((function(n){if(n&&0!==n.length)return n.map(vn)}))}))},n}(),Sn=function(){function n(n){this._worker=n}return n.prototype.provideDocumentRangeFormattingEdits=function(n,e,t,r){var i=n.uri;return this._worker(i).then((function(n){return n.format(i.toString(),function(n){if(n)return{start:ln(n.getStartPosition()),end:ln(n.getEndPosition())}}(e),In(t)).then((function(n){if(n&&0!==n.length)return n.map(vn)}))}))},n}(),Rn=function(){function n(n){this._worker=n}return n.prototype.provideRenameEdits=function(n,e,t,r){var i=n.uri;return this._worker(i).then((function(n){return n.doRename(i.toString(),ln(e),t)})).then((function(n){return function(n){if(!n||!n.changes)return;var e=[];for(var t in n.changes)for(var r=R.Uri.parse(t),i=0,o=n.changes[t];i<o.length;i++){var a=o[i];e.push({resource:r,edit:{range:hn(a.range),text:a.newText}})}return{edits:e}}(n)}))},n}();var Tn=function(){function n(n){this._worker=n}return n.prototype.provideFoldingRanges=function(n,e,t){var r=n.uri;return this._worker(r).then((function(n){return n.getFoldingRanges(r.toString(),e)})).then((function(n){if(n)return n.map((function(n){var e={start:n.startLine+1,end:n.endLine+1};return"undefined"!==typeof n.kind&&(e.kind=function(n){switch(n){case f.Comment:return R.languages.FoldingRangeKind.Comment;case f.Imports:return R.languages.FoldingRangeKind.Imports;case f.Region:return R.languages.FoldingRangeKind.Region}}(n.kind)),e}))}))},n}();var Pn=function(){function n(n){this._worker=n}return n.prototype.provideSelectionRanges=function(n,e,t){var r=n.uri;return this._worker(r).then((function(n){return n.getSelectionRanges(r.toString(),e.map(ln))})).then((function(n){if(n)return n.map((function(n){for(var e=[];n;)e.push({range:hn(n.range)}),n=n.parent;return e}))}))},n}();function Fn(n){var e=new T(n),t=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return e.getLanguageServiceWorker.apply(e,n)},r=n.languageId;R.languages.registerCompletionItemProvider(r,new mn(t)),R.languages.registerHoverProvider(r,new yn(t)),R.languages.registerDocumentHighlightProvider(r,new bn(t)),R.languages.registerLinkProvider(r,new Cn(t)),R.languages.registerFoldingRangeProvider(r,new Tn(t)),R.languages.registerDocumentSymbolProvider(r,new xn(t)),R.languages.registerSelectionRangeProvider(r,new Pn(t)),R.languages.registerRenameProvider(r,new Rn(t)),"html"===r&&(R.languages.registerDocumentFormattingEditProvider(r,new An(t)),R.languages.registerDocumentRangeFormattingEditProvider(r,new Sn(t)))}function Dn(n){var e=[],t=[],r=new T(n);e.push(r);var i=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return r.getLanguageServiceWorker.apply(r,n)};return function(){var e=n.languageId,r=n.modeConfiguration;Mn(t),r.completionItems&&t.push(R.languages.registerCompletionItemProvider(e,new mn(i))),r.hovers&&t.push(R.languages.registerHoverProvider(e,new yn(i))),r.documentHighlights&&t.push(R.languages.registerDocumentHighlightProvider(e,new bn(i))),r.links&&t.push(R.languages.registerLinkProvider(e,new Cn(i))),r.documentSymbols&&t.push(R.languages.registerDocumentSymbolProvider(e,new xn(i))),r.rename&&t.push(R.languages.registerRenameProvider(e,new Rn(i))),r.foldingRanges&&t.push(R.languages.registerFoldingRangeProvider(e,new Tn(i))),r.selectionRanges&&t.push(R.languages.registerSelectionRangeProvider(e,new Pn(i))),r.documentFormattingEdits&&t.push(R.languages.registerDocumentFormattingEditProvider(e,new An(i))),r.documentRangeFormattingEdits&&t.push(R.languages.registerDocumentRangeFormattingEditProvider(e,new Sn(i)))}(),e.push(Ln(t)),Ln(e)}function Ln(n){return{dispose:function(){return Mn(n)}}}function Mn(n){for(;n.length;)n.pop().dispose()}}}]);