"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[839],{9009:function(e,r,a){a.d(r,{Z:function(){return o}});a(2791);var t={MoviesGallery:"MoviesGallery_MoviesGallery__tqAIU",MoviesGalleryList:"MoviesGallery_MoviesGalleryList__pjh-c",MoviesGalleryItem:"MoviesGallery_MoviesGalleryItem__+mbjI",GalleryItemMovies:"MoviesGallery_GalleryItemMovies__LW-jm",movieTitle:"MoviesGallery_movieTitle__Lnio6",titleWrapper:"MoviesGallery_titleWrapper__dy8hb"},s=a(501),l=a(6871),i=a(184);function n(e){var r=e.movie,a=(0,l.TH)();return(0,i.jsx)("li",{className:t.MoviesGalleryItem,children:(0,i.jsxs)(s.rU,{className:t.GalleryItemMovies,to:{pathname:"/movies/".concat(r.id),state:{from:a},label:"Back to movies list"},children:[(0,i.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(r.poster_path),alt:r.original_title,width:"300",className:t.image}),(0,i.jsx)("div",{className:t.titleWrapper,children:(0,i.jsx)("span",{className:t.movieTitle,children:r.title})})]})})}function o(e){var r=e.movies;return(0,i.jsx)("div",{className:t.MoviesGallery,children:(0,i.jsx)("ul",{className:t.MoviesGalleryList,children:r.map((function(e){return(0,i.jsx)(n,{movie:e},e.id)}))})})}},7839:function(e,r,a){a.r(r),a.d(r,{default:function(){return y}});var t=a(1413),s=a(885),l=a(2791),i=a(6409),n=a(501),o=a(6871),c=a(1867),u="Searchbar_searchbar__29YDU",m="Searchbar_searchForm__-PtX4",v="Searchbar_searchButton__vzaQP",h="Searchbar_searchButtonLabel__87xus",_="Searchbar_searchFormInput__hzTdt",f=a(184);function d(e){var r=e.onSubmit,a=(0,l.useState)(""),t=(0,s.Z)(a,2),n=t[0],o=t[1];return(0,f.jsx)("header",{className:u,children:(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==n.trim()?(r(n),o("")):i.Am.error("Please enter search query")},className:m,children:[(0,f.jsx)("button",{type:"submit",className:v,children:(0,f.jsx)("span",{className:h,children:"Search"})}),(0,f.jsx)("input",{className:_,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search films ",onChange:function(e){o(e.currentTarget.value.toLowerCase())}})]})})}var p=a(9009);function y(){var e=(0,l.useState)(null),r=(0,s.Z)(e,2),a=r[0],m=r[1],v=(0,n.lr)(),h=(0,l.useState)((function(){var e;return null!==(e=v[0].get("query"))&&void 0!==e?e:""})),_=(0,s.Z)(h,2),y=_[0],b=_[1],j=(0,o.s0)(),x=(0,o.TH)();(0,l.useEffect)((function(){y&&G()}));var G=function(){c.bI(y).then((function(e){var r=e.results;0!==r.length?m(r):i.Am.error("There are is no results found.Please try another request")}))};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(d,{onSubmit:function(e){b(e),m([]),j((0,t.Z)((0,t.Z)({},x),{},{search:"query=".concat(e)}))},className:u}),a&&(0,f.jsx)(p.Z,{movies:a,data:a})]})}}}]);
//# sourceMappingURL=839.4c092253.chunk.js.map