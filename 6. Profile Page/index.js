import React from "react";
2export default (props) => {
3	return (
4		<div 
5			style={{
6				display: "flex",
7				flexDirection: "column",
8				background: "#FFFFFF",
9			}}>
10			<div 
11				style={{
12					height: 568,
13					alignSelf: "stretch",
14					display: "flex",
15					flexDirection: "column",
16					background: "linear-gradient(180deg, #8000FF, #00BFFF)",
17					paddingTop: 14,
18				}}>
19				<span 
20					style={{
21						color: "#0A0A0A",
22						fontSize: 16,
23						marginBottom: 23,
24						marginLeft: 105,
25						marginRight: 105,
26					}} >
27					{"AQUILAGUS"}
28				</span>
29				<img
30					src={"https://i.imgur.com/1tMFzp8.png"} 
31					style={{
32						height: 98,
33						marginBottom: 12,
34						marginLeft: 111,
35						marginRight: 111,
36						alignSelf: "stretch",
37						objectFit: "fill",
38					}}
39				/>
40				<span 
41					style={{
42						color: "#FFFFFF",
43						fontSize: 16,
44						marginBottom: 8,
45						marginLeft: 16,
46						marginRight: 16,
47					}} >
48					{"Hi, I'm Aaron Chacko, a tech enthusiast with an interest inclining towards Full Stack Development. I enjoy learning new technologies, working on creative projects, and collaborating with others to find innovative solutions. My goal is to continue growing my technical skills while making meaningful contributions through the projects I’m involved in. I’m always seeking opportunities to expand my knowledge, take on new challenges, and most importantly, learn from them."}
49				</span>
50				<div 
51					style={{
52						alignSelf: "stretch",
53						display: "flex",
54						alignItems: "center",
55						background: "#1C1C1C",
56						paddingTop: 11,
57						paddingBottom: 11,
58						paddingLeft: 31,
59						paddingRight: 31,
60					}}>
61					<img
62						src={"https://i.imgur.com/1tMFzp8.png"} 
63						style={{
64							width: 36,
65							height: 32,
66							objectFit: "fill",
67						}}
68					/>
69					<div 
70						style={{
71							flex: 1,
72							alignSelf: "stretch",
73						}}>
74					</div>
75					<img
76						src={"https://i.imgur.com/1tMFzp8.png"} 
77						style={{
78							width: 29,
79							height: 26,
80							marginRight: 78,
81							objectFit: "fill",
82						}}
83					/>
84					<img
85						src={"https://i.imgur.com/1tMFzp8.png"} 
86						style={{
87							width: 33,
88							height: 24,
89							objectFit: "fill",
90						}}
91					/>
92				</div>
93			</div>
94		</div>
95	)
96}
