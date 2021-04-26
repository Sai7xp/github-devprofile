export const css = /* css */ `
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@300&display=swap');
*{
	margin:0;
	padding:0;
}
body {
	font-family: Consolas, monaco, monospace;
}
 .center {
	overflow-x:hidden;
	overflow-y:hidden;
	 height: 300px;
	 width: 320px;
	 background: #ffffff;
	 border-radius: 4px;
	 overflow: hidden;
     border:0.5px solid #24292e;
     box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Crect stroke='%23ffffff' stroke-width='.5' width='1' height='1' id='s'/%3E%3Cpattern id='a' width='3' height='3' patternUnits='userSpaceOnUse' patternTransform='scale(28.85) translate(-965.34 -724)'%3E%3Cuse fill='%23fafafa' href='%23s' y='2'/%3E%3Cuse fill='%23fafafa' href='%23s' x='1' y='2'/%3E%3Cuse fill='%23f5f5f5' href='%23s' x='2' y='2'/%3E%3Cuse fill='%23f5f5f5' href='%23s'/%3E%3Cuse fill='%23f0f0f0' href='%23s' x='2'/%3E%3Cuse fill='%23f0f0f0' href='%23s' x='1' y='1'/%3E%3C/pattern%3E%3Cpattern id='b' width='7' height='11' patternUnits='userSpaceOnUse' patternTransform='scale(28.85) translate(-965.34 -724)'%3E%3Cg fill='%23ebebeb'%3E%3Cuse href='%23s'/%3E%3Cuse href='%23s' y='5' /%3E%3Cuse href='%23s' x='1' y='10'/%3E%3Cuse href='%23s' x='2' y='1'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='8'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='5' y='2'/%3E%3Cuse href='%23s' x='5' y='6'/%3E%3Cuse href='%23s' x='6' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='h' width='5' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(28.85) translate(-965.34 -724)'%3E%3Cg fill='%23ebebeb'%3E%3Cuse href='%23s' y='5'/%3E%3Cuse href='%23s' y='8'/%3E%3Cuse href='%23s' x='1' y='1'/%3E%3Cuse href='%23s' x='1' y='9'/%3E%3Cuse href='%23s' x='1' y='12'/%3E%3Cuse href='%23s' x='2'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='2'/%3E%3Cuse href='%23s' x='3' y='6'/%3E%3Cuse href='%23s' x='3' y='11'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='4' y='10'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='c' width='17' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(28.85) translate(-965.34 -724)'%3E%3Cg fill='%23e5e5e5'%3E%3Cuse href='%23s' y='11'/%3E%3Cuse href='%23s' x='2' y='9'/%3E%3Cuse href='%23s' x='5' y='12'/%3E%3Cuse href='%23s' x='9' y='4'/%3E%3Cuse href='%23s' x='12' y='1'/%3E%3Cuse href='%23s' x='16' y='6'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='d' width='19' height='17' patternUnits='userSpaceOnUse' patternTransform='scale(28.85) translate(-965.34 -724)'%3E%3Cg fill='%23ffffff'%3E%3Cuse href='%23s' y='9'/%3E%3Cuse href='%23s' x='16' y='5'/%3E%3Cuse href='%23s' x='14' y='2'/%3E%3Cuse href='%23s' x='11' y='11'/%3E%3Cuse href='%23s' x='6' y='14'/%3E%3C/g%3E%3Cg fill='%23e0e0e0'%3E%3Cuse href='%23s' x='3' y='13'/%3E%3Cuse href='%23s' x='9' y='7'/%3E%3Cuse href='%23s' x='13' y='10'/%3E%3Cuse href='%23s' x='15' y='4'/%3E%3Cuse href='%23s' x='18' y='1'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='e' width='47' height='53' patternUnits='userSpaceOnUse' patternTransform='scale(28.85) translate(-965.34 -724)'%3E%3Cg fill='%23F60'%3E%3Cuse href='%23s' x='2' y='5'/%3E%3Cuse href='%23s' x='16' y='38'/%3E%3Cuse href='%23s' x='46' y='42'/%3E%3Cuse href='%23s' x='29' y='20'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='f' width='59' height='71' patternUnits='userSpaceOnUse' patternTransform='scale(28.85) translate(-965.34 -724)'%3E%3Cg fill='%23F60'%3E%3Cuse href='%23s' x='33' y='13'/%3E%3Cuse href='%23s' x='27' y='54'/%3E%3Cuse href='%23s' x='55' y='55'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='g' width='139' height='97' patternUnits='userSpaceOnUse' patternTransform='scale(28.85) translate(-965.34 -724)'%3E%3Cg fill='%23F60'%3E%3Cuse href='%23s' x='11' y='8'/%3E%3Cuse href='%23s' x='51' y='13'/%3E%3Cuse href='%23s' x='17' y='73'/%3E%3Cuse href='%23s' x='99' y='57'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23b)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23h)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23c)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23d)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23e)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23f)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23g)' width='100%25' height='100%25'/%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;
	 
}
 .profile {
	 float: left;
	 width: 200px;
	 height: 320px;
     text-align: center;
     background-size: cover;
	 position:relative;

    
}
.titleName{
	position:absolute;
	top:36;
	writing-mode: vertical-rl;
	text-orientation: mixed;
	left:6;
	opacity:0.5;
	color:#24292E;
	font-family: Consolas, monaco, monospace;
	font-size:0.9rem;
	// text-transform:uppercase;
	font-weight:bold;
}
.bg-img{
    opacity:0.6;
    height:25px;
    float:left;
	margin-top:5px;
	transition: all 0.4s ease-in-out;
    margin-left:4px;
}
.bg-img:hover{
    transform: rotate(-80deg);
    transition: all 0.4s ease-in-out;
}

 .profile .image {
	 position: relative;
	 width: 70px;
	 height: 70px;
	 margin: 38px auto 0 auto;
}
 .profile .image .circle-1, .profile .image .circle-2 {
	 position: absolute;
	 box-sizing: border-box;
	 width: 76px;
	 height: 76px;
	 top: -3px;
	 left: -3px;
	 border-width: 1px;
	 border-style: solid;
	 border-color: #111 #111 #111 transparent;
	 border-radius: 50%;
	 transition: all 1.5s ease-in-out;
}
 .profile .image .circle-2 {
	 width: 82px;
	 height: 82px;
	 top: -6px;
	 left: -6px;
	 border-color: #111 transparent #111 #111;
}
 .profile .image img {
	 display: block;
	 border-radius: 50%;
	 background: #f5e8df;
}
 .profile .image:hover {
	 cursor: pointer;
}
 .profile .image:hover .circle-1, .profile .image:hover .image .circle-2, .profile .image .image:hover .circle-2 {
	 transform: rotate(180deg);
}
 .profile .image:hover .circle-2 {
	 transform: rotate(-180deg);
}
 .profile .name {
	 font-size: 15px;
	 font-weight: 600;
	 margin-top: 20px;
}
 .profile .job {
	 font-size: 12px;
     line-height: 15px;
}
 .profile .actions {
	 margin-top: 33px;
}
 .profile .actions .btn {
	 display: block;
	 width: 120px;
	 height: 30px;
	 margin: 0 auto 10px auto;
	 background: none;
     border: 1px solid #111;
	 border-radius: 15px;
	 font-size: 12px;
	 font-weight: 600;
	 box-sizing: border-box;
	 transition: all 0.3s ease-in-out;
	 color: #111;
}
 .profile .actions .btn:hover {
	 background: #111;
	 color: #fff;
}
 .stats {
	 float: left;
}
 .stats .box {
	 box-sizing: border-box;
	 width: 120px;
	 height: 99px;
	//  background: #FFB4A2;
	 background: #B4C4DB;
	 text-align: center;
	 padding-top: 28px;
	 transition: all 0.4s ease-in-out;
}
 .stats .box:hover {
	//  background: #ffc5b8;
	 background: #B9C9E1;
	 cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>🦄</text></svg>")
      12 0, auto;
}
 .stats .box:nth-child(2) {
	 margin: 1px 0;
}
 .stats span {
	 display: block;
}
 .stats .value {
	 font-size: 18px;
	 color:#3E75C3;
	//  color:#FFB4A2;
	 font-weight: 600;
	}
	.stats .parameter {
		font-weight: 600;	
		font-size: 12px;
		color:#3E75C3;
		// color:#FFB4A2;
}
a{
    text-decoration:none;
}
button {
	font-family : inherit;
	cursor:pointer;
	cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>🚀</text></svg>")
	12 0, auto;
}
`;
