// Created by iWeb 2.0.3 local-build-20080406

function createMediaStream_id2()
{return IWCreatePhotocast("http://www.haumannshof.de/Website/Fotos_files/rss.xml",true,true);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('http://www.haumannshof.de/Website',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('http://www.haumannshof.de/Website',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(2,new IWSize(296,296),new IWSize(296,0),new IWSize(328,311),27,27,0,new IWSize(19,19)),new IWPhotoFrame([IWCreateImage('Fotos_files/Watercolor_iweb_01.png'),IWCreateImage('Fotos_files/Watercolor_iweb_02.png'),IWCreateImage('Fotos_files/Watercolor_iweb_04.png'),IWCreateImage('Fotos_files/Watercolor_iweb_08.png'),IWCreateImage('Fotos_files/Watercolor_iweb_16.png'),IWCreateImage('Fotos_files/Watercolor_iweb_14.png'),IWCreateImage('Fotos_files/Watercolor_iweb_13.png'),IWCreateImage('Fotos_files/Watercolor_iweb_05.png')],null,0,0.800000,0.000000,0.000000,0.000000,0.000000,12.000000,12.000000,11.000000,11.000000,13.000000,12.000000,13.000000,12.000000,null,null,null,0.500000),imageStream,range,null,null,1.000000,{backgroundColor:'#000000',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=getArgs();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
IWRegisterNamedImage('contribution overlay','Media/Photo-Overlay-Contribution.png')
loadMozillaCSS('Fotos_files/FotosMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');initializeMediaStream_id2()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
