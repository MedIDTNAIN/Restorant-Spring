$('a').removeClass('active');
$('a:contains(Statistiques)').addClass('active');
$("#main-content").load("page/statistiques.html");

function show(page) {
	if (page == 'resto') {
		$('a').removeClass('active');
		$('a:contains(resto)').addClass('active');
		$("#main-content").load("page/resto.html");

		event.preventDefault();
	}
	if (page == 'ville') {
		$('a').removeClass('active');
		$('a:contains(ville)').addClass('active');
		$("#main-content").load("page/ville.html");

		event.preventDefault();
	}
	if (page == 'zone') {
		$('a').removeClass('active');
		$('a:contains(zone)').addClass('active');
		$("#main-content").load("page/zone.html");

		event.preventDefault();
	}
	if (page == 'serie') {
		$('a').removeClass('active');
		$('a:contains(serie)').addClass('active');
		$("#main-content").load("page/serie.html");

		event.preventDefault();
	}
	if (page == 'specialite') {
		$('a').removeClass('active');
		$('a:contains(specialite)').addClass('active');
		$("#main-content").load("page/specialite.html");

		event.preventDefault();
	}
	if (page == "statistiques") {
		$('a').removeClass('active');
		$('a:contains(Statistiques)').addClass('active');
		$("#main-content").load("page/statistiques.html");
		event.preventDefault();
	}
	if (page == "marques") {
		$('a').removeClass('active');
		$('a:contains(Marques)').addClass('active');
		$("#main-content").load("page/marque.html");
		event.preventDefault();
	}
	if (page == "machines") {
		$('a').removeClass('active');
		$('a:contains(Machines)').addClass('active');
		$("#main-content").load("page/machine.html");
		event.preventDefault();
	}
}
