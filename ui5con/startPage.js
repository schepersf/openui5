!function(e){function i(l){if(t[l])return t[l].exports;var r=t[l]={i:l,l:!1,exports:{}};return e[l].call(r.exports,r,r.exports,i),r.l=!0,r.exports}var t={};i.m=e,i.c=t,i.i=function(e){return e},i.d=function(e,t,l){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:l})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},i.p="",i(i.s=12)}({12:function(e,i,t){var l=t(5),r=0;$(document).ready(function(){var e=l.map(function(e){return e.slide});fillSlideShow(e),r=0,showSlide(r)}),window.fillSlideShow=function(e){var i=$("#slide-container"),t=$("#slide-template").html(),l=($("#video-template").html(),$("#dots-container")),r=$("#dot-template").html(),p=$("#galleryElement"),d=$("#gallery-item-template").html();e.forEach(function(e,n){i.append(t.replace("{{src}}",e)),l.append(r.replace("{{index}}",n));var s=d.replace("{{index}}",n).replace("{{src}}",e);p.append(s),n++})},window.showPrevSlide=function(){showSlide(r-1)},window.showNextSlide=function(){showSlide(r+1)},window.showSlide=function(e){var i=$(".b-slide"),t=$(".b-slideshow__dot"),l=$(".b-topic.mod_gallery");r=e,r>=i.length&&(r=0),r<0&&(r=i.length-1),i.css({display:"none"}),t.removeClass("mod_selected"),l.removeClass("mod_selected"),$(i[r]).css({display:"block"}),$(t[r]).addClass("mod_selected"),$(l[r]).addClass("mod_selected")}},5:function(e,i){e.exports=[{slide:"picture1.jpg"},{slide:"picture2.jpg"},{slide:"picture3.jpg"},{slide:"picture4.jpg"},{slide:"picture5.jpg"},{slide:"picture6.jpg"},{slide:"picture7.jpg"},{slide:"picture8.jpg"},{slide:"picture9.jpg"},{slide:"picture10.jpg"},{slide:"picture11.jpg"},{slide:"picture12.jpg"},{slide:"picture13.jpg"},{slide:"picture14.jpg"},{slide:"picture15.jpg"},{slide:"picture16.jpg"},{slide:"picture17.jpg"},{slide:"picture18.jpg"},{slide:"picture19.jpg"},{slide:"picture20.jpg"},{slide:"picture21.jpg"},{slide:"picture22.jpg"},{slide:"picture23.jpg"}]}});