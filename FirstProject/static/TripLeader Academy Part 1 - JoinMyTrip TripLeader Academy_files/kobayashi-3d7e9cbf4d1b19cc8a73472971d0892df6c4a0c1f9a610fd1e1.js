(function(){var e;e=function(){var e,n,i,t,a;function Analytics(){}return i=[],n="utm_source utm_medium utm_campaign utm_content utm_term".split(" "),5,e=500,Analytics.prototype.identify_for_thinkific=function(n,i,t,l){var o,p,r,s,c,u,f,m;return null==l&&(l={}),m=Object.assign(l,{user_id:n,tenant_id:i,"Customer Status":t["Subscription Plan"]}),p=a("first"),r=a("last"),s=Object.assign(r,m),u=Object.assign(p,t),c=Object.assign(r,t),null==("undefined"!=typeof mixpanel&&null!==mixpanel?mixpanel.config:void 0)?(o=0,f=function(){if(null!=("undefined"!=typeof mixpanel&&null!==mixpanel?mixpanel.config:void 0)){if(mixpanel.identify(n),mixpanel.register(s),null!=t)return mixpanel.people.set_once(u),mixpanel.people.set(c)}else if(!(o>=5))return o++,setTimeout(f,e)},setTimeout(f,e)):(mixpanel.identify(n),mixpanel.register(s),null!=t?(mixpanel.people.set_once(u),mixpanel.people.set(c)):void 0)},Analytics.prototype.identify_for_tenant=function(n,i,t){var a,l;if(null!=("undefined"!=typeof mixpanel&&null!==mixpanel?mixpanel.config:void 0)?(mixpanel.identify(n.email),mixpanel.register({user_id:n.user_id,tenant_id:n.tenant_id}),null!=i&&mixpanel.people.set(i)):(a=0,l=function(){if(null!=("undefined"!=typeof mixpanel&&null!==mixpanel?mixpanel.config:void 0)){if(mixpanel.identify(n.email),mixpanel.register({user_id:n.user_id,tenant_id:n.tenant_id}),null!=i)return mixpanel.people.set(i)}else if(!(a>=5))return a++,setTimeout(l,e)},setTimeout(l,e)),"undefined"!=typeof analytics&&null!==analytics)return null==t&&(t={}),analytics.identify(n.email,t)},Analytics.prototype.alias_for_site_owner=function(e,n){if("undefined"!=typeof mixpanel&&null!==mixpanel)return mixpanel.alias(e,n)},Analytics.prototype.alias_for_thinkific=function(e){if("undefined"!=typeof mixpanel&&null!==mixpanel)return mixpanel.alias(e)},Analytics.prototype.alias_for_tenant=function(e){if("undefined"!=typeof mixpanel&&null!==mixpanel)return mixpanel.alias(e)},Analytics.prototype.name_tag=function(e){if(null!=("undefined"!=typeof mixpanel&&null!==mixpanel?mixpanel.config:void 0))return mixpanel.name_tag(e)},Analytics.prototype.track=function(e,n,i){"undefined"!=typeof analytics&&null!==analytics&&analytics.track(e,n),null!=("undefined"!=typeof mixpanel&&null!==mixpanel?mixpanel.track:void 0)&&(null!=mixpanel.config?mixpanel.track(e,n,i):(mixpanel.track(e,n),"function"==typeof i&&i()))},Analytics.prototype.track_for_thinkific_system=function(e,n,t){var a;return null!=("undefined"!=typeof mixpanel&&null!==mixpanel&&null!=(a=mixpanel.thinkific_system)?a.config:void 0)?mixpanel.thinkific_system.track(e,n,t):(i.push({action:e,data:n}),"function"==typeof t?t():void 0)},Analytics.prototype.process_system_events_queue=function(){var e,n=this;if(null!=("undefined"!=typeof mixpanel&&null!==mixpanel&&null!=(e=mixpanel.thinkific_system)?e.config:void 0))return i.forEach((function(e){var i,t;return i=e.action,t=e.data,n.track_for_thinkific_system(i,t)})),i=[]},Analytics.prototype.track_links=function(e,n,i){"undefined"!=typeof mixpanel&&null!==mixpanel&&mixpanel.track_links(e,n,i)},Analytics.prototype.track_charge=function(e){null!=("undefined"!=typeof mixpanel&&null!==mixpanel?mixpanel.people:void 0)&&mixpanel.people.track_charge(e)},t=function(e,n){var i;return n=n.replace(/[[]/,"[").replace(/[]]/,"]"),null===(i=new RegExp("[?&]"+n+"=([^&#]*)").exec(e))||i&&"string"!=typeof i[1]&&i[1].length?"":decodeURIComponent(i[1]).replace(/\W/gi," ")},a=function(e){var i,a,l,o,p;for(l={},i=o=0,p=n.length-1;0<=p?o<=p:o>=p;i=0<=p?++o:--o)(a=t(document.URL,n[i])).length&&(l[n[i]+" ["+e+"touch]"]=a);return l},Analytics}(),window.ThinkificAnalytics=new e}).call(this),function(e,n){function Filestack(e){this.options=this.nonEmptyDeepMerge(this.defaultOptions,e)}Filestack.prototype.nonEmptyDeepMerge=function(e,n){var i=e;for(var t in n)if(Array.isArray(n[t])&&0!==n[t].length)i[t]=n[t];else if("object"==typeof n[t])i[t]=e[t],arguments.callee(e[t],n[t]);else switch(n[t]){case null:case void 0:case"":i[t]=e[t];break;default:i[t]=n[t]}return i},Filestack.prototype.brandElement=".fsp-picker__brand",Filestack.prototype.filestackCdnUrl="https://cdn.filestackcontent.com/",Filestack.prototype.compressionEndpoint="https://cdn.filestackcontent.com/output=compress:true/",Filestack.prototype.awsRootUrl="https://s3.amazonaws.com/",Filestack.prototype.removeWatermark=function(){e.setTimeout((function(){$(Filestack.prototype.brandElement).hide()}),280)},Filestack.prototype.uploadsStartedAction=function(){$(".loader").removeClass("hidden")},Filestack.prototype.defaultOptions={accept:["image/jpeg","image/png","image/gif","image/tiff","image/bmp"],fromSources:["local_file_system","url","imagesearch","facebook","instagram","googledrive","dropbox","onedrive"],exposeOriginalFile:!0,transformations:{crop:{aspectRatio:16/9},circle:!1,rotate:!0},storeTo:{location:"s3",access:"public",region:"us-east-1"},onUploadStarted:Filestack.prototype.uploadsStartedAction,onOpen:Filestack.prototype.removeWatermark,maxSize:10485760,// 10MB
maxFiles:1,uploadInBackground:!1},Filestack.prototype.open=function(){e.filestack&&
// This checks to ensure the security policy has not expired.
Date.now()/1e3<JSON.parse(atob(e.filestack.session.policy)).expiry?e.filestack.picker(this.options).open():e.confirm("Your session has timed out, please click 'OK' to refresh the page. If you have unsaved changes, click 'Cancel' and refresh your browser after saving.")&&
// Evaluates only when 'OK' is clicked
e.location.reload()},Filestack.prototype.cancel=function(){e.filestack?e.filestack.picker(this.options).close():e.confirm("There was an error loading this page. Please be patient as we reload!")&&
// Evaluates only when 'OK' is clicked
e.location.reload()},n.Filestack=n.Filestack||Filestack}(window,window.Thinkific);