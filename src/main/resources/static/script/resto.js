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
							data: "serie.nom"
						},
						{
							data: "zone.nom"
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

			$.ajax({
				url: '/series/all',
				type: 'GET',
				success: function(data) {
					var option = '';
					data.forEach(e => {
						option += '<option value =' + e.id + '>' + e.nom + '</option>';
					});

					$('#serie').append(option);
				},
				error: function(jqXHR, textStatus,
					errorThrown) {
					console.log(textStatus);
				}

			});


			$.ajax({
				url: '/villes/all',
				type: 'GET',
				success: function(data) {
					var option = '';
					data.forEach(e => {
						option += '<option value =' + e.id + '>' + e.nom + '</option>';
					});

					$('#country').append(option);
				},
				error: function(jqXHR, textStatus,
					errorThrown) {
					console.log(textStatus);
				}

			});

			$('#country').on('change', function() {
				var countryId = this.value;
				$('#zone').html('');
				$.ajax({
					url: '/zones/findByIdVille/'+countryId,
					type: 'get',
					success: function(res) {

						$('#zone').html('<option value="">Select Zone</option>');
						$.each(res, function(key, value) {
							$('#zone').append('<option value =' + value.id + '>' + value.nom + '</option>');
						});
					}
				});
			});


			$('#btn').click(
				function() {
					var nom = $("#nom");
					var adresse = $("#adresse");
					var openTime = $("#openTime");
					var closeTime = $("#closeTime");
					var week = $("#week");
					var rank = $("#rank");
					var zone = $("#zone");
					var serie = $("#serie");
					if ($('#btn').text() == 'Ajouter') {
						var p = {
							nom: nom.val(),
							adresse: adresse.val(),
							openTime: openTime.val(),
							closeTime: closeTime.val(),
							week: week.val(),
							rank: rank.val(),

							serie: {
								id: serie.val()
							},

							zone: {
								id: zone.val()
							}
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
						newLigne += '<h4 class="d-inline-flex">Voulez vous vraiment supprimer ce restaurant ? </h4>';
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
						.eq(1).text();
					var adresse = $(this).closest('tr').find('td').eq(
						2).text();
					var openTime = $(this).closest('tr').find('td').eq(
						3).text();
					var closeTime = $(this).closest('tr').find('td').eq(
						4).text();
					var week = $(this).closest('tr').find('td').eq(
						5).text();
					var rank = $(this).closest('tr')
						.find('td').eq(6).text().replace(" ",
							"T");
					var serie = $(this).closest('tr').find('td')
						.eq(7).text();
					var zone = $(this).closest('tr').find('td')
						.eq(8).text();
					btn.text('Modifier');
					$("#nom").val(nom);
					$("#adresse").val(adresse);
					$("#openTime").val(openTime);
					$("#id").val(id);
					$("#closeTime").val(closeTime);
					$("#week").val(week);
					$("#rank").val(rank);
					var op = $('#serie option').filter(function() { return $(this).html() == serie; }).val();
					$("#serie").val(op);
					var op1 = $('#zone option').filter(function() { return $(this).html() == zone; }).val();
					$("#zone").val(op1);
					btn.click(function(e) {
						e.preventDefault();
						var p = {
							id: $("#id").val(),
							nom: $("#nom").val(),
							adresse: $("#adresse").val(),
							openTime: $("#openTime").val(),
							closeTime: $("#closeTime").val(),
							week: $("#week").val(),
							rank: $("#rank").val(),
							serie: {
								id: $("#serie").val()

							},
							zone: {
								id: $("#zone").val()

							}
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
