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
23						marginBottom: 16,
24						marginLeft: 105,
25						marginRight: 105,
26					}} >
27					{"AQUILAGUS"}
28				</span>
29				<div 
30					style={{
31						alignSelf: "stretch",
32						display: "flex",
33						justifyContent: "space-between",
34						alignItems: "flex-start",
35						marginBottom: 72,
36						marginLeft: 10,
37						marginRight: 10,
38					}}>
39					<img
40						src={"https://i.imgur.com/1tMFzp8.png"} 
41						style={{
42							width: 182,
43							height: 309,
44							objectFit: "fill",
45						}}
46					/>
47					<div 
48						style={{
49							width: 100,
50							display: "flex",
51							flexDirection: "column",
52							marginTop: 85,
53						}}>
54						<div 
55							style={{
56								alignSelf: "stretch",
57								display: "flex",
58								justifyContent: "space-between",
59								alignItems: "flex-start",
60								marginBottom: 25,
61							}}>
62							<img
63								src={"https://i.imgur.com/1tMFzp8.png"} 
64								style={{
65									width: 36,
66									height: 38,
67									objectFit: "fill",
68								}}
69							/>
70							<span 
71								style={{
72									color: "#FFFFFF",
73									fontSize: 24,
74									marginTop: 13,
75								}} >
76								{"Kira"}
77							</span>
78						</div>
79						<span 
80							style={{
81								color: "#FFFFFF",
82								fontSize: 16,
83							}} >
84							{"Fav Char"}
85						</span>
86					</div>
87				</div>
88				<div 
89					style={{
90						alignSelf: "stretch",
91						display: "flex",
92						flexDirection: "column",
93						alignItems: "flex-start",
94						background: "#F1F1F1",
95						paddingTop: 13,
96						paddingBottom: 13,
97						paddingLeft: 8,
98						paddingRight: 8,
99						marginBottom: 40,
100						marginLeft: 16,
101						marginRight: 16,
102					}}>
103					<span 
104						style={{
105							color: "#B7A5A5",
106							fontSize: 16,
107						}} >
108						{"Add a Comment..."}
109					</span>
110				</div>
111				<div 
112					style={{
113						alignSelf: "stretch",
114						display: "flex",
115						alignItems: "center",
116						background: "#1C1C1C",
117						paddingTop: 11,
118						paddingBottom: 11,
119						paddingLeft: 31,
120						paddingRight: 31,
121					}}>
122					<img
123						src={"https://i.imgur.com/1tMFzp8.png"} 
124						style={{
125							width: 36,
126							height: 32,
127							objectFit: "fill",
128						}}
129					/>
130					<div 
131						style={{
132							flex: 1,
133							alignSelf: "stretch",
134						}}>
135					</div>
136					<img
137						src={"https://i.imgur.com/1tMFzp8.png"} 
138						style={{
139							width: 29,
140							height: 26,
141							marginRight: 78,
142							objectFit: "fill",
143						}}
144					/>
145					<img
146						src={"https://i.imgur.com/1tMFzp8.png"} 
147						style={{
148							width: 33,
149							height: 24,
150							objectFit: "fill",
151						}}
152					/>
153				</div>
154			</div>
155		</div>
156	)
157}
