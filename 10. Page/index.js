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
23						marginBottom: 38,
24						marginLeft: 105,
25						marginRight: 105,
26					}} >
27					{"AQUILAGUS"}
28				</span>
29				<img
30					src={"https://i.imgur.com/1tMFzp8.png"} 
31					style={{
32						height: 173,
33						marginBottom: 44,
34						marginLeft: 16,
35						marginRight: 16,
36						alignSelf: "stretch",
37						objectFit: "fill",
38					}}
39				/>
40				<div 
41					style={{
42						alignSelf: "stretch",
43						display: "flex",
44						alignItems: "flex-start",
45						marginLeft: 69,
46						marginRight: 69,
47					}}>
48					<img
49						src={"https://i.imgur.com/1tMFzp8.png"} 
50						style={{
51							width: 36,
52							height: 38,
53							marginRight: 13,
54							objectFit: "fill",
55						}}
56					/>
57					<span 
58						style={{
59							color: "#FFFFFF",
60							fontSize: 24,
61							marginTop: 12,
62							flex: 1,
63						}} >
64						{"Space"}
65					</span>
66				</div>
67				<div 
68					style={{
69						alignSelf: "stretch",
70						display: "flex",
71						alignItems: "center",
72						marginBottom: 66,
73						marginLeft: 49,
74						marginRight: 49,
75					}}>
76					<img
77						src={"https://i.imgur.com/1tMFzp8.png"} 
78						style={{
79							width: 36,
80							height: 38,
81							marginRight: 20,
82							objectFit: "fill",
83						}}
84					/>
85					<span 
86						style={{
87							color: "#FFFFFF",
88							fontSize: 16,
89							flex: 1,
90						}} >
91						{"Intrigues me"}
92					</span>
93				</div>
94				<div 
95					style={{
96						alignSelf: "stretch",
97						display: "flex",
98						flexDirection: "column",
99						alignItems: "flex-start",
100						background: "#F1F1F1",
101						paddingTop: 13,
102						paddingBottom: 13,
103						paddingLeft: 8,
104						paddingRight: 8,
105						marginBottom: 40,
106						marginLeft: 16,
107						marginRight: 16,
108					}}>
109					<span 
110						style={{
111							color: "#B7A5A5",
112							fontSize: 16,
113						}} >
114						{"Add a Comment..."}
115					</span>
116				</div>
117				<div 
118					style={{
119						alignSelf: "stretch",
120						display: "flex",
121						alignItems: "center",
122						background: "#1C1C1C",
123						paddingTop: 11,
124						paddingBottom: 11,
125						paddingLeft: 31,
126						paddingRight: 31,
127					}}>
128					<img
129						src={"https://i.imgur.com/1tMFzp8.png"} 
130						style={{
131							width: 36,
132							height: 32,
133							objectFit: "fill",
134						}}
135					/>
136					<div 
137						style={{
138							flex: 1,
139							alignSelf: "stretch",
140						}}>
141					</div>
142					<img
143						src={"https://i.imgur.com/1tMFzp8.png"} 
144						style={{
145							width: 29,
146							height: 26,
147							marginRight: 78,
148							objectFit: "fill",
149						}}
150					/>
151					<img
152						src={"https://i.imgur.com/1tMFzp8.png"} 
153						style={{
154							width: 33,
155							height: 24,
156							objectFit: "fill",
157						}}
158					/>
159				</div>
160			</div>
161		</div>
162	)
163}
