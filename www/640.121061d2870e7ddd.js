"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[640],{5640:(d,s,n)=>{n.r(s),n.d(s,{pwa_camera_modal_instance:()=>l});var a=n(467),t=n(1288);const l=(()=>{let h=class{constructor(e){var r=this;(0,t.r)(this,e),this.onPhoto=(0,t.c)(this,"onPhoto",7),this.noDeviceError=(0,t.c)(this,"noDeviceError",7),this.handlePhoto=function(){var o=(0,a.A)(function*(i){r.onPhoto.emit(i)});return function(i){return o.apply(this,arguments)}}(),this.handleNoDeviceError=function(){var o=(0,a.A)(function*(i){r.noDeviceError.emit(i)});return function(i){return o.apply(this,arguments)}}(),this.facingMode="user",this.hidePicker=!1,this.noDevicesText="No camera found",this.noDevicesButtonText="Choose image"}handleBackdropClick(e){e.target!==this.el&&this.onPhoto.emit(null)}handleComponentClick(e){e.stopPropagation()}handleBackdropKeyUp(e){"Escape"===e.key&&this.onPhoto.emit(null)}render(){return(0,t.h)("div",{class:"wrapper",onClick:e=>this.handleBackdropClick(e)},(0,t.h)("div",{class:"content"},(0,t.h)("pwa-camera",{onClick:e=>this.handleComponentClick(e),facingMode:this.facingMode,hidePicker:this.hidePicker,handlePhoto:this.handlePhoto,handleNoDeviceError:this.handleNoDeviceError,noDevicesButtonText:this.noDevicesButtonText,noDevicesText:this.noDevicesText})))}get el(){return(0,t.g)(this)}};return h.style=":host{z-index:1000;position:fixed;top:0;left:0;width:100%;height:100%;display:-ms-flexbox;display:flex;contain:strict;--inset-width:600px;--inset-height:600px}.wrapper{-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(0, 0, 0, 0.15)}.content{-webkit-box-shadow:0px 0px 5px rgba(0, 0, 0, 0.2);box-shadow:0px 0px 5px rgba(0, 0, 0, 0.2);width:var(--inset-width);height:var(--inset-height);max-height:100%}@media only screen and (max-width: 600px){.content{width:100%;height:100%}}",h})()}}]);