$(document)
	.ready(
		function() {

			table = $('#tresto')
				.DataTable({
					ajax: {
						url: "restos/all",
						dataSrc: ''
					},
					columns: [
						{
							data: "id"
						},
						{
							data: "nom"
						},
						{
							data: "adresse"
						},
						{
							data: "openTime"
						},
						{
							data: "closeTime"
						},
						{
							data: "week"
						},
						{
							data: "rank"
						},
						{
							"render": function() {
								return '<button type="button" class="btn btn-outline-danger supprimer">Supprimer</button>';
							}
						},
						{
							"render": function() {
								return '<button type="button" class="btn btn-outline-secondary modifier">Modifier</button>';
							}
						}]

				});

			$('#btn').click(
				function() {
					var nom = $("#nom");
					var adresse = $("#adresse");
					var openTime = $("#openTime");
					var closeTime = $("#closeTime");
					var week = $("#week");
					var rank = $("#rank");
					if ($('#btn').text() == 'Ajouter') {
						var p = {
							nom: nom.val(),
							adresse: adresse.val(),
							openTime: openTime.val(),
							closeTime: closeTime.val(),
							week: week.val(),
							rank: rank.val(),
						};

						$.ajax({
							url: 'restos/save',
							contentType: "application/json",
							dataType: "json",
							data: JSON.stringify(p),
							type: 'POST',
							async: false,
							success: function(data, textStatus,
								jqXHR) {
								table.ajax.reload();
							},
							error: function(jqXHR, textStatus,
								errorThrown) {
								console.log(textStatus);
							}
						});
						$("#main-content").load(
							"./page/resto.html");
					}
				});

			$('#table-content')
				.on(
					'click',
					'.supprimer',
					function() {

						var id = $(this).closest('tr').find(
							'td').eq(0).text();
						var oldLing = $(this).closest('tr')
							.clone();
						var newLigne = '<tr style="position: relative;" class="bg-light" ><th scope="row">'
							+ id
							+ '</th><td colspan="4" style="height: 100%;">';
						newLigne += '<h4 class="d-inline-flex">Voulez vous vraiment supprimer ce resto ? </h4>';
						newLigne += '<button type="button" class="btn btn-outline-primary btn-sm confirmer" style="margin-left: 25px;">Oui</button>';
						newLigne += '<button type="button" class="btn btn-outline-danger btn-sm annuler" style="margin-left: 25px;">Non</button></td></tr>';

						$(this).closest('tr').replaceWith(
							newLigne);
						$('.annuler').click(
							function() {
								$(this).closest('tr')
									.replaceWith(
										oldLing);
							});
						$('.confirmer')
							.click(
								function(e) {
									e.preventDefault();
									$
										.ajax({
											url: 'restos/delete/'
												+ id,
											data: {},
											type: 'DELETE',
											async: false,
											success: function(
												data,
												textStatus,
												jqXHR) {
												if (data
													.includes("error") == true) {
													$(
														"#error")
														.modal();
												} else {
													table.ajax
														.reload();
												}
											},
											error: function(
												jqXHR,
												textStatus,
												errorThrown) {
												$(
													"#error")
													.modal();
											}
										});

								});

					});

			$('#table-content').on(
				'click',
				'.modifier',
				function() {
					var btn = $('#btn');
					var id = $(this).closest('tr').find('td').eq(0)
						.text();
					;
					var nom = $(this).closest('tr').find('td')
						.eq(2).text();
					var adresse = $(this).closest('tr').find('td').eq(
						1).text();
					var openTime = $(this).closest('tr').find('td').eq(
						4).text();
					var closeTime = $(this).closest('tr').find('td').eq(
						4).text();
					var week = $(this).closest('tr').find('td').eq(
						4).text();
					var rank = $(this).closest('tr')
						.find('td').eq(3).text().replace(" ",
							"T");
					btn.text('Modifier');
					$("#nom").val(nom);
					$("#adresse").val(adreese);
					$("#openTime").val(closeTime);
					$("#id").val(id);
					$("#closeTime").val(closeTime);
					$("#week").val(week);
					$("#rank").val(rank);
					btn.click(function(e) {
						e.preventDefault();
						var p = {
							id: $("#id").val(),
							nom: $("#nom").val(),
							adresse: $("#adresse").val(),
							openTime: $("#openTime").val(),
							closeTime: $("#closeTime").val(),
							week: $("#week").val(),
							rank: $("#rank").val()
						};
						if ($('#btn').text() == 'Modifier') {
							$.ajax({
								url: 'restos/save',
								contentType: "application/json",
								dataType: "json",
								data: JSON.stringify(p),
								type: 'POST',
								async: false,
								success: function(data,
									textStatus, jqXHR) {
									table.ajax.reload();
									$("#adresse").val('');
									$("#nom").val('');
									btn.text('Ajouter');
								},
								error: function(jqXHR, textStatus,
									errorThrown) {
									console.log(textStatus);
								}
							});
							$("#main-content").load(
								"./page/resto.html");
						}
					});
				});

			// function remplir(data) {
			// var contenu = $('#table-content');
			// var ligne = "";
			// for (i = 0; i < data.length; i++) {
			// ligne += '<tr><th scope="row">' + data[i].id + '</th>';
			// ligne += '<td>' + data[i].code + '</td>';
			// ligne += '<td>' + data[i].nom + '</td>';
			// ligne += '<td>' + data[i].prix + '</td>';
			// ligne += '<td>' + data[i].dateAchat + '</td>';
			// ligne += '<td><button type="button" class="btn
			// btn-outline-danger
			// supprimer">Supprimer</button></td>';
			// ligne += '<td><button type="button" class="btn
			// btn-outline-secondary
			// modifier">Modifier</button></td></tr>';
			// }
			// contenu.html(ligne);
			// }

			// $.ajax({
			// url: 'restos/all',
			// data: {op: ''},
			// type: 'GET',
			// async: false,
			// success: function (data, textStatus, jqXHR) {
			// console.log(data);
			// remplir(data);
			// },
			// error: function (jqXHR, textStatus, errorThrown) {
			// console.log(textStatus);
			// }
			// });
		});
