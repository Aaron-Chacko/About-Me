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
23						marginBottom: 25,
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
35						marginBottom: 23,
36						marginLeft: 5,
37						marginRight: 5,
38					}}>
39					<div 
40						style={{
41							width: 157,
42							display: "flex",
43							flexDirection: "column",
44							alignItems: "flex-start",
45							position: "relative",
46						}}>
47						<div 
48							style={{
49								alignSelf: "stretch",
50								display: "flex",
51								flexDirection: "column",
52								alignItems: "flex-start",
53								position: "relative",
54							}}>
55							<img
56								src={"https://i.imgur.com/1tMFzp8.png"} 
57								style={{
58									height: 299,
59									alignSelf: "stretch",
60									objectFit: "fill",
61								}}
62							/>
63							<img
64								src={"https://i.imgur.com/1tMFzp8.png"} 
65								style={{
66									position: "absolute",
67									top: 78,
68									right: -36,
69									width: 36,
70									height: 38,
71									objectFit: "fill",
72								}}
73							/>
74						</div>
75						<img
76							src={"https://i.imgur.com/1tMFzp8.png"} 
77							style={{
78								position: "absolute",
79								bottom: -7,
80								left: 33,
81								width: 36,
82								height: 38,
83								objectFit: "fill",
84							}}
85						/>
86					</div>
87					<span 
88						style={{
89							color: "#FFFFFF",
90							fontSize: 24,
91							marginTop: 91,
92						}} >
93						{"Football"}
94					</span>
95				</div>
96				<span 
97					style={{
98						color: "#FFFFFF",
99						fontSize: 16,
100						marginBottom: 27,
101						marginLeft: 74,
102						marginRight: 74,
103					}} >
104					{"Goated sport ain’t it"}
105				</span>
106				<div 
107					style={{
108						alignSelf: "stretch",
109						display: "flex",
110						flexDirection: "column",
111						alignItems: "flex-start",
112						background: "#F1F1F1",
113						paddingTop: 13,
114						paddingBottom: 13,
115						paddingLeft: 8,
116						paddingRight: 8,
117						marginBottom: 40,
118						marginLeft: 16,
119						marginRight: 16,
120					}}>
121					<span 
122						style={{
123							color: "#B7A5A5",
124							fontSize: 16,
125						}} >
126						{"Add a Comment..."}
127					</span>
128				</div>
129				<div 
130					style={{
131						alignSelf: "stretch",
132						display: "flex",
133						alignItems: "center",
134						background: "#1C1C1C",
135						paddingTop: 11,
136						paddingBottom: 11,
137						paddingLeft: 31,
138						paddingRight: 31,
139					}}>
140					<img
141						src={"https://i.imgur.com/1tMFzp8.png"} 
142						style={{
143							width: 36,
144							height: 32,
145							objectFit: "fill",
146						}}
147					/>
148					<div 
149						style={{
150							flex: 1,
151							alignSelf: "stretch",
152						}}>
153					</div>
154					<img
155						src={"https://i.imgur.com/1tMFzp8.png"} 
156						style={{
157							width: 29,
158							height: 26,
159							marginRight: 78,
160							objectFit: "fill",
161						}}
162					/>
163					<img
164						src={"https://i.imgur.com/1tMFzp8.png"} 
165						style={{
166							width: 33,
167							height: 24,
168							objectFit: "fill",
169						}}
170					/>
171				</div>
172			</div>
173		</div>
174	)
175}
