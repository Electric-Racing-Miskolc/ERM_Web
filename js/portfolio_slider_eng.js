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
			'title' : 'Tagfelvétel',
			'description'   : 'We welcome in our team all enthusiastic students who want to participate in building a racing car! 2023.02.21',
			'thumbnail' : ['img/portfolio/small/No8_1.webp', 'img/portfolio/small/No8_2.webp'],
			'large' : ['img/portfolio/large/No8_1.webp', 'img/portfolio/large/No8_2.webp'],
			'button_list'   :
			[
				{ 'title':'More about the admission', 'url' : 'https://forms.gle/LxpwQ7niZHBf6zmp7' },
			],
			'tags'  : ['Team','All']
			},

			{
			'title' : 'Altium Sponsoration',
			'description'   : 'Our team had the oportunity to buy their first electric motor. We would like to thank the University of Miskolc, Faculty of Mechanical Engineering and Informatics for the financial support and PUT Motorsport for the collaboration! 2023.02.16.',
			'thumbnail' : ['img/portfolio/small/No7.webp'],
			'large' : ['img/portfolio/large/No7.webp'],
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
			'thumbnail' : ['img/portfolio/small/No6.webp'],
			'large' : ['img/portfolio/large/No6.webp'],
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
			'thumbnail' : ['img/portfolio/small/No5.webp'],
			'large' : ['img/portfolio/large/No5.webp'],
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
			'thumbnail' : ['img/portfolio/small/No4.webp'],
			'large' : ['img/portfolio/large/No4.webp'],
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
			'thumbnail' : ['img/portfolio/small/No3.webp'],
			'large' : ['img/portfolio/large/No3.webp'],
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
			'thumbnail' : ['img/portfolio/small/No2_1.webp', 'img/portfolio/small/No2_2.webp'],
			'large' : ['img/portfolio/large/No2_1.webp', 'img/portfolio/large/No2_2.webp'],
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
			'thumbnail' : ['img/portfolio/small/No1.webp'],
			'large' : ['img/portfolio/large/No1.webp'],
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