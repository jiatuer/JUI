/*
   Deluxe Menu Data File
   Created by Deluxe Tuner v3.10
   http://deluxe-menu.com
*/



//--- Common
var menuIdentifier="amazon";
var isHorizontal=0;
var smColumns=1;
var smOrientation=0;
var dmRTL=0;
var pressedItem=-2;
var itemCursor="default";
var itemTarget="_self";
var statusString="link";
var blankImage="amazon.files/blank image filename";
var pathPrefix_img="";
var pathPrefix_link="";

//--- Dimensions
var menuWidth="180px";
var menuHeight="";
var smWidth="";
var smHeight="";

//--- Positioning
var absolutePos=0;
var posX="0px";
var posY="0px";
var topDX=-20;
var topDY=0;
var DX=0;
var DY=0;
var subMenuAlign="left";
var subMenuVAlign="top";

//--- Font
var fontStyle=["normal 12px Arial, sans-serif ","normal 12px Arial, sans-serif "];
var fontColor=["#004B91","#FF9933"];
var fontDecoration=["none","underline"];
var fontColorDisabled="#AAAAAA";

//--- Appearance
var menuBackColor="#FFFFFF";
var menuBackImage="";
var menuBackRepeat="repeat";
var menuBorderColor="#999999";
var menuBorderWidth="0px";
var menuBorderStyle="solid";
var smFrameImage="amazon.files/sub.gif";
var smFrameWidth=7;

//--- Item Appearance
var itemBackColor=["#FFFFFF","#FFFFFF"];
var itemBackImage=["",""];
var itemSlideBack=0;
var beforeItemImage=["",""];
var afterItemImage=["",""];
var beforeItemImageW="";
var afterItemImageW="";
var beforeItemImageH="";
var afterItemImageH="";
var itemBorderWidth="0px";
var itemBorderColor=["#6655FF","#665500"];
var itemBorderStyle=["none","none"];
var itemSpacing=0;
var itemPadding="3px";
var itemAlignTop="left";
var itemAlign="left";

//--- Icons
var iconTopWidth=24;
var iconTopHeight=24;
var iconWidth=6;
var iconHeight=9;
var arrowWidth=6;
var arrowHeight=9;
var arrowImageMain=["",""];
var arrowWidthSub=0;
var arrowHeightSub=0;
var arrowImageSub=["",""];

//--- Separators
var separatorImage="";
var separatorWidth="100%";
var separatorHeight="3px";
var separatorAlignment="left";
var separatorVImage="";
var separatorVWidth="3px";
var separatorVHeight="100%";
var separatorPadding="0px";

//--- Floatable Menu
var floatable=0;
var floatIterations=6;
var floatableX=1;
var floatableY=1;
var floatableDX=15;
var floatableDY=15;

//--- Movable Menu
var movable=0;
var moveWidth=12;
var moveHeight=20;
var moveColor="#AA0000";
var moveImage="";
var moveCursor="default";
var smMovable=0;
var closeBtnW=15;
var closeBtnH=15;
var closeBtn="";

//--- Transitional Effects & Filters
var transparency="100";
var transition=24;
var transOptions="";
var transDuration=300;
var transDuration2=200;
var shadowLen=0;
var shadowColor="#777777";
var shadowTop=0;

//--- CSS Support (CSS-based Menu)
var cssStyle=0;
var cssSubmenu="";
var cssItem=["",""];
var cssItemText=["",""];

//--- Advanced
var dmObjectsCheck=0;
var saveNavigationPath=1;
var showByClick=0;
var noWrap=1;
var smShowPause=200;
var smHidePause=1000;
var smSmartScroll=1;
var topSmartScroll=0;
var smHideOnClick=1;
var dm_writeAll=0;
var useIFRAME=0;
var dmSearch=0;

//--- AJAX-like Technology
var dmAJAX=0;
var dmAJAXCount=0;
var ajaxReload=0;

//--- Dynamic Menu
var dynamic=0;

//--- Popup Menu
var popupMode=0;

//--- Keystrokes Support
var keystrokes=0;
var dm_focus=1;
var dm_actKey=113;

//--- Sound
var onOverSnd="";
var onClickSnd="";

var itemStyles = [
    ["itemHeight=38px","itemBackImage=amazon.files/top-or.gif,amazon.files/top-or-o.gif","itemSlideBack=20","fontStyle='bold 13px Arial,sans-serif ','bold 13px Arial,sans-serif '","fontColor=#FFFFFF,#FFFFFF","fontDecoration=none,underline"],
    ["itemHeight=22px","itemBackImage=amazon.files/top1.gif,amazon.files/top1-o.gif","itemSlideBack=20"],
    ["itemHeight=25px","itemBackImage=amazon.files/top3.gif,amazon.files/top3-o.gif","itemSlideBack=20","fontStyle='bold 12px Arial,sans-serif','bold 12px Arial,sans-serif'","fontColor=#000000,#000000","fontDecoration=none,"],
    ["itemHeight=24px","itemBackImage=amazon.files/top2.gif,amazon.files/top2-o.gif","itemSlideBack=20","fontStyle='bold 12px Arial,sans-serif','bold 12px Arial,sans-serif'","fontColor=#000000,#000000","fontDecoration=none,"],
];
var menuStyles = [
];
dm_init();