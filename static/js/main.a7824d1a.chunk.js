(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,a){e.exports=a(290)},110:function(e,t,a){},286:function(e,t,a){},290:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(16),o=a.n(r),c=(a(110),a(30)),l=a.n(c),i=a(57),u=a(38),p=a(39),m=a(41),h=a(40),d=a(42),b=a(58),f=a.n(b),g=a(101),w=a.n(g),y=a(20),E=a.n(y),v=a(102),k=a.n(v),x=a(19),S=Object(x.withStyles)(function(e){return{textField:{margin:e.spacing.unit,width:"100%"},button:{margin:e.spacing.unit,width:"100%",backgroundColor:["#26c6da"].join(","),"&:hover":{backgroundColor:"#26c6da"}}}})(function(e){return n.a.createElement("form",{onSubmit:e.getNews},n.a.createElement(E.a,{container:!0,spacing:8,alignItems:"center"},n.a.createElement(E.a,{item:!0,xs:9},n.a.createElement(w.a,{className:e.classes.textField,label:"Search by keyword",margin:"normal",name:"keyword",type:"search",variant:"outlined",InputLabelProps:{required:!0,color:"white",shrink:!0}})),n.a.createElement(E.a,{item:!0,xs:3},n.a.createElement(k.a,{className:e.classes.button,color:"primary",type:"submit",variant:"contained"},"Search"))))}),O=Object(x.withStyles)({root:{width:"96%",margin:"2rem 2%",backgroundColor:"#fff"},title:{marginTop:0}})(function(e){return n.a.createElement(E.a,{className:e.classes.root,container:!0,spacing:32},n.a.createElement(E.a,{item:!0,md:4},n.a.createElement("a",{href:e.url},e.urlToImage&&n.a.createElement("img",{src:e.urlToImage,alt:e.title}),!e.urlToImage&&n.a.createElement("p",null,"Source"))),n.a.createElement(E.a,{item:!0,md:8},n.a.createElement("h3",{className:e.classes.title},e.title),n.a.createElement("p",null,n.a.createElement("em",null,null!==e.author&&"By ".concat(e.author,". "),"From ",n.a.createElement("a",{href:e.url},e.source),". Published at ",e.publishedAt)),n.a.createElement("p",null,e.content),n.a.createElement("p",null,n.a.createElement("em",null,""!==e.description&&"Description: ".concat(e.description)))))}),j=a(21),C=a(103),R=a.n(C),N=a(27),I=a.n(N),T=function(e){function t(){var e,a;Object(u.a)(this,t);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(n)))).state={value:0},a.handleChange=function(e,t){a.setState({value:t}),a.props.onChange(e,t)},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return n.a.createElement(R.a,{value:this.state.value,classes:{root:this.props.classes.root},showLabels:!0,onChange:this.handleChange},n.a.createElement(I.a,{label:"USA",value:"us",classes:{root:this.props.classes.actionRoot,label:this.props.classes.label,selected:this.props.classes.selected}}),n.a.createElement(I.a,{label:"Canada",value:"ca",classes:{root:this.props.classes.actionRoot,label:this.props.classes.label,selected:this.props.classes.selected}}),n.a.createElement(I.a,{label:"Search Results",value:"",classes:{root:this.props.classes.searchResultRoot,label:this.props.classes.label,selected:this.props.classes.selected}}),n.a.createElement(I.a,{label:"France",value:"fr",classes:{root:this.props.classes.actionRoot,label:this.props.classes.label,selected:this.props.classes.selected}}),n.a.createElement(I.a,{label:"Belgium",value:"be",classes:{root:this.props.classes.actionRoot,label:this.props.classes.label,selected:this.props.classes.selected}}))}}]),t}(s.Component),A=Object(x.withStyles)(function(e){var t,a;return{root:{width:"100%",height:"auto",flexFlow:"row wrap"},actionRoot:(t={backgroundColor:"rgba(0,0,0,.1)",border:"1px solid #fff",flex:"1 0 120px"},Object(j.a)(t,e.breakpoints.down("709"),{flexBasis:"50%"}),Object(j.a)(t,"maxWidth","initial"),Object(j.a)(t,"textTransform","uppercase"),t),searchResultRoot:(a={backgroundColor:"rgba(0,0,0,.1)",border:"1px solid #fff",flex:"1 0 120px"},Object(j.a)(a,e.breakpoints.down("709"),{order:-1,flexBasis:"100%"}),Object(j.a)(a,"maxWidth","initial"),Object(j.a)(a,"textTransform","uppercase"),a),label:Object(j.a)({padding:"1rem 0",fontSize:"14px"},e.breakpoints.down("709"),{paddingTop:".5rem",paddingBottom:".5rem"}),selected:{color:"#fff",backgroundColor:"#26c6da"}}})(T),B=function(){return n.a.createElement("footer",{style:{textAlign:"center",marginTop:"1rem"}},n.a.createElement("p",{style:{margin:0,fontSize:11}},"Powered by ",n.a.createElement("a",{href:"https://newsapi.org/"},"NewsAPI.org")," and ",n.a.createElement("a",{href:"https://material-ui.com/"},"Material-UI")))},F=a(104),M=a.n(F),P=(a(286),"c623fcd5cea74839a040e2976927b039"),W=function(e){function t(){var e,a;Object(u.a)(this,t);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(n)))).state={keyword:"",country:"",status:"",totalResults:0,articles:[],success:!1,error:null},a.handleOnChange=function(){var e=Object(i.a)(l.a.mark(function e(t,s){var n,r,o,c;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.setState({country:s});case 2:return n=a.state,r=n.keyword,o=n.country,c="https://newsapi.org/v2/top-headlines?q=".concat(r,"&country=").concat(o,"&apiKey=").concat(P),console.log(c),e.next=7,f.a.get(c).then(function(e){return e.data}).then(function(e){a.setState({status:e.status,totalResults:e.totalResults,articles:e.articles,error:e.status.message})}).catch(function(e){null!==e&&a.setState({error:e.response.status})});case 7:0!==a.state.totalResults?a.setState({success:!0,error:""}):""!==o?a.setState({success:!1,error:'Cound not find any news about "'.concat(r,'" in country code "').concat(o,'".')}):a.setState({error:'Cound not find any news about "'.concat(r,'".')}),r||o||a.setState({success:!1,error:"Missing a keyword!"});case 9:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),a.getNews=function(){var e=Object(i.a)(l.a.mark(function e(t){var s,n,r,o;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,a.setState({country:"",keyword:t.target.elements.keyword.value});case 3:return s=a.state,n=s.keyword,r=s.country,o="https://newsapi.org/v2/top-headlines?q=".concat(n,"&country=").concat(r,"&apiKey=").concat(P),console.log(o),e.next=8,f.a.get(o).then(function(e){return e.data}).then(function(e){a.setState({status:e.status,totalResults:e.totalResults,articles:e.articles,success:!1,error:e.status.message})}).catch(function(e){a.setState({error:e.response.status})});case 8:0!==a.state.totalResults?a.setState({success:!0}):a.setState({error:'Cound not find any news about "'.concat(n,'".')}),n||a.setState({country:"",success:!1,error:"Missing a keyword!"});case 10:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return n.a.createElement(M.a,null,n.a.createElement("div",{className:"wrapper"},n.a.createElement("div",{className:"main"},n.a.createElement("h1",{className:"site-title"},"Daily News by Maggie "),n.a.createElement(S,{getNews:this.getNews}),n.a.createElement(A,{value:this.props.value,onChange:this.handleOnChange}),n.a.createElement("div",{className:"article-section"},!this.state.success&&n.a.createElement("p",{style:{textAlign:"center"}},this.state.error),this.state.success&&this.state.articles.slice(0,10).map(function(e,t){return n.a.createElement(O,{key:t,source:e.source.name,author:e.author,title:e.title,description:e.description,url:e.url,urlToImage:e.urlToImage,publishedAt:e.publishedAt,content:e.content})}))),n.a.createElement(B,null)))}}]),t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[105,2,1]]]);
//# sourceMappingURL=main.a7824d1a.chunk.js.map