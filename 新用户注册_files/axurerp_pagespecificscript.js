for(var i = 0; i < 146; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u122'] = 'top';document.getElementById('u21_img').tabIndex = 0;
HookHover('u21', false);

u21.style.cursor = 'pointer';
$axure.eventManager.click('u21', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('C_.html');

}
});
gv_vAlignTable['u32'] = 'top';gv_vAlignTable['u130'] = 'top';gv_vAlignTable['u7'] = 'center';gv_vAlignTable['u79'] = 'center';gv_vAlignTable['u140'] = 'center';document.getElementById('u17_img').tabIndex = 0;
HookHover('u17', false);

u17.style.cursor = 'pointer';
$axure.eventManager.click('u17', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Java.html');

}
});

$axure.eventManager.focus('u135', function(e) {

if ((GetWidgetText('u134')) == ('')) {

SetWidgetFormText('u134', GetWidgetText('u135'));

SetWidgetFormText('u135', '');

}
});

$axure.eventManager.blur('u135', function(e) {

if ((GetWidgetText('u135')) == ('')) {

SetWidgetFormText('u135', GetWidgetText('u134'));

SetWidgetFormText('u134', '');

}
});
gv_vAlignTable['u42'] = 'top';gv_vAlignTable['u55'] = 'top';gv_vAlignTable['u101'] = 'center';gv_vAlignTable['u14'] = 'center';gv_vAlignTable['u48'] = 'top';gv_vAlignTable['u105'] = 'center';gv_vAlignTable['u138'] = 'center';gv_vAlignTable['u52'] = 'top';gv_vAlignTable['u20'] = 'center';gv_vAlignTable['u67'] = 'top';gv_vAlignTable['u110'] = 'top';gv_vAlignTable['u108'] = 'top';gv_vAlignTable['u37'] = 'top';gv_vAlignTable['u75'] = 'center';gv_vAlignTable['u34'] = 'center';gv_vAlignTable['u89'] = 'center';gv_vAlignTable['u39'] = 'center';gv_vAlignTable['u47'] = 'top';gv_vAlignTable['u72'] = 'top';gv_vAlignTable['u103'] = 'center';gv_vAlignTable['u99'] = 'center';gv_vAlignTable['u66'] = 'center';gv_vAlignTable['u44'] = 'top';gv_vAlignTable['u119'] = 'center';gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u125'] = 'center';gv_vAlignTable['u26'] = 'center';gv_vAlignTable['u85'] = 'center';gv_vAlignTable['u51'] = 'top';document.getElementById('u144_img').tabIndex = 0;

u144.style.cursor = 'pointer';
$axure.eventManager.click('u144', function(e) {

if (true) {

	SetPanelVisibility('u141','hidden','fade',500);

}
});
gv_vAlignTable['u36'] = 'center';gv_vAlignTable['u95'] = 'center';
$axure.eventManager.keyup('u61', function(e) {

if ((GetWidgetValueLength('u61')) == ('0')) {

	SetPanelState('u73', 'pd0u73','none','',500,'none','',500);

}
else
if (((GetWidgetValueLength('u61')) < Number('5')) && ((GetWidgetValueLength('u61')) > Number('0'))) {

	SetPanelState('u73', 'pd1u73','none','',500,'none','',500);

}
else
if (((GetWidgetValueLength('u61')) < Number('8')) && ((GetWidgetValueLength('u61')) >= Number('4'))) {

	SetPanelState('u73', 'pd2u73','none','',500,'none','',500);

}
else
if (((GetWidgetValueLength('u61')) < Number('12')) && ((GetWidgetValueLength('u61')) >= Number('8'))) {

	SetPanelState('u73', 'pd3u73','none','',500,'none','',500);

}
else
if ((GetWidgetValueLength('u61')) >= Number('12')) {

	SetPanelState('u73', 'pd4u73','none','',500,'none','',500);

}
});
gv_vAlignTable['u116'] = 'center';gv_vAlignTable['u114'] = 'center';gv_vAlignTable['u46'] = 'top';gv_vAlignTable['u71'] = 'center';gv_vAlignTable['u127'] = 'center';gv_vAlignTable['u43'] = 'top';gv_vAlignTable['u56'] = 'top';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u40'] = 'top';document.getElementById('u139_img').tabIndex = 0;
HookHover('u139', false);

u139.style.cursor = 'pointer';
$axure.eventManager.click('u139', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('首页.html');

}
});
gv_vAlignTable['u87'] = 'center';gv_vAlignTable['u53'] = 'top';gv_vAlignTable['u121'] = 'center';
$axure.eventManager.mouseover('u109', function(e) {
if (!IsTrueMouseOver('u109',e)) return;
if (true) {

	SetPanelVisibility('u123','','none',500);

}
});

$axure.eventManager.mouseout('u109', function(e) {
if (!IsTrueMouseOut('u109',e)) return;
if (true) {

	SetPanelVisibility('u123','hidden','none',500);

}
});
gv_vAlignTable['u97'] = 'center';gv_vAlignTable['u81'] = 'center';gv_vAlignTable['u60'] = 'top';gv_vAlignTable['u69'] = 'center';gv_vAlignTable['u91'] = 'center';gv_vAlignTable['u64'] = 'center';gv_vAlignTable['u24'] = 'center';gv_vAlignTable['u117'] = 'top';document.getElementById('u13_img').tabIndex = 0;
HookHover('u13', false);

u13.style.cursor = 'pointer';
$axure.eventManager.click('u13', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('首页.html');

}
});
u29.tabIndex = 0;

u29.style.cursor = 'pointer';
$axure.eventManager.click('u29', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('搜索页面.html');

}
});
gv_vAlignTable['u29'] = 'top';gv_vAlignTable['u132'] = 'top';gv_vAlignTable['u129'] = 'top';
$axure.eventManager.blur('u111', function(e) {

if ((GetWidgetText('u111')) == ('')) {

	SetPanelState('u112', 'pd0u112','none','',500,'none','',500);

}
else
if ((GetWidgetText('u61')) != (GetWidgetText('u111'))) {

	SetPanelState('u112', 'pd1u112','none','',500,'none','',500);

}
else
if (true) {

	SetPanelState('u112', 'pd0u112','none','',500,'none','',500);

}
});
gv_vAlignTable['u31'] = 'center';gv_vAlignTable['u83'] = 'center';gv_vAlignTable['u8'] = 'top';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u49'] = 'top';gv_vAlignTable['u93'] = 'center';gv_vAlignTable['u145'] = 'center';document.getElementById('u25_img').tabIndex = 0;
HookHover('u25', false);

u25.style.cursor = 'pointer';
$axure.eventManager.click('u25', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('IT前沿资讯.html');

}
});

$axure.eventManager.focus('u59', function(e) {

if ((GetWidgetText('u58')) == ('')) {

SetWidgetFormText('u58', GetWidgetText('u59'));

SetWidgetFormText('u59', '');

}
});

$axure.eventManager.blur('u59', function(e) {

if ((GetWidgetText('u59')) == ('')) {

SetWidgetFormText('u59', GetWidgetText('u58'));

SetWidgetFormText('u58', '');

}
});
document.getElementById('u137_img').tabIndex = 0;
HookHover('u137', false);

u137.style.cursor = 'pointer';
$axure.eventManager.click('u137', function(e) {

if ((GetWidgetText('u61')) == (GetWidgetText('u111'))) {

SetGlobalVariableValue('newUserid', GetWidgetText('u135'));

	SetPanelVisibility('u141','','fade',500);

	self.location.href=$axure.globalVariableProvider.getLinkUrl('首页_登录_.html');

}
});
gv_vAlignTable['u18'] = 'center';gv_vAlignTable['u77'] = 'center';gv_vAlignTable['u22'] = 'center';gv_vAlignTable['u143'] = 'center';gv_vAlignTable['u107'] = 'center';gv_vAlignTable['u136'] = 'top';