(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+73+":function(e,t,a){e.exports={layout:"DocLayout-module--layout--2m-0z",main:"DocLayout-module--main--3L6xJ"}},"ATu/":function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a("q1tI"),i=a.n(n),r=a("wZee"),o=a.n(r),s=(a("Veyx"),a("qhky")),l=a("Wbzz"),c=a("3aSG"),u=a.n(c),m=a("IgYj"),d=a.n(m);function p(){return i.a.createElement("nav",{className:d.a.sidebar},i.a.createElement("div",{className:d.a.logo},i.a.createElement(l.a,{to:"/"},i.a.createElement("img",{src:u.a}))),i.a.createElement("h2",null,"Documentation"),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(l.a,{activeClassName:d.a.active,to:"/docs"},"Home")),i.a.createElement("li",null,i.a.createElement(l.a,{activeClassName:d.a.active,to:"/docs/styles"},"Styles")),i.a.createElement("li",null,i.a.createElement(l.a,{activeClassName:d.a.active,to:"/docs/custom"},"Custom Emojis")),i.a.createElement("li",null,i.a.createElement(l.a,{activeClassName:d.a.active,to:"/docs/themes"},"Themes")),i.a.createElement("li",null,i.a.createElement(l.a,{activeClassName:d.a.active,to:"/docs/recents"},"Recent Emojis")),i.a.createElement("li",null,i.a.createElement(l.a,{activeClassName:d.a.active,to:"/docs/position"},"Positioning")),i.a.createElement("li",null,i.a.createElement(l.a,{activeClassName:d.a.active,to:"/docs/customize"},"Customization")),i.a.createElement("li",null,i.a.createElement(l.a,{activeClassName:d.a.active,to:"/docs/i18n"},"I18N Strings"))),i.a.createElement("h2",null,"Reference"),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(l.a,{activeClassName:d.a.active,to:"/docs/api"},"API"))))}var E=a("+73+"),f=a.n(E);function h(e){var t=e.children;return Object(n.useEffect)((function(){o.a.highlightAll()}),[]),i.a.createElement("div",{className:f.a.layout},i.a.createElement(s.a,null,i.a.createElement("title",null,"Emoji Button")),i.a.createElement(p,null),i.a.createElement("main",{className:f.a.main},t))}},INYr:function(e,t,a){"use strict";var n=a("XKFU"),i=a("CkkT")(6),r="findIndex",o=!0;r in[]&&Array(1)[r]((function(){o=!1})),n(n.P+n.F*o,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(r)},IgYj:function(e,t,a){e.exports={sidebar:"Sidebar-module--sidebar--2OrhV",logo:"Sidebar-module--logo--2CVgv",active:"Sidebar-module--active--1dRAY"}},NZH4:function(e,t){e.exports="const picker = new EmojiButton({\n  showCategoryButtons: false,\n  showSearch: false,\n  showPreview: false,\n  showRecents: false\n});\n"},"Pu/o":function(e,t){e.exports="const picker = new EmojiButton({\n  categories: ['smileys', 'flags']\n});\n"},RgaQ:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a("dKDz"),i=a.n(n),r=a("q1tI"),o=a.n(r);function s(e){var t=e.src;return o.a.createElement("pre",null,o.a.createElement("code",{className:"language-javascript",dangerouslySetInnerHTML:{__html:i()(t)}}))}},SLtz:function(e,t,a){e.exports={emojiButton:"Example-module--emoji-button---ihCG"}},"VSU+":function(e,t){e.exports="const picker = new EmojiButton({\n  initialCategory: 'flags'\n});\n"},Veyx:function(e,t,a){a("Oyvg"),function(e){var t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",a={environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)\w+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b\w+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+?)\s*(?:\r?\n|\r)[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:a},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s*(?:\r?\n|\r)[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\](?:\\\\)*)(["'])(?:\\[\s\S]|\$\([^)]+\)|`[^`]+`|(?!\2)[^\\])*\2/,lookbehind:!0,greedy:!0,inside:a}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},variable:a.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|==?|!=?|=~|<<[<-]?|[&\d]?>>|\d?[<>]&?|&[>&]?|\|[&|]?|<=?|>=?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}};for(var n=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],i=a.variable[1].inside,r=0;r<n.length;r++)i[n[r]]=e.languages.bash[n[r]];e.languages.shell=e.languages.bash}(Prism)},WDxw:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("q1tI"),i=a.n(n),r=a("yLlt"),o=a("SLtz"),s=a.n(o);function l(e){var t=e.initialEmoji,a=void 0===t?"😎":t,o=e.initialImageUrl,l=e.options,c=Object(n.useRef)(),u=Object(n.useState)(null),m=u[0],d=u[1],p=Object(n.useState)(a),E=p[0],f=p[1],h=Object(n.useState)(o),S=h[0],g=h[1];return Object(n.useEffect)((function(){var e=new r.a(l);e.on("emoji",(function(e){f(e.emoji),g(e.url)})),d(e)}),[]),i.a.createElement("button",{className:s.a.emojiButton,ref:c,onClick:function(){m.togglePicker(c.current)}},S?i.a.createElement("img",{alt:E,src:S}):i.a.createElement("span",null,E))}},Wbzz:function(e,t,a){"use strict";a("xfY5"),a("q1tI");var n=a("+ZDr"),i=a.n(n);a.d(t,"a",(function(){return i.a}));a("lw3w"),a("emEt").default.enqueue},Yh9A:function(e,t){e.exports="const picker = new EmojiButton({\n  emojiVersion: '1.0'\n});\n"},ZbeU:function(e,t){e.exports="const picker = new EmojiButton({\n  autoHide: false\n});\n"},dKDz:function(e,t,a){"use strict";var n=/["'&<>]/;e.exports=function(e){var t,a=""+e,i=n.exec(a);if(!i)return a;var r="",o=0,s=0;for(o=i.index;o<a.length;o++){switch(a.charCodeAt(o)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#39;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}s!==o&&(r+=a.substring(s,o)),s=o+1,r+=t}return s!==o?r+a.substring(s,o):r}},dRSK:function(e,t,a){"use strict";var n=a("XKFU"),i=a("CkkT")(5),r=!0;"find"in[]&&Array(1).find((function(){r=!1})),n(n.P+n.F*r,"Array",{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")("find")},lw3w:function(e,t,a){var n;e.exports=(n=a("rzlk"))&&n.default||n},"n+uC":function(e,t){e.exports="const picker = new EmojiButton({\n  emojiSize: '64px',\n  emojisPerRow: 4,\n  rows: 4\n});\n"},rzlk:function(e,t,a){"use strict";a.r(t);a("91GP");var n=a("q1tI"),i=a.n(n),r=a("IOVJ");t.default=function(e){var t=e.location,a=e.pageResources;return a?i.a.createElement(r.a,Object.assign({location:t,pageResources:a},a.json)):null}},vG93:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return I}));var n=a("q1tI"),i=a.n(n),r=a("ATu/"),o=a("WDxw"),s=a("RgaQ"),l=a("ZbeU"),c=a.n(l),u=a("Pu/o"),m=a.n(u),d=a("n+uC"),p=a.n(d),E=a("Yh9A"),f=a.n(E),h=a("VSU+"),S=a.n(h),g=a("NZH4"),b=a.n(g);function I(){return i.a.createElement(r.a,null,i.a.createElement("h1",null,"Customization"),i.a.createElement("p",null,"Emoji Button's user interface is heavily customizable. Most interface elements can be customized or removed altogether. This page will go over the various customization options."),i.a.createElement("h2",null,"Disable auto-hide"),i.a.createElement("p",null,"By default, the picker is hidden when an emoji is selected. This can be changed by setting ",i.a.createElement("code",null,"autoHide")," to ",i.a.createElement("code",null,"false"),". To hide the picker, click anywhere outside of it in the document or call"," ",i.a.createElement("code",null,"togglePicker")," or ",i.a.createElement("code",null,"hidePicker"),"."),i.a.createElement(o.a,{options:{autoHide:!1}}),i.a.createElement(s.a,{src:c.a}),i.a.createElement("h2",null,"Specify categories"),i.a.createElement("p",null,"By default, all categories are shown. You can specify a list of categories, and the picker will only show those categories. The recents category is always included by default, but it can be disabled by setting ",i.a.createElement("code",null,"showRecents")," to ",i.a.createElement("code",null,"false"),"."),i.a.createElement(o.a,{options:{categories:["smileys","flags"]}}),i.a.createElement(s.a,{src:m.a}),i.a.createElement("h2",null,"Size customizations"),i.a.createElement("p",null,"The emoji size, number of emojis per row, and number of visible rows can all be configured."),i.a.createElement(o.a,{options:{emojiSize:"64px",emojisPerRow:4,rows:4}}),i.a.createElement(s.a,{src:p.a}),i.a.createElement("h2",null,"Emoji version"),i.a.createElement("p",null,"By default, Emoji Button shows all the emojis in the Emoji 12.1 specification. If desired, an older version of the Emoji specification can be used."),i.a.createElement(o.a,{options:{emojiVersion:"1.0"}}),i.a.createElement(s.a,{src:f.a}),i.a.createElement("h2",null,"Initial category"),i.a.createElement("p",null,"By default, the picker starts out showing the Smileys & Emotion category. This can be changed if desired."),i.a.createElement(o.a,{options:{initialCategory:"flags"}}),i.a.createElement(s.a,{src:S.a}),i.a.createElement("h2",null,"Hiding UI elements"),i.a.createElement("p",null,"The various UI elements can be hidden if desired, to create a more minimal picker UI."),i.a.createElement(o.a,{options:{showCategoryButtons:!1,showSearch:!1,showPreview:!1,showRecents:!1}}),i.a.createElement(s.a,{src:b.a}))}},xfY5:function(e,t,a){"use strict";var n=a("dyZX"),i=a("aagx"),r=a("LZWt"),o=a("Xbzi"),s=a("apmT"),l=a("eeVq"),c=a("kJMx").f,u=a("EemH").f,m=a("hswa").f,d=a("qncB").trim,p=n.Number,E=p,f=p.prototype,h="Number"==r(a("Kuth")(f)),S="trim"in String.prototype,g=function(e){var t=s(e,!1);if("string"==typeof t&&t.length>2){var a,n,i,r=(t=S?t.trim():d(t,3)).charCodeAt(0);if(43===r||45===r){if(88===(a=t.charCodeAt(2))||120===a)return NaN}else if(48===r){switch(t.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+t}for(var o,l=t.slice(2),c=0,u=l.length;c<u;c++)if((o=l.charCodeAt(c))<48||o>i)return NaN;return parseInt(l,n)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof p&&(h?l((function(){f.valueOf.call(a)})):"Number"!=r(a))?o(new E(g(t)),a,p):g(t)};for(var b,I=a("nh4g")?c(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;I.length>N;N++)i(E,b=I[N])&&!i(p,b)&&m(p,b,u(E,b));p.prototype=f,f.constructor=p,a("KroJ")(n,"Number",p)}}}]);
//# sourceMappingURL=component---src-pages-docs-customize-js-f6d70ca66bfc32993154.js.map