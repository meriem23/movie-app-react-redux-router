(this["webpackJsonpmovie-app-react-redux"]=this["webpackJsonpmovie-app-react-redux"]||[]).push([[0],{47:function(e,t,a){e.exports=a(61)},52:function(e,t,a){},53:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(11),o=a.n(i),c=(a(52),a(53),a(54),a(13)),l=a(14),s=a(15),m=a(16),d=a(21),u=a.n(d),p=a(9),h=a(28),v=a(63),E=a(65),f=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleShow=function(){n.setState({show:!n.state.show})},n.handleChange=function(e){n.setState(Object(h.a)({},e.target.name,e.target.value))},n.add=function(){var e={id:Object(E.a)(),name:n.state.name,image:n.state.image,year:n.state.year,rating:n.state.rating,description:n.state.description,trailer:n.state.trailer};n.props.addNewMovie(e),n.setState({show:!1})},n.editM=function(){n.props.EditMovie(n.props.movieToEdit.id,n.state),n.setState({show:!1})},n.state={show:!1,name:n.props.editMode?n.props.movieToEdit.name:"",image:n.props.editMode?n.props.movieToEdit.image:"",year:n.props.editMode?n.props.movieToEdit.year:"",rating:n.props.editMode?n.props.movieToEdit.rating:"",description:n.props.editMode?n.props.movieToEdit.description:"",trailer:n.props.editMode?n.props.movieToEdit.trailer:""},n}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("i",{className:"far fa-edit editIcon",onClick:this.handleShow}),r.a.createElement(v.a,{show:this.state.show,onHide:this.handleShow},r.a.createElement(v.a.Header,{closeButton:!0},r.a.createElement(v.a.Title,null,"Movie Informations")),r.a.createElement(v.a.Body,null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("label",null,"Title:"),r.a.createElement("input",{type:"text",name:"name",onChange:this.handleChange,value:this.state.name})),r.a.createElement("div",null,r.a.createElement("label",null,"Image:"),r.a.createElement("input",{type:"text",name:"image",onChange:this.handleChange,value:this.state.image})),r.a.createElement("div",null,r.a.createElement("label",null,"Rating:"),r.a.createElement("input",{type:"text",name:"rating",onChange:this.handleChange,value:this.state.rating})),r.a.createElement("div",null,r.a.createElement("label",null,"Year:"),r.a.createElement("input",{type:"text",name:"year",onChange:this.handleChange,value:this.state.year})),r.a.createElement("div",null,r.a.createElement("label",null,"Description:"),r.a.createElement("input",{type:"text",name:"description",onChange:this.handleChange,value:this.state.discription})),r.a.createElement("div",null,r.a.createElement("label",null,"Trailer:"),r.a.createElement("input",{type:"text",name:"trailer",onChange:this.handleChange,value:this.state.trailer})))),r.a.createElement(v.a.Footer,null,r.a.createElement("button",{className:"editOradd",onClick:this.props.editMode?this.editM:this.add},this.props.editMode?"Edit":"Add Movie"))))}}]),a}(n.Component),g=Object(p.b)(null,(function(e){return{addNewMovie:function(t){return e(function(e){return{type:"ADD_MOVIE",payload:e}}(t))},EditMovie:function(t,a){return e(function(e,t){return{type:"EDIT_MOVIE",payload:{id:e,updatedMovie:t}}}(t,a))}}}))(f),b=a(23),y=Object(p.b)(null,(function(e){return{deleteM:function(t){return e(function(e){return{type:"DELETE_MOVIE",payload:e}}(t))}}}))((function(e){var t=e.movie,a=e.deleteM;return r.a.createElement("div",{className:"card"},r.a.createElement("img",{className:"movieImg",src:t.image}),r.a.createElement("div",{className:"hoverText"},r.a.createElement("p",{className:"movieText"},t.name," ",r.a.createElement("br",null)," ",t.year),r.a.createElement("div",{className:"movieRating"},r.a.createElement(u.a,{name:"rate1",starCount:5,value:t.rating})),r.a.createElement(b.b,{to:"/movie/".concat(t.id)},r.a.createElement("i",{class:"fas fa-info infoIcon"})),r.a.createElement("div",{className:"deleteAndedit"},r.a.createElement("i",{className:"far fa-trash-alt delIcon",onClick:function(){return a(t.id)}}),r.a.createElement(g,{editMode:!0,movieToEdit:t,className:"edit"}))))})),w=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"movieList"},this.props.AllData.movies.filter((function(t){return t.rating>=e.props.AllData.rating&&t.name.toLowerCase().includes(e.props.AllData.keyword.trim().toLowerCase())})).map((function(e){return r.a.createElement(y,{movie:e})})))}}]),a}(n.Component),O=Object(p.b)((function(e){return{AllData:e.MovieReducers}}))(w),M=a(64),j=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onStarClick=function(e,t,a){n.setState({rating:e},(function(){return n.props.getRating(n.state.rating)}))},n.handleChange=function(e){n.setState({text:e.target.value},(function(){return n.props.setKeyword(n.state.text)}))},n.state={rating:1,text:""},n}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(M.a,null,r.a.createElement(M.a.Control,{type:"text",placeholder:"Search for a Movie",className:"movieSearch",onChange:this.handleChange})),r.a.createElement(u.a,{className:"movieRating",name:"rate1",starCount:5,value:this.state.rating,onStarClick:this.onStarClick}))}}]),a}(n.Component),T=Object(p.b)(null,(function(e){return{setKeyword:function(t){return e(function(e){return{type:"GET_KEYWORD",payload:e}}(t))},getRating:function(t){return e(function(e){return{type:"GET_RATING",payload:e}}(t))}}}))(j);var C=function(){return r.a.createElement("div",{className:"App container"},r.a.createElement(T,null),r.a.createElement(O,null),r.a.createElement(g,{editMode:!1}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=a(22),D=a(20),k=[{id:Object(E.a)(),name:"Inception",image:"https://i.pinimg.com/originals/b3/12/09/b31209cd43ba1bde909ebdd01112caf8.jpg",rating:5,year:"2010",description:"Inception is a 2010 science fiction action film written and directed by Christopher Nolan, who also produced the film with his wife, Emma Thomas. The film stars Leonardo DiCaprio as a professional thief who steals information by infiltrating the subconscious of his targets.",trailer:"https://www.youtube.com/watch?v=YoHD9XEInc0"},{id:Object(E.a)(),name:"Lord of the Rings: The Two Towers",image:"https://i.pinimg.com/originals/f7/bf/92/f7bf9292cf46b7d62942e4726234f34d.jpg",rating:4,year:"2002",description:"The two towers between Mordor and Isengard, Barad-d\xfbr and Orthanc, have united in their lust for destruction. The corrupt wizard Saruman, under the power of the Dark Lord Sauron, and his slimy assistant, Gr\xedma Wormtongue, have created a grand Uruk-hai army bent on the destruction of Man and Middle-earth.",trailer:"https://www.youtube.com/watch?v=LbfMDwc4azU"},{id:Object(E.a)(),name:"The Matrix",image:"https://i.pinimg.com/originals/0b/c3/5e/0bc35e809c394a1c56dd23fd33e55de4.jpg",rating:3,year:"1999",description:"The Matrix is a computer-generated dream world designed to keep these humans under control. Humans are kept sedated, effectively living a virtual life. Neo awakens in a bed back on Morpheus's ship, and Morpheus further explains that one man was born into the Matrix with the power to change anything in it.",trailer:"https://www.youtube.com/watch?v=vKQi3bBA1y8"}],x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{movies:k,keyword:"",rating:1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_MOVIE":return Object(D.a)({},e,{movies:e.movies.concat(t.payload)});case"DELETE_MOVIE":return Object(D.a)({},e,{movies:e.movies.filter((function(e){return e.id!==t.payload}))});case"GET_KEYWORD":return Object(D.a)({},e,{keyword:t.payload});case"GET_RATING":return Object(D.a)({},e,{rating:t.payload});case"EDIT_MOVIE":return Object(D.a)({},e,{movies:e.movies.map((function(e){return e.id===t.payload.id?Object(D.a)({},e,{},t.payload.updatedMovie):e}))});default:return e}},I=Object(N.b)({MovieReducers:x}),_=Object(N.c)(I,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),S=a(18),R=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={movie:{name:"",rating:1,year:"",image:"",description:"",trailer:""}},e}return Object(l.a)(a,[{key:"UNSAFE_componentWillMount",value:function(){var e=this;this.setState({movie:this.props.movies.filter((function(t){return t.id==e.props.match.params.id}))[0]})}},{key:"render",value:function(){return r.a.createElement("div",{className:"cardDescription"},r.a.createElement("p",{className:"titleDescription"},this.state.movie.name," ",r.a.createElement("br",null)," ",this.state.movie.year),r.a.createElement("div",{className:"movieRating"},r.a.createElement(u.a,{name:"rate1",starCount:5,value:this.state.movie.rating})),r.a.createElement("p",{className:"textDescription"},this.state.movie.description),r.a.createElement("div",{className:"btnDescription"},r.a.createElement("a",{href:this.state.movie.trailer},r.a.createElement("i",{className:"fa fa-youtube-play fa-2x yt",style:{color:"red"}})),r.a.createElement(b.b,{to:"/"},r.a.createElement("i",{class:"fas fa-home fa-2x",style:{color:"red"}}))))}}]),a}(n.Component),A=Object(p.b)((function(e){return{movies:e.MovieReducers.movies}}))(R);o.a.render(r.a.createElement(p.a,{store:_},r.a.createElement(b.a,null,r.a.createElement(S.a,{exact:!0,path:"/",component:C}),r.a.createElement(S.a,{path:"/movie/:id",component:A}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.f4cb9f5e.chunk.js.map