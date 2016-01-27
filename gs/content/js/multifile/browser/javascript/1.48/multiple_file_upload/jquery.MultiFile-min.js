if(window.jQuery){(function(a){a.fn.MultiFile=function(c){if(this.length==0){return this}if(typeof arguments[0]=="string"){if(this.length>1){var b=arguments;return this.each(function(){a.fn.MultiFile.apply(a(this),b)})}a.fn.MultiFile[arguments[0]].apply(this,a.makeArray(arguments).slice(1)||[]);return this}var c=a.extend({},a.fn.MultiFile.options,c||{});a("form").not("MultiFile-intercepted").addClass("MultiFile-intercepted").submit(a.fn.MultiFile.disableEmpty);if(a.fn.MultiFile.options.autoIntercept){a.fn.MultiFile.intercept(a.fn.MultiFile.options.autoIntercept);a.fn.MultiFile.options.autoIntercept=null}this.not(".MultiFile-applied").addClass("MultiFile-applied").each(function(){window.MultiFile=(window.MultiFile||0)+1;var e=window.MultiFile;var d={e:this,E:a(this),clone:a(this).clone()};if(typeof c=="number"){c={max:c}}var f=a.extend({},a.fn.MultiFile.options,c||{},(a.metadata?d.E.metadata():(a.meta?d.E.data():null))||{},{});if(!(f.max>0)){f.max=d.E.attr("maxlength")}if(!(f.max>0)){f.max=(String(d.e.className.match(/\b(max|limit)\-([0-9]+)\b/gi)||[""]).match(/[0-9]+/gi)||[""])[0];if(!(f.max>0)){f.max=-1}else{f.max=String(f.max).match(/[0-9]+/gi)[0]}}f.max=new Number(f.max);f.accept=f.accept||d.E.attr("accept")||"";if(!f.accept){f.accept=(d.e.className.match(/\b(accept\-[\w\|]+)\b/gi))||"";f.accept=new String(f.accept).replace(/^(accept|ext)\-/i,"")}a.extend(d,f||{});d.STRING=a.extend({},a.fn.MultiFile.options.STRING,d.STRING);a.extend(d,{n:0,slaves:[],files:[],instanceKey:d.e.id||"MultiFile"+String(e),generateID:function(g){return d.instanceKey+(g>0?"_F"+String(g):"")},trigger:function(j,g){var i=d[j],k=a(g).attr("value");if(i){var h=i(g,k,d);if(h!=null){return h}}return true}});if(String(d.accept).length>1){d.accept=d.accept.replace(/\W+/g,"|").replace(/^\W|\W$/g,"");d.rxAccept=new RegExp("\\.("+(d.accept?d.accept:"")+")$","gi")}d.wrapID=d.instanceKey+"_wrap";d.E.wrap('<div class="MultiFile-wrap" id="'+d.wrapID+'"></div>');d.wrapper=a("#"+d.wrapID+"");d.e.name=d.e.name||"file"+e+"[]";if(!d.list){d.wrapper.append('<div class="MultiFile-list" id="'+d.wrapID+'_list"></div>');d.list=a("#"+d.wrapID+"_list")}d.list=a(d.list);d.addSlave=function(g,h){d.n++;g.MultiFile=d;if(h>0){g.id=g.name=""}if(h>0){g.id=d.generateID(h)}g.name=String(d.namePattern.replace(/\$name/gi,a(d.clone).attr("name")).replace(/\$id/gi,a(d.clone).attr("id")).replace(/\$g/gi,e).replace(/\$i/gi,h));if((d.max>0)&&((d.n-1)>(d.max))){g.disabled=true}d.current=d.slaves[h]=g;g=a(g);g.val("").attr("value","")[0].value="";g.addClass("MultiFile-applied");g.change(function(){a(this).blur();if(!d.trigger("onFileSelect",this,d)){return false}var k="",j=String(this.value||"");if(d.accept&&j&&!j.match(d.rxAccept)){k=d.STRING.denied.replace("$ext",String(j.match(/\.\w{1,4}$/gi)))}for(var l in d.slaves){if(d.slaves[l]&&d.slaves[l]!=this){if(d.slaves[l].value==j){k=d.STRING.duplicate.replace("$file",j.match(/[^\/\\]+$/gi))}}}var i=a(d.clone).clone();i.addClass("MultiFile");if(k!=""){d.error(k);d.n--;d.addSlave(i[0],h);g.parent().prepend(i);g.remove();return false}a(this).css({position:"absolute",top:"-3000px"});g.after(i);d.addToList(this,h);d.addSlave(i[0],h+1);if(!d.trigger("afterFileSelect",this,d)){return false}});a(g).data("MultiFile",d)};d.addToList=function(j,l){if(!d.trigger("onFileAppend",j,d)){return false}var k=a('<div class="MultiFile-label"></div>'),i=String(j.value||""),h=a('<span class="MultiFile-title" title="'+d.STRING.selected.replace("$file",i)+'">'+d.STRING.file.replace("$file",i.match(/[^\/\\]+$/gi)[0])+"</span>"),g=a('<a class="MultiFile-remove" href="#'+d.wrapID+'">'+d.STRING.remove+"</a>");d.list.append(k.append(h," ",g));g.click(function(){if(!d.trigger("onFileRemove",j,d)){return false}d.n--;d.current.disabled=false;d.slaves[l]=null;a(j).remove();a(this).parent().remove();a(d.current).css({position:"",top:""});a(d.current).reset().val("").attr("value","")[0].value="";if(!d.trigger("afterFileRemove",j,d)){return false}return false});if(!d.trigger("afterFileAppend",j,d)){return false}};if(!d.MultiFile){d.addSlave(d.e,0)}d.n++;d.E.data("MultiFile",d)})};a.extend(a.fn.MultiFile,{reset:function(){var b=a(this).data("MultiFile");if(b){b.list.find("a.MultiFile-remove").click()}return a(this)},disableEmpty:function(b){b=(typeof(b)=="string"?b:"")||"mfD";var c=[];a("input:file.MultiFile").each(function(){if(a(this).val()==""){c[c.length]=this}});return a(c).each(function(){this.disabled=true}).addClass(b)},reEnableEmpty:function(b){b=(typeof(b)=="string"?b:"")||"mfD";return a("input:file."+b).removeClass(b).each(function(){this.disabled=false})},intercepted:{},intercept:function(b,e,c){var g,f;c=c||[];if(c.constructor.toString().indexOf("Array")<0){c=[c]}if(typeof(b)=="function"){a.fn.MultiFile.disableEmpty();f=b.apply(e||window,c);setTimeout(function(){a.fn.MultiFile.reEnableEmpty()},1000);return f}if(b.constructor.toString().indexOf("Array")<0){b=[b]}for(var d=0;d<b.length;d++){g=b[d]+"";if(g){(function(h){a.fn.MultiFile.intercepted[h]=a.fn[h]||function(){};a.fn[h]=function(){a.fn.MultiFile.disableEmpty();f=a.fn.MultiFile.intercepted[h].apply(this,arguments);setTimeout(function(){a.fn.MultiFile.reEnableEmpty()},1000);return f}})(g)}}}});a.fn.MultiFile.options={accept:"",max:-1,namePattern:"$name",STRING:{remove:"x",denied:"You cannot select a $ext file.\nTry again...",file:"$file",selected:"File selected: $file",duplicate:"This file has already been selected:\n$file"},autoIntercept:["submit","ajaxSubmit","ajaxForm","validate","valid"],error:function(b){alert(b)}};a.fn.reset=function(){return this.each(function(){try{this.reset()}catch(b){}})};a(function(){a("input[type=file].multi").MultiFile()})})(jQuery)};