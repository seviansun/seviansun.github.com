for(var i = 0; i < 229; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if ((GetGlobalVariableValue('pageLink')) == ('2')) {

	SetPanelState('u20', 'pd0u20','none','',500,'none','',500);

}

if ((GetGlobalVariableValue('pageLink')) == ('1')) {

	SetPanelState('u20', 'pd1u20','none','',500,'none','',500);

}

if ((GetGlobalVariableValue('newUserid')) != ('')) {

SetWidgetRichText('u16', '<p style="text-align:left;"><span style="font-family:Arial;font-size:28px;font-weight:normal;font-style:normal;text-decoration:none;color:#999999;">@' + (GetGlobalVariableValue('newUserid')) + '</span></p>');

}
else
if (true) {

SetWidgetRichText('u16', '<p style="text-align:left;"><span style="font-family:Arial;font-size:28px;font-weight:normal;font-style:normal;text-decoration:none;color:#999999;">@</span><span style="font-family:Arial;font-size:28px;font-weight:normal;font-style:normal;text-decoration:none;color:#999999;">Ali</span><span style="font-family:Arial;font-size:28px;font-weight:normal;font-style:normal;text-decoration:none;color:#999999;">as</span><span style="font-family:Arial;font-size:28px;font-weight:normal;font-style:normal;text-decoration:none;color:#999999;">X</span></p>');

}

});

if (bIE) document.getElementById('u131').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u131'); });
else {
    document.getElementById('u131').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u131'); }, true);
    document.getElementById('u131').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u131'); }, true);
}

widgetIdToStartDragFunction['u131'] = function() {
var e = windowEvent;

if (true) {

	BringToFront("u131");

}

}
gv_vAlignTable['u115'] = 'center';gv_vAlignTable['u128'] = 'center';gv_vAlignTable['u130'] = 'center';gv_vAlignTable['u2'] = 'top';document.getElementById('u88_img').tabIndex = 0;

u88.style.cursor = 'pointer';
$axure.eventManager.click('u88', function(e) {

if (true) {

	SetPanelVisibility('u85','hidden','none',500);

	MoveWidgetBy('u90', GetNum('0'), GetNum('-43'),'linear',500);

	MoveWidgetBy('u95', GetNum('0'), GetNum('-43'),'linear',500);

	MoveWidgetBy('u100', GetNum('0'), GetNum('-43'),'linear',500);

}
});
gv_vAlignTable['u4'] = 'top';gv_vAlignTable['u226'] = 'center';document.getElementById('u140_img').tabIndex = 0;

u140.style.cursor = 'pointer';
$axure.eventManager.click('u140', function(e) {

if (true) {

	SetPanelVisibility('u131','hidden','none',500);

}
});
gv_vAlignTable['u17'] = 'top';document.getElementById('u103_img').tabIndex = 0;

u103.style.cursor = 'pointer';
$axure.eventManager.click('u103', function(e) {

if (true) {

	SetPanelVisibility('u100','hidden','fade',500);

}
});
gv_vAlignTable['u210'] = 'top';gv_vAlignTable['u186'] = 'center';gv_vAlignTable['u27'] = 'center';gv_vAlignTable['u7'] = 'top';gv_vAlignTable['u52'] = 'center';gv_vAlignTable['u120'] = 'center';gv_vAlignTable['u189'] = 'top';document.getElementById('u98_img').tabIndex = 0;

u98.style.cursor = 'pointer';
$axure.eventManager.click('u98', function(e) {

if (true) {

	SetPanelVisibility('u95','hidden','none',500);

	MoveWidgetBy('u100', GetNum('0'), GetNum('-43'),'linear',500);

}
});
gv_vAlignTable['u108'] = 'center';gv_vAlignTable['u16'] = 'top';gv_vAlignTable['u141'] = 'center';gv_vAlignTable['u11'] = 'top';document.getElementById('u93_img').tabIndex = 0;

u93.style.cursor = 'pointer';
$axure.eventManager.click('u93', function(e) {

if (true) {

	SetPanelVisibility('u90','hidden','none',500);

	MoveWidgetBy('u95', GetNum('0'), GetNum('-43'),'linear',500);

	MoveWidgetBy('u100', GetNum('0'), GetNum('-43'),'linear',500);

}
});
gv_vAlignTable['u220'] = 'top';gv_vAlignTable['u133'] = 'center';gv_vAlignTable['u143'] = 'top';gv_vAlignTable['u34'] = 'center';document.getElementById('u68_img').tabIndex = 0;
HookHover('u68', false);

u68.style.cursor = 'pointer';
$axure.eventManager.click('u68', function(e) {

if (true) {

	SetPanelState('u20', 'pd0u20','none','',500,'none','',500);

}
});
gv_vAlignTable['u208'] = 'top';gv_vAlignTable['u157'] = 'center';gv_vAlignTable['u213'] = 'center';gv_vAlignTable['u184'] = 'center';gv_vAlignTable['u89'] = 'center';document.getElementById('u72_img').tabIndex = 0;
HookHover('u72', false);

u72.style.cursor = 'pointer';
$axure.eventManager.click('u72', function(e) {

if (true) {

	SetPanelState('u78', 'pd0u78','none','',500,'none','',500);

}
});
gv_vAlignTable['u149'] = 'center';gv_vAlignTable['u99'] = 'center';document.getElementById('u66_img').tabIndex = 0;
HookHover('u66', false);

u66.style.cursor = 'pointer';
$axure.eventManager.click('u66', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('首页_登录_.html');

}
});
gv_vAlignTable['u110'] = 'center';gv_vAlignTable['u179'] = 'top';gv_vAlignTable['u48'] = 'center';gv_vAlignTable['u197'] = 'center';gv_vAlignTable['u125'] = 'center';gv_vAlignTable['u6'] = 'top';gv_vAlignTable['u168'] = 'top';gv_vAlignTable['u25'] = 'center';gv_vAlignTable['u54'] = 'center';gv_vAlignTable['u40'] = 'center';gv_vAlignTable['u67'] = 'center';gv_vAlignTable['u38'] = 'center';document.getElementById('u26_img').tabIndex = 0;
HookHover('u26', false);

u26.style.cursor = 'pointer';
$axure.eventManager.click('u26', function(e) {

if (true) {

	SetPanelState('u20', 'pd0u20','none','',500,'none','',500);

}
});
document.getElementById('u225_img').tabIndex = 0;
HookHover('u225', false);

u225.style.cursor = 'pointer';
$axure.eventManager.click('u225', function(e) {

if (true) {

	SetPanelState('u20', 'pd0u20','none','',500,'none','',500);

}
});
document.getElementById('u119_img').tabIndex = 0;

u119.style.cursor = 'pointer';
$axure.eventManager.click('u119', function(e) {

if (true) {

	SetPanelVisibility('u116','hidden','none',500);

	MoveWidgetBy('u121', GetNum('0'), GetNum('-43'),'linear',500);

	MoveWidgetBy('u126', GetNum('0'), GetNum('-43'),'linear',500);

}
});
gv_vAlignTable['u82'] = 'center';gv_vAlignTable['u75'] = 'center';gv_vAlignTable['u228'] = 'center';gv_vAlignTable['u195'] = 'center';gv_vAlignTable['u42'] = 'center';gv_vAlignTable['u9'] = 'top';document.getElementById('u114_img').tabIndex = 0;

u114.style.cursor = 'pointer';
$axure.eventManager.click('u114', function(e) {

if (true) {

	SetPanelVisibility('u111','hidden','none',500);

	MoveWidgetBy('u116', GetNum('0'), GetNum('-43'),'linear',500);

	MoveWidgetBy('u121', GetNum('0'), GetNum('-43'),'linear',500);

	MoveWidgetBy('u126', GetNum('0'), GetNum('-43'),'linear',500);

}
});
gv_vAlignTable['u56'] = 'center';gv_vAlignTable['u160'] = 'center';gv_vAlignTable['u166'] = 'center';gv_vAlignTable['u221'] = 'top';gv_vAlignTable['u92'] = 'center';gv_vAlignTable['u46'] = 'center';gv_vAlignTable['u71'] = 'center';document.getElementById('u223_img').tabIndex = 0;
HookHover('u223', false);

u223.style.cursor = 'pointer';
$axure.eventManager.click('u223', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('首页_登录_.html');

}
});
document.getElementById('u28_img').tabIndex = 0;
HookHover('u28', false);

u28.style.cursor = 'pointer';
$axure.eventManager.click('u28', function(e) {

if (true) {

	SetPanelState('u20', 'pd1u20','none','',500,'none','',500);

}
});
document.getElementById('u74_img').tabIndex = 0;
HookHover('u74', false);

u74.style.cursor = 'pointer';
$axure.eventManager.click('u74', function(e) {

if (true) {

	SetPanelState('u78', 'pd1u78','none','',500,'none','',500);

}

if (((GetGlobalVariableValue('messageid')) != ('')) && ((GetGlobalVariableValue('messagecontent')) != (''))) {

SetWidgetRichText('u102', '<p style="text-align:left;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">To:' + (GetGlobalVariableValue('messageid')) + '&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ' + (GetGlobalVariableValue('messagecontent')) + '</span></p>');

	SetPanelVisibility('u100','','none',500);

}
});
gv_vAlignTable['u106'] = 'center';gv_vAlignTable['u31'] = 'center';document.getElementById('u227_img').tabIndex = 0;
HookHover('u227', false);

u227.style.cursor = 'pointer';
$axure.eventManager.click('u227', function(e) {

if (true) {

	SetPanelState('u20', 'pd1u20','none','',500,'none','',500);

}
});
gv_vAlignTable['u139'] = 'center';gv_vAlignTable['u87'] = 'center';gv_vAlignTable['u193'] = 'center';gv_vAlignTable['u104'] = 'center';gv_vAlignTable['u102'] = 'center';gv_vAlignTable['u164'] = 'center';gv_vAlignTable['u206'] = 'center';gv_vAlignTable['u84'] = 'center';gv_vAlignTable['u50'] = 'center';gv_vAlignTable['u97'] = 'center';gv_vAlignTable['u123'] = 'center';gv_vAlignTable['u73'] = 'center';gv_vAlignTable['u134'] = 'top';document.getElementById('u81_img').tabIndex = 0;

u81.style.cursor = 'pointer';
$axure.eventManager.click('u81', function(e) {

if (true) {

	SetPanelVisibility('u131','','fade',500);

}
});
gv_vAlignTable['u219'] = 'top';gv_vAlignTable['u177'] = 'center';gv_vAlignTable['u209'] = 'top';gv_vAlignTable['u94'] = 'center';gv_vAlignTable['u60'] = 'top';gv_vAlignTable['u190'] = 'top';gv_vAlignTable['u200'] = 'top';gv_vAlignTable['u113'] = 'center';gv_vAlignTable['u44'] = 'center';gv_vAlignTable['u147'] = 'top';gv_vAlignTable['u19'] = 'center';gv_vAlignTable['u64'] = 'center';document.getElementById('u24_img').tabIndex = 0;
HookHover('u24', false);

u24.style.cursor = 'pointer';
$axure.eventManager.click('u24', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('首页_登录_.html');

}
});
gv_vAlignTable['u188'] = 'top';gv_vAlignTable['u162'] = 'top';gv_vAlignTable['u204'] = 'center';document.getElementById('u156_img').tabIndex = 0;
HookHover('u156', false);

u156.style.cursor = 'pointer';
$axure.eventManager.click('u156', function(e) {

if ((GetCheckState('u187')) == (true)) {

	SetPanelVisibility('u180','hidden','fade',500);

}

if ((GetCheckState('u198')) == (true)) {

	SetPanelVisibility('u191','hidden','fade',500);

}

if ((GetCheckState('u172')) == (true)) {

	SetPanelVisibility('u169','hidden','fade',500);

}

if ((GetCheckState('u207')) == (true)) {

	SetPanelVisibility('u202','hidden','fade',500);

}

if ((GetCheckState('u161')) == (true)) {

	SetPanelVisibility('u158','hidden','fade',500);

}

if ((GetCheckState('u218')) == (true)) {

	SetPanelVisibility('u211','hidden','fade',500);

}
});
gv_vAlignTable['u13'] = 'top';gv_vAlignTable['u29'] = 'center';document.getElementById('u148_img').tabIndex = 0;

u148.style.cursor = 'pointer';
$axure.eventManager.click('u148', function(e) {

if (true) {

	SetPanelVisibility('u144','hidden','fade',500);

}
});
gv_vAlignTable['u175'] = 'center';gv_vAlignTable['u217'] = 'center';document.getElementById('u129_img').tabIndex = 0;

u129.style.cursor = 'pointer';
$axure.eventManager.click('u129', function(e) {

if (true) {

	SetPanelVisibility('u126','hidden','fade',500);

}
});
gv_vAlignTable['u58'] = 'top';gv_vAlignTable['u36'] = 'center';gv_vAlignTable['u171'] = 'center';gv_vAlignTable['u0'] = 'top';gv_vAlignTable['u154'] = 'center';gv_vAlignTable['u178'] = 'top';gv_vAlignTable['u8'] = 'top';gv_vAlignTable['u146'] = 'center';gv_vAlignTable['u15'] = 'center';document.getElementById('u124_img').tabIndex = 0;

u124.style.cursor = 'pointer';
$axure.eventManager.click('u124', function(e) {

if (true) {

	SetPanelVisibility('u121','hidden','none',500);

	MoveWidgetBy('u126', GetNum('0'), GetNum('-43'),'linear',500);

}
});
gv_vAlignTable['u80'] = 'center';document.getElementById('u138_img').tabIndex = 0;
HookHover('u138', false);

u138.style.cursor = 'pointer';
$axure.eventManager.click('u138', function(e) {

if ((GetWidgetText('u135')) != ('')) {

	SetPanelVisibility('u131','hidden','none',500);

	SetPanelVisibility('u144','','fade',500);

SetGlobalVariableValue('messageid', GetWidgetText('u135'));

;

SetGlobalVariableValue('messagecontent', GetWidgetText('u137'));

}
else
if (true) {

	SetPanelVisibility('u142','','none',500);

}
});
gv_vAlignTable['u167'] = 'top';gv_vAlignTable['u12'] = 'top';gv_vAlignTable['u201'] = 'top';gv_vAlignTable['u199'] = 'top';gv_vAlignTable['u173'] = 'top';gv_vAlignTable['u215'] = 'center';gv_vAlignTable['u118'] = 'center';gv_vAlignTable['u136'] = 'top';gv_vAlignTable['u224'] = 'center';document.getElementById('u30_img').tabIndex = 0;
HookHover('u30', false);

u30.style.cursor = 'pointer';
$axure.eventManager.click('u30', function(e) {

if (true) {

	SetPanelState('u20', 'pd2u20','none','',500,'none','',500);

}
});
gv_vAlignTable['u22'] = 'center';gv_vAlignTable['u152'] = 'center';document.getElementById('u107_img').tabIndex = 0;

u107.style.cursor = 'pointer';
$axure.eventManager.click('u107', function(e) {

if (true) {

	SetPanelVisibility('u131','','fade',500);

}
});
gv_vAlignTable['u182'] = 'center';gv_vAlignTable['u69'] = 'center';gv_vAlignTable['u3'] = 'top';