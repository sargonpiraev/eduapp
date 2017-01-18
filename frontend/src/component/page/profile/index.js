import React from 'react';

export default class extends React.Component {

	render () {
		return (
			<div className="profile-page">
				<nav className="navbar navbar-default">
					<div className="container">
						<ul className="nav navbar-nav">
							<li className="active"><a href="#home">Home</a></li>
							<li><a href="#">Notifications</a></li>
							<li><a className="messages" href="#">Messages</a></li>
						</ul>
						<ul className="nav navbar-nav navbar-right">
							<li>
								<form className="navbar-form navbar-right" role="search">
									<div className="input-group">
										<input className="form-control" type="text" placeholder="Search Twitter"/>
										<div className="input-group-btn">
											<button className="btn btn-default" type="submit">Submit</button>
										</div>
									</div>
								</form>
							</li>
							<li className="dropdown">
								<a className="dropdown-toggle" href="#" data-toggle="dropdown">
									<img height="20" src="https://pbs.twimg.com/profile_images/531414442739646464/Hc6G_ekH_normal.jpeg"/>
								</a>
								<ul className="dropdown-menu">
									<li><a href="#"><b>Sargon Piraev</b><br/><small>View profile</small></a></li>
									<li className="divider"></li>
									<li><a href="#">Lists</a></li>
									<li className="divider"></li>
									<li><a href="#">Help</a></li>
									<li><a href="#">Keyboard shortcuts</a></li>
									<li className="divider"></li>
									<li><a href="#">Settings</a></li>
									<li><a href="#">Log out</a></li>
								</ul>
							</li>
							<li>
								<button className="btn btn-primary navbar-btn navbar-right create-tweet">Tweet</button>
							</li>
						</ul>
					</div>
				</nav>
				<div className="main-region"><div>
					<header className="canopy">
						<div className="container">
							<div className="row">
								<div className="col-md-2">
									<div className="thumbnail"><img src="https://pbs.twimg.com/profile_images/531414442739646464/Hc6G_ekH_400x400.jpeg" /></div>
								</div>
							</div>
						</div>
					</header>
					<nav className="navbar navbar-default">
						<div className="container">
							<div className="row">
								<div className="col-md-9 col-md-offset-3">
									<ul className="nav navbar-nav">
										<li className="active"><a href="#">Tweets</a></li>
										<li><a href="#">Following</a></li>
										<li><a href="#">Followers</a></li>
									</ul>
									<button className="btn btn-default navbar-btn pull-right">Edit profile</button>
								</div>
							</div>
						</div>
					</nav>
					<main className="container">
						<div className="row">
							<div className="col-md-3">
								<h3>Sargon Piraev<br /><small>@sargonpiraev</small></h3>
							</div>
							<div className="col-md-6">
								<div className="panel panel-info">
									<div className="panel-heading">
										<div className="input-group"><span className="input-group-addon"><img height="20" src="https://pbs.twimg.com/profile_images/531414442739646464/Hc6G_ekH_normal.jpeg" /></span>
											<input className="form-control"/>
												<div className="input-group-btn">
													<button className="btn btn-primary">Add photos</button>
												</div>
										</div>
									</div>
									<ul className="list-group">
										<li className="list-group-item">View 23 new Tweets</li>
									</ul>
									<div className="panel-body tweets"><div><div className="media">
										<div className="media-left">
											<a href="#">
												<img width="73px" className="media-object" src="https://pbs.twimg.com/profile_images/531414442739646464/Hc6G_ekH_400x400.jpeg" />
											</a>
										</div>
										<div className="media-body">
											<h4 className="media-heading">Sargon Piraev</h4>
											<p>123</p><img src="https://pbs.twimg.com/media/B75xFR9IAAMr9eH.jpg" width="100%"/>
											<div className="row">
												<div className="col-md-2">
													<button className="btn btn-link"><span className="glyphicon glyphicon-share-alt"></span></button>
												</div>
												<div className="col-md-2">
													<button className="btn btn-link"><span className="glyphicon glyphicon-retweet"></span><span> 4</span></button>
												</div>
												<div className="col-md-2">
													<button className="btn btn-link"><span className="glyphicon glyphicon-star"></span></button>
												</div>
												<div className="col-md-2">
													<div className="dropdown">
														<button type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-link dropdown-toggle"><span className="glyphicon glyphicon-option-horizontal"></span></button>
														<ul aria-labelledby="dropdownMenu1" className="dropdown-menu">
															<li><a href="#">Share via Direct Message</a></li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div><div className="media">
										<div className="media-left">
											<a href="#">
												<img width="73px" className="media-object" src="https://pbs.twimg.com/profile_images/643463843541155841/pmMygGUP_bigger.jpg" />
											</a>
										</div>
										<div className="media-body">
											<h4 className="media-heading">Lilly Key</h4>
											<p>Here the text 4 goes</p>
											<img src="https://pbs.twimg.com/media/B75xFR9IAAMr9eH.jpg" width="100%"/>
											<div className="row">
												<div className="col-md-2">
													<button className="btn btn-link"><span className="glyphicon glyphicon-share-alt"></span></button>
												</div>
												<div className="col-md-2">
													<button className="btn btn-link"><span className="glyphicon glyphicon-retweet"></span><span> 4</span></button>
												</div>
												<div className="col-md-2">
													<button className="btn btn-link"><span className="glyphicon glyphicon-star"></span></button>
												</div>
												<div className="col-md-2">
													<div className="dropdown">
														<button type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-link dropdown-toggle"><span className="glyphicon glyphicon-option-horizontal"></span></button>
														<ul aria-labelledby="dropdownMenu1" className="dropdown-menu">
															<li><a href="#">Share via Direct Message</a></li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div><div className="media">
										<div className="media-left"><a href="#"><img width="73px" className="media-object" src="https://pbs.twimg.com/profile_images/643463843541155841/pmMygGUP_bigger.jpg" /></a></div>
										<div className="media-body">
											<h4 className="media-heading">Clue Bill</h4>
											<p>The text 3 of the news 1 goes</p><img src="https://pbs.twimg.com/media/B75xFR9IAAMr9eH.jpg" width="100%"/>
											<div className="row">
												<div className="col-md-2">
													<button className="btn btn-link"><span className="glyphicon glyphicon-share-alt"></span></button>
												</div>
												<div className="col-md-2">
													<button className="btn btn-link"><span className="glyphicon glyphicon-retweet"></span><span> 4</span></button>
												</div>
												<div className="col-md-2">
													<button className="btn btn-link"><span className="glyphicon glyphicon-star"></span></button>
												</div>
												<div className="col-md-2">
													<div className="dropdown">
														<button type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-link dropdown-toggle"><span className="glyphicon glyphicon-option-horizontal"></span></button>
														<ul aria-labelledby="dropdownMenu1" className="dropdown-menu">
															<li><a href="#">Share via Direct Message</a></li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div><div className="media">
										<div className="media-left"><a href="#"><img width="73px" className="media-object" src="https://pbs.twimg.com/profile_images/643463843541155841/pmMygGUP_bigger.jpg" /></a></div>
										<div className="media-body">
											<h4 className="media-heading">Marry Key</h4>
											<p>Here the text 2 goes</p><img src="https://pbs.twimg.com/media/B75xFR9IAAMr9eH.jpg" width="100%"/>
											<div className="row">
												<div className="col-md-2">
													<button className="btn btn-link"><span className="glyphicon glyphicon-share-alt"></span></button>
												</div>
												<div className="col-md-2">
													<button className="btn btn-link"><span className="glyphicon glyphicon-retweet"></span><span> 4</span></button>
												</div>
												<div className="col-md-2">
													<button className="btn btn-link"><span className="glyphicon glyphicon-star"></span></button>
												</div>
												<div className="col-md-2">
													<div className="dropdown">
														<button type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-link dropdown-toggle"><span className="glyphicon glyphicon-option-horizontal"></span></button>
														<ul aria-labelledby="dropdownMenu1" className="dropdown-menu">
															<li><a href="#">Share via Direct Message</a></li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div><div className="media">
										<div className="media-left"><a href="#"><img width="73px" className="media-object" src="https://pbs.twimg.com/profile_images/643463843541155841/pmMygGUP_bigger.jpg" /></a></div>
										<div className="media-body">
											<h4 className="media-heading">Jack Bill</h4>
											<p>Here the text of the news 1 goes</p><img src="https://pbs.twimg.com/media/B75xFR9IAAMr9eH.jpg" width="100%"/>
											<div className="row">
												<div className="col-md-2">
													<button className="btn btn-link"><span className="glyphicon glyphicon-share-alt"></span></button>
												</div>
												<div className="col-md-2">
													<button className="btn btn-link"><span className="glyphicon glyphicon-retweet"></span><span> 4</span></button>
												</div>
												<div className="col-md-2">
													<button className="btn btn-link"><span className="glyphicon glyphicon-star"></span></button>
												</div>
												<div className="col-md-2">
													<div className="dropdown">
														<button type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-link dropdown-toggle"><span className="glyphicon glyphicon-option-horizontal"></span></button>
														<ul aria-labelledby="dropdownMenu1" className="dropdown-menu">
															<li><a href="#">Share via Direct Message</a></li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div></div></div>
								</div>
							</div>
							<div className="col-md-3">
								<div className="who-to-follow"><div>
									<div className="who-to-follow panel panel-info">
										<div className="panel-body">
											<h4>Близкие по духу</h4>
											<div className="medias"><div className="media">
												<div className="media-left"><a href="#"><img src="https://pbs.twimg.com/profile_images/523746093440331776/NWeBm6se_normal.png" className="media-object"/></a></div>
												<div className="media-body">
													<h5 className="media-heading">hello</h5>
													<button className="btn btn-default btn-sm"><span aria-hidden="true" className="glyphicon glyphicon-user"></span>Читать</button>
												</div>
											</div><div className="media">
												<div className="media-left"><a href="#"><img src="https://pbs.twimg.com/profile_images/523746093440331776/NWeBm6se_normal.png" className="media-object"/></a></div>
												<div className="media-body">
													<h5 className="media-heading">world</h5>
													<button className="btn btn-default btn-sm"><span aria-hidden="true" className="glyphicon glyphicon-user"></span>Читать</button>
												</div>
											</div></div>
										</div>
									</div>
								</div></div>
								<div className="trends"><ul className="list-unstyled">
									<div className="panel panel-default">
										<div className="panel-body">
											<h4>Trends</h4>
											<div id="trends-list"><li>#Marr</li><li>#GratefulYammouni</li><li>Jean de Villiers</li><li>#НасосБезСмс</li><li>Cereal Cafe</li><li>Sanusi</li><li>#танцынатнт</li><li>Frank Tyson</li><li>Ron Dennis</li><li>#ThankYouALDUBNation</li></div>
										</div>
									</div>
								</ul></div>
								<div className="stuff panel panel-info">
									<div className="panel-body">
										<ul>
											<li className="Footer-item Footer-copyright copyright">© 2015 Twitter</li>
											<li className="Footer-item"><a href="/about" className="Footer-link">О нас</a></li>
											<li className="Footer-item"><a href="//support.twitter.com" className="Footer-link">Помощь</a></li>
											<li className="Footer-item"><a href="/tos" className="Footer-link">Условия</a></li>
											<li className="Footer-item"><a href="/privacy" className="Footer-link">Конфиденциальность</a></li>
											<li className="Footer-item"><a href="//support.twitter.com/articles/20170514" className="Footer-link">Файлы cookie</a></li>
											<li className="Footer-item"><a href="//support.twitter.com/articles/20170451" className="Footer-link">О рекламе</a></li>
											<li className="Footer-item"><a href="//about.twitter.com/press/brand-assets" className="Footer-link">Бренд</a></li>
											<li className="Footer-item"><a href="https://blog.twitter.com" className="Footer-link">Блог</a></li>
											<li className="Footer-item"><a href="http://status.twitter.com" className="Footer-link">Состояние</a></li>
											<li className="Footer-item"><a href="https://about.twitter.com/products" className="Footer-link">Приложения</a></li>
											<li className="Footer-item"><a href="https://about.twitter.com/careers" className="Footer-link">Вакансии</a></li>
											<li className="Footer-item"><a href="//ads.twitter.com/start?ref=gl-tw-tw-twitter-advertise" className="Footer-link">Реклама в Твиттере</a></li>
											<li className="Footer-item"><a href="https://business.twitter.com" className="Footer-link">Компаниям</a></li>
											<li className="Footer-item"><a href="//media.twitter.com" className="Footer-link">СМИ</a></li>
											<li className="Footer-item"><a href="//dev.twitter.com" className="Footer-link">Разработчикам</a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</main>
				</div></div>
			</div>
		);
	}

};