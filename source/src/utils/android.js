//获取系统方法
function takePhoto(e){
	var cameraOptions= {
    quality : 75,
    destinationType : Camera.DestinationType.DATA_URL,
    sourceType : Camera.PictureSourceType.CAMERA,     //照相机类型
    allowEdit : true,
    encodingType : Camera.EncodingType.JPEG,
    targetWdith : 100,
    targetHeight : 100,
    popoverOptions : CameraPopoverOptions,
    saveToPhotoAlbum : false
};
   console.log("调用拍照接口");
	navigator.camera.getPicture(e.onCameraSuccess,e.onCameraError,cameraOptions);
}
 
function takefromgalery(){
	var cameraOptions= {
    quality : 75,
    destinationType : Camera.DestinationType.DATA_URL,
    sourceType : Camera.PictureSourceType.SAVEDPHOTOALBUM,    //相册类型
    allowEdit : true,
    encodingType : Camera.EncodingType.JPEG,
    targetWdith : 100,
    targetHeight : 100,
    popoverOptions : CameraPopoverOptions,
    saveToPhotoAlbum : false
};
   console.log("调用相册接口");
	navigator.camera.getPicture(onCameraSuccess,onCameraError,cameraOptions);
}
 

export {
    takePhoto,
    takefromgalery
}