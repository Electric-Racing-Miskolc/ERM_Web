$(function(){
$("#elastic_grid_demo").elastic_grid({	
	'hoverDirection': true,
	'hoverDelay': 0,
	'hoverInverse': false,
	'expandingSpeed': 500,
	'expandingHeight': 500,
	'items' :
		[
			{
				'title' : 'Join us!',
				'description'   : 'Our team starts the season with the recruitment programme. We welcome all enthusiastic students who want to participate in building a REAL race car! 2023.08.26.',
				'thumbnail' : ['../img/portfolio/small/No13_1.webp','../img/portfolio/small/No13_2.webp','../img/portfolio/small/No13_3.webp'],
				'large' : ['../img/portfolio/large/No13_1.webp','../img/portfolio/large/No13_2.webp','../img/portfolio/large/No13_3.webp'],
				'button_list'   :
				[
					{ 'title':'More about the Recruitment', 'url' : 'https://forms.gle/74WR79sqLaiThVga8' },
				],
				'tags'  : ['Team','All']
			},

			{
				'title' : 'Techtogether 2023',
				'description'   : 'Last week our team won the 3rd place in the 10th Techtogether engineering competition in Budapest.🥉 At the award ceremony, we also received a special prize for our achievement in the HUMDA Lab exercise. 🦾 2023.05.17.',
				'thumbnail' : ['../img/portfolio/small/No12_1.webp','../img/portfolio/small/No12_2.webp','../img/portfolio/small/No12_3.webp','../img/portfolio/small/No12_4.webp','../img/portfolio/small/No12_5.webp','../img/portfolio/small/No12_6.webp','../img/portfolio/small/No12_7.webp'],
				'large' : ['../img/portfolio/large/No12_1.webp','../img/portfolio/large/No12_2.webp','../img/portfolio/large/No12_3.webp','../img/portfolio/large/No12_4.webp','../img/portfolio/large/No12_5.webp','../img/portfolio/large/No12_6.webp','../img/portfolio/large/No12_7.webp',],
				'button_list'   :
				[
					{ 'title':'Facebook', 'url' : 'https://www.facebook.com/ERMiskolc/posts/pfbid02hk8kD21bWdhygZgKD9vcT6n1qriczrv72irMX3b2QzhsDcEjt3JqP5WuXLnuYFy2l' },
					{ 'title':'Instagram', 'url':'https://www.instagram.com/p/CsiNqZkoITn/'}
				],
				'tags'  : ['Competition','All']
			},
			{
				'title' : 'EuroSolid Zrt. Training',
				'description'   : 'We would like to thank EuroSolid Zrt. for their support in which our team members had the opportunity to participate in a 3-day SolidWorks training. During the training we learned basic program usage skills. This knowledge will greatly contribute to the success of our electric car design. 2023.03.20.',
				'thumbnail' : ['../img/portfolio/small/No10_1.webp', '../img/portfolio/small/No10_2.webp'],
				'large' : ['../img/portfolio/large/No10_1.webp', '../img/portfolio/large/No10_2.webp'],
				'button_list'   :
				[
					{ 'title':'Facebook', 'url' : 'https://www.facebook.com/photo?fbid=163722149874349&set=pcb.163722179874346' },
					{ 'title':'Instagram', 'url':'https://www.instagram.com/p/CqBLFpaI4wU/'},
					{ 'title':'EuroSolid Zrt.', 'url':'https://eurosolid.hu/'}
				],
				'tags'  : ['Sponsored','Team','All']
			},
			{
				'title' : 'Altium Sponsoration',
				'description'   : 'We would like to thank Altium for their multi-year support! Thanks to their professional software package, the design and manufacturing process of our systems will become way easier and quicker!⚡🏎🏁 2023.02.16.',
				'thumbnail' : ['../img/portfolio/small/No7.webp'],
				'large' : ['../img/portfolio/large/No7.webp'],
				'button_list'   :
				[
					{ 'title':'Facebook', 'url' : 'https://www.facebook.com/photo?fbid=146921701554394&set=a.116351514611413' },
					{ 'title':'Instagram', 'url':'https://www.instagram.com/p/Couxpi1oywQ/'},
					{ 'title':'Altium', 'url':'https://www.altium.com/'}
				],
				'tags'  : ['Sponsored','All']
			},
			{
				'title' : 'Emrax 228 MV Motor Arrieved!',
				'description'   : 'Our team had the oportunity to buy their first electric motor. We would like to thank the University of Miskolc, Faculty of Mechanical Engineering and Informatics for the financial support and PUT Motorsport for the collaboration! 2023.02.13.',
				'thumbnail' : ['../img/portfolio/small/No6.webp'],
				'large' : ['../img/portfolio/large/No6.webp'],
				'button_list'   :
				[
					{ 'title':'Facebook', 'url' : 'https://www.facebook.com/photo/?fbid=146044701642094&set=a.116351514611413' },
					{ 'title':'Instagram', 'url':'https://www.instagram.com/p/ConDRHapAiT/'},
				],
				'tags'  : ['Sponsored','All']
			},
			{
				'title' : 'EuroSolid Zrt. Sponsoration',
				'description'   : 'We would like to thank EuroSolid Zrt. for their support and help in which we\'ve got access to the 3DEXPERIENCE platform and many other utilities, as well as training, so we can monitor our work in a cloud-based system. 2022.12.08.',
				'thumbnail' : ['../img/portfolio/small/No5.webp'],
				'large' : ['../img/portfolio/large/No5.webp'],
				'button_list'   :
				[
					{ 'title':'Facebook', 'url' : 'https://www.facebook.com/photo?fbid=125757393670825&set=a.116351514611413' },
					{ 'title':'Instagram', 'url':'https://www.instagram.com/p/Cl6CmfEqj99/'},
					{ 'title':'EuroSolid Zrt.', 'url':'https://eurosolid.hu/'}
				],
				'tags'  : ['Sponsored','All']
			},
			{
				'title' : 'UniTek Sponsoration',
				'description'   : 'We would like to thank Unitek Drives for supporting us in building our electric car and Miskolci Egyetem (University of Miskolc) for their help with the purchase. 2022.11.21.',
				'thumbnail' : ['../img/portfolio/small/No4.webp'],
				'large' : ['../img/portfolio/large/No4.webp'],
				'button_list'   :
				[
					{ 'title':'Facebook', 'url' : 'https://www.facebook.com/photo?fbid=120098677570030&set=a.116351514611413' },
					{ 'title':'Instagram', 'url':'https://www.instagram.com/p/ClPC3yHMOL4/'},
					{ 'title':'Unitek', 'url':'https://www.unitek-industrie-elektronik.de/'}
				],
				'tags'  : ['Sponsored','All']
			},
			{
				'title' : 'University Sponsored Tools',
				'description'   : 'Thanks to Miskolci Egyetem (University of Miskolc) for their support in setting up the team and equipping our workshop. 2022.11.16.',
				'thumbnail' : ['../img/portfolio/small/No3.webp'],
				'large' : ['../img/portfolio/large/No3.webp'],
				'button_list'   :
				[
					{ 'title':'Facebook', 'url' : 'https://www.facebook.com/photo?fbid=118240334422531&set=a.116351514611413' },
					{ 'title':'Instagram', 'url':'https://www.instagram.com/p/ClCNqc0sEoW/'}
				],
				'tags'  : ['Sponsored', 'All']
			},
			{
				'title' : 'Team Startup Interview',
				'description'   : 'Electric Racing Miskolc is an enthusiastic, young and creative team. What are they doing? Details in our video. And you can still join. 2022.10.13.',
				'thumbnail' : ['../img/portfolio/small/No2_1.webp', '../img/portfolio/small/No2_2.webp'],
				'large' : ['../img/portfolio/large/No2_1.webp', '../img/portfolio/large/No2_2.webp'],
				'button_list'   :
				[
					{ 'title':'Facebook Video Post (HUN)', 'url' : 'https://www.facebook.com/unimiskolc/videos/452365386989036' },
					{ 'title':'University Of Miskolc', 'url':'http://www.uni-miskolc.hu'}
				],
				'tags'  : ['Team','All']
			},
			{
				'title' : 'The Beginning...',
				'description'   : 'We are happy to announce that the first fully electric Formula Student racecar engineering team of the University of Miskolc has been formed! Our team by the name Electric Racing Miskolc, representing the University of Miskolc, is competing in the Formula Student international racing series. 2022.11.11.',
				'thumbnail' : ['../img/portfolio/small/No1.webp'],
				'large' : ['../img/portfolio/large/No1.webp'],
				'button_list'   :
				[
					{ 'title':'Facebook', 'url' : 'https://www.facebook.com/photo?fbid=116351501278081&set=a.116351514611413' },
					{ 'title':'Instagram', 'url':'https://www.instagram.com/p/Ck1AipaKObb/'},
					{ 'title':'University Of Miskolc', 'url':'http://www.uni-miskolc.hu'}
				],
				'tags'  : ['Team','All']
			},
	 
		]
	});
});