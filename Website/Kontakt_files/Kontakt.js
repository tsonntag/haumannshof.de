// Created by iWeb 2.0.3 local-build-20080406

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,326),url:'Kontakt_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'Kontakt_files/stroke_1.png'},{rect:new IWRect(2,-2,383,4),url:'Kontakt_files/stroke_2.png'},{rect:new IWRect(385,-2,4,4),url:'Kontakt_files/stroke_3.png'},{rect:new IWRect(385,2,4,326),url:'Kontakt_files/stroke_4.png'},{rect:new IWRect(385,328,4,4),url:'Kontakt_files/stroke_5.png'},{rect:new IWRect(2,328,383,4),url:'Kontakt_files/stroke_6.png'},{rect:new IWRect(-2,328,4,4),url:'Kontakt_files/stroke_7.png'}],new IWSize(387,330))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Kontakt_files/KontaktMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
