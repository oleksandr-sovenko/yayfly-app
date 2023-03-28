<?php

/*
Plugin Name:    YAY FLY
Description:	This plugin as an add-on to the existing theme of the site and for additional functionality.
Version:        1.0.0
Author:         YAY FLY
Author URI:     https://yayfly.com/
License:        GPLv2 or later
*/


/**
 * 
 */
add_action('wp_enqueue_scripts', function() {
	wp_register_style('yayfly-inputs', plugin_dir_url(__FILE__).'yayfly-inputs.css', false, time());
	wp_enqueue_style('yayfly-inputs');
	wp_register_script('yayfly-inputs', plugin_dir_url(__FILE__).'yayfly-inputs.js', NULL, time(), true);
	wp_enqueue_script('yayfly-inputs');	
}, 11);


/**
 * 
 */
add_shortcode('flights_engine_main_form', function($atts) {
    return file_get_contents(__DIR__.'/flights_engine_main_form.html');
});


/**
 * 
 */
add_action('admin_enqueue_scripts', function($hook_suffix) {
	if ($hook_suffix !== 'toplevel_page_flights-engine')
		return;

	wp_enqueue_media();
});


/**
 * 
 */
add_action('admin_menu', function() {
    add_menu_page('Flights Engine', 'Flights Engine', 'manage_options', 'flights-engine', function() {
        ?>
			<script>
				jQuery(document).on('click', '[data-action="change-logo"]', function() {
					const	el     = jQuery(this),
							dialog = wp.media({
								title: 'Upload Logo',
								button: { text: 'Choose Logo' },
								multiple: false
						  	});

					dialog.on('select', function() {
						const obj = dialog.state().get('selection').toJSON()[0];

						el.attr('src', obj.url);
						el.parent().find('[name="logo[url]"]').val(obj.url);
					});

					dialog.open();
				});
			</script>

            <div class="wrap">
                <h1 class="wp-heading-inline">Flights Engine</h1>

                <?php if (!empty($_POST)): ?>
					<div id="setting-error-settings_updated" class="notice notice-success settings-error is-dismissible"> 
					<p><strong>Settings saved.</strong></p><button type="button" class="notice-dismiss"><span class="screen-reader-text">Dismiss this notice.</span></button></div>
					<?php update_option('flights_engine', ['settings' => $_POST]) ?>
				<?php endif ?>

				<?php
					$flights_engine = get_option('flights_engine', []);

					if (empty($flights_engine['settings']['logo'])) {
						$flights_engine['settings']['logo'] = [
							'url' => '/wp-admin/images/wordpress-logo.svg',
							// 'width' => '100',
							// 'height' => '100',
						];
					}
				?>

				<form method="post">
					<h2 class="title">General</h2>
					<table class="form-table" role="presentation">
						<tbody>
							<tr>
								<th scope="row">Logo</th>
								<td>
									<img src="<?= $flights_engine['settings']['logo']['url'] ?>" data-action="change-logo" style="cursor: pointer;">
									<input name="logo[url]" type="hidden" value="<?= $flights_engine['settings']['logo']['url'] ?>">
								</td>
							</tr>
							<tr>
								<th scope="row">Title</th>
								<td>
									<fieldset><legend class="screen-reader-text"><span>Title</span></legend>
									<label>
										<input name="title" type="text" value="<?= isset($flights_engine['settings']['title']) ? $flights_engine['settings']['title'] : '' ?>" class="regular-text">
									</label>
								</td>
							</tr>
							<!--tr>
								<th scope="row">Width</th>
								<td><input name="logo[width]" type="number" class="small-text" value="<?= $flights_engine['settings']['logo']['width'] ?>"> px</td>
							</tr>
							<tr>
								<th scope="row">Height</th>
								<td><input name="logo[height]" type="number" class="small-text" value="<?= $flights_engine['settings']['logo']['height'] ?>"> px</td>
							</tr-->
						</tbody>
					</table>


					<h2 class="title">Short Code</h2>
					<p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>

					<table class="form-table" role="presentation">
						<tbody>
							<tr>
								<th scope="row"><label>Main Form</label></th>
								<td><code>[flights_engine_main_form]</code></td>
							</tr>
							<tr>
								<th scope="row"><label>Phone</label></th>
								<td><input name="phone" type="text" value="<?= !empty($flights_engine['settings']['phone']) ? $flights_engine['settings']['phone'] : '' ?>" class="regular-text"></td>
							</tr>
						</tbody>
					</table>

					<h2 class="title">Popup</h2>
					<p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>

					<table class="form-table" role="presentation">
						<tbody>
							<tr>
								<th scope="row"><label>Search</label></th>
								<td>
									<fieldset>
										<legend class="screen-reader-text"><span>Enabled</span></legend>
										<label>
											<input name="popup[search][enabled]" type="checkbox" value="yes" <?= !empty($flights_engine['settings']['popup']['search']['enabled']) ? 'checked' : '' ?>> Enabled
										</label>
									</fieldset>
									<p>URL for webhook zapier</p>
									<input name="popup[search][zapier_webhook_url]" type="text" value="<?= !empty($flights_engine['settings']['popup']['search']['zapier_webhook_url']) ? $flights_engine['settings']['popup']['search']['zapier_webhook_url'] : '' ?>" class="regular-text"></td>
							</tr>
						</tbody>
					</table>  


					<h2 class="title">Unpublished Deal Detected</h2>
					<p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>

					<table class="form-table" role="presentation">
						<tbody>
							<tr>
								<th scope="row">Show on pages</th>
								<td>
									<fieldset>
										<legend class="screen-reader-text"><span>Search </span></legend>
										<label>
											<input name="unpublished_deal_detected[show_on][search]" type="checkbox" value="yes" <?= !empty($flights_engine['settings']['unpublished_deal_detected']['show_on']['search']) ? 'checked' : '' ?>> Search
										</label>
									</fieldset>

									<fieldset>
										<legend class="screen-reader-text"><span>Details Booking</span></legend>
										<label>
											<input name="unpublished_deal_detected[show_on][details_booking]" type="checkbox" value="yes" <?= !empty($flights_engine['settings']['unpublished_deal_detected']['show_on']['details_booking']) ? 'checked' : '' ?>> Details Booking
										</label>
									</fieldset>								

									<fieldset>
										<legend class="screen-reader-text"><span>Confirm Booking</span></legend>
										<label>
											<input name="unpublished_deal_detected[show_on][confirm_booking]" type="checkbox" value="yes" <?= !empty($flights_engine['settings']['unpublished_deal_detected']['show_on']['confirm_booking']) ? 'checked' : '' ?>> Confirm Booking
										</label>
									</fieldset>

									<fieldset>
										<legend class="screen-reader-text"><span>Payment</span></legend>
										<label>
											<input name="unpublished_deal_detected[show_on][payment]" type="checkbox" value="yes" <?= !empty($flights_engine['settings']['unpublished_deal_detected']['show_on']['payment']) ? 'checked' : '' ?>> Payment
										</label>
									</fieldset>
								</td>
							</tr>
						</tbody>
					</table>

					<h2 class="title">Duffel API</h2>
					<p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>

					<table class="form-table" role="presentation">
						<tbody>
							<tr>
								<th scope="row">Markup %</th>
								<td>
									<fieldset><legend class="screen-reader-text"><span>Markup %</span></legend>
									<label>
										<input name="duffel[markup]" type="text" value="<?= !empty($flights_engine['settings']['duffel']['markup']) ? $flights_engine['settings']['duffel']['markup'] : '0' ?>" class="regular-text">
									</label>
								</td>
							</tr>
							<tr>
								<th scope="row"><label>Test Token</label></th>
								<td><input name="duffel[token][test]" type="text" value="<?= !empty($flights_engine['settings']['duffel']['token']['test']) ? $flights_engine['settings']['duffel']['token']['test'] : '' ?>" class="regular-text"></td>
							</tr>

							<tr>
								<th scope="row"><label>Live Token</label></th>
								<td><input name="duffel[token][live]" type="text" value="<?= !empty($flights_engine['settings']['duffel']['token']['live']) ? $flights_engine['settings']['duffel']['token']['live'] : '' ?>" class="regular-text"></td>
							</tr>
							<tr>
								<th scope="row">Mode</th>
								<td>
									<fieldset><legend class="screen-reader-text"><span>Mode</span></legend>
									<label>
										<input type="radio" name="duffel[mode]" value="test" <?= (!empty($flights_engine['settings']['duffel']['mode']) and $flights_engine['settings']['duffel']['mode'] == 'test') ? 'checked' : '' ?>>
										<span class="date-time-text">Test</span>
									</label><br>
									<label>
										<input type="radio" name="duffel[mode]" value="live"  <?= (!empty($flights_engine['settings']['duffel']['mode']) and $flights_engine['settings']['duffel']['mode'] == 'live') ? 'checked' : '' ?>>
										<span class="date-time-text">Live</span>
									</label><br>
								</td>
							</tr>
							<tr>
								<th scope="row">Supplier Timeout</th>
								<td>
									<fieldset><legend class="screen-reader-text"><span>Supplier Timeout</span></legend>
									<p>The maximum amount of time in milliseconds to wait for each airline search to complete.<br>This timeout applies to the response time of the call to the airline and includes some additional overhead added by Duffel.<br>More info here <a target="_blank" href="https://duffel.com/docs/guides/search-best-practices">https://duffel.com/docs/guides/search-best-practices</a></p><br>
									<label>
										<input name="duffel[supplier_timeout]" type="text" value="<?= !empty($flights_engine['settings']['duffel']['supplier_timeout']) ? $flights_engine['settings']['duffel']['supplier_timeout'] : '10000' ?>" class="regular-text">
									</label>
								</td>
							</tr>
						</tbody>
					</table> 					

					<p class="submit">
						<input type="submit" name="submit" id="submit" class="button button-primary" value="Save Changes">
					</p>
				</form>
			</div>
        <?php
    }, 'dashicons-airplane');
});


// static/media
//  https://yayfly.com/wp-content/plugins/yayfly/build/static/js/main.47ecad46.js

/**
 * 
 */
add_action('init', function() {
	if (!file_exists(ABSPATH.'/static'))
		symlink('wp-content/plugins/yayfly/build/static', ABSPATH.'/static');

	if (strstr($_SERVER['REQUEST_URI'], '/api/')) {
		header('Access-Control-Allow-Origin: *');
		header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
		header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With');
		header('Content-Type: application/json');
		header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
		header('Cache-Control: post-check=0, pre-check=0', false);
		header('Pragma: no-cache');


		// /api/zapier-hooks
		if ($_SERVER['REQUEST_URI'] == '/api/zapier-hooks-catch') {
			$url = !empty($_REQUEST['url']) ? $_REQUEST['url'] : '';
			$data = !empty($_REQUEST['data']) ? $_REQUEST['data'] : [];
			$result = '';

			if (!empty($url) and !empty($data) and is_array($data))
				$result = http_request($url, $data);

			wp_send_json(['result' => $result, '_REQUEST' => $_REQUEST]);
		}			


		// /api/airports
		if ($_SERVER['REQUEST_URI'] == '/api/airports') {
			die(file_get_contents(__DIR__.'/airports.json'));
		}		


		// /api/order/create
		if ($_SERVER['REQUEST_URI'] == '/api/order/create') {
			$input = json_decode(file_get_contents('php://input'));
			// wp_send_json($input);

			$data = [ 'data' => [
				'type' => 'instant',
				'services' => $input->services,
				'selected_offers' => [$input->offer->id],
				'payments' => [
					['type' => 'balance', 'currency' => 'USD', 'amount' => round($input->amount, 2)]
				],
				'passengers' => $input->passengers,					
			] ];

			$data = duffel_request('https://api.duffel.com/air/orders', $data);

			$flights_engine = get_option('flights_engine', []);

			if (!empty($data->data) and !empty($flights_engine['settings']['duffel']['markup'])) {
				$markup = floatval($flights_engine['settings']['duffel']['markup']);

				$data->data->total_amount = sprintf('%.2f', $data->data->total_amount + ($data->data->total_amount * ($markup / 100)));
			}

			wp_send_json($data);
		}		


		// /api/payments/intent/confirm
		if (strstr($_SERVER['REQUEST_URI'], '/api/payments/intent/confirm')) {
			$id    = preg_replace('@.*\/@', '', $_SERVER['REQUEST_URI']);
			$input = json_decode(file_get_contents('php://input'));

			if (empty($id))
				wp_send_json(['message' => 'Failure', 'id' => $id]);

			$data = duffel_request(
				'https://api.duffel.com/payments/payment_intents/'.$id.'/actions/confirm',
				['data' => ['id' => $id]]
			);

			wp_send_json($data);
		}	


		// /api/payments/refund
		if ($_SERVER['REQUEST_URI'] == '/api/payments/refund') {
			$input = json_decode(file_get_contents('php://input'));

			$data = duffel_request(
				'https://api.duffel.com/payments/refunds',
				[ 'data' => [
					'payment_intent_id' => $input->id,
					'currency'          => 'USD',
					'amount'            => $input->amount,
				]]
			);

			wp_send_json($data);
		}


		// /api/payments/intent
		if (strstr($_SERVER['REQUEST_URI'], '/api/payments/intent')) {
			$currency = !empty($_GET['currency']) ? $_GET['currency']         : 'USD';
			$amount   = !empty($_GET['amount'])   ? floatval($_GET['amount']) : 0;

			if (empty($amount))
				wp_send_json(['message' => 'Failure', 'data' => NULL]);			

			$data = duffel_request(
				'https://api.duffel.com/payments/payment_intents',
				[ 'data' => [ 'amount' => sprintf('%.2f', $amount), 'currency' => $currency ] ]
			);

			wp_send_json($data);
		}


		// /api/offers
		if ($_SERVER['REQUEST_URI'] == '/api/offers') {
			// wp_send_json(json_decode(file_get_contents('/tmp/example.json')));

			$input = json_decode(file_get_contents('php://input'), true);
			if (empty($input))
				$input = [];

			$required_fields = [];

			if (empty($input['type']))
				$input['type'] = 'round-trip';

			foreach(['origin', 'destination', 'depart', 'return'] as $field) {
				if (empty($input[$field])) {
					if ($field == 'return' and $input['type'] == 'one-way')
						continue;

					$required_fields[] = $field;
				}
			}

			if (!empty($required_fields))
				wp_send_json([]);

			$data = duffel_offer_requests([
				'class'       => !empty($input['class'])       ? $input['class']       : '',
				'type'        => !empty($input['type'])        ? $input['type']        : '',
				'origin'      => !empty($input['origin'])      ? $input['origin']      : '',
				'destination' => !empty($input['destination']) ? $input['destination'] : '',
				'depart'      => !empty($input['depart'])      ? $input['depart']      : '',
				'return'      => !empty($input['return'])      ? $input['return']      : '',
				'passengers'  => !empty($input['passengers'])  ? $input['passengers']  : '',
			]);

			if (!$data)
				wp_send_json($data);
			
			$data = duffel_request('https://api.duffel.com/air/offer_requests/'.$data->id);

			$flights_engine = get_option('flights_engine', []);

			if (!empty($data->data->offers) and !empty($flights_engine['settings']['duffel']['markup'])) {
				$markup = floatval($flights_engine['settings']['duffel']['markup']);

				foreach($data->data->offers as $offer)
					$offer->total_amount = sprintf('%.2f', $offer->total_amount + ($offer->total_amount * ($markup / 100)));
			}

			wp_send_json($data);
		}


		// /api/offer/:id
		if (strstr($_SERVER['REQUEST_URI'], '/api/offer/')) {
			$id   = preg_replace('@.*\/@', '', $_SERVER['REQUEST_URI']);	
			$data = duffel_request('https://api.duffel.com/air/offers/'.$id.'?return_available_services=true');

			if (!empty($data->data))
				$data->data->seatmaps = duffel_request('https://api.duffel.com/air/seat_maps?offer_id='.$id);

			$flights_engine = get_option('flights_engine', []);

			if (!empty($data->data) and !empty($flights_engine['settings']['duffel']['markup'])) {
				$markup = floatval($flights_engine['settings']['duffel']['markup']);

				$data->data->total_amount = sprintf('%.2f', $data->data->total_amount + ($data->data->total_amount * ($markup / 100)));
			}

			wp_send_json($data);
		}		

		wp_send_json([]);
	}

	if (
		strstr($_SERVER['REQUEST_URI'], '/search') or
		strstr($_SERVER['REQUEST_URI'], '/booking-details') or
		strstr($_SERVER['REQUEST_URI'], '/confirm-booking') or
		strstr($_SERVER['REQUEST_URI'], '/payment')
	) {
		header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
		header('Cache-Control: post-check=0, pre-check=0', false);
		header('Pragma: no-cache');

		$flights_engine = get_option('flights_engine', []);
		$flights_engine['url'] = home_url('/');

		$path = '/wp-content/plugins/yayfly/build';
		$content = file_get_contents(__DIR__.'/build/index.html');
		$content = str_replace([
			'href="/',
			'src="/',
			'<head>'
		], [
			'href="'.$path.'/',
			'src="'.$path.'/',
			'<head><script>window.flights_engine = '.json_encode($flights_engine).';</script>'
		], $content);

		die($content);
	}
});


/**
 * 
 */
function duffel_request($url, $data = []) {
	$token = '';
	$flights_engine = get_option('flights_engine', []);

	if (!empty($flights_engine['settings']['duffel']['mode'])) {
		$mode = $flights_engine['settings']['duffel']['mode'];
		$token = $flights_engine['settings']['duffel']['token'][$mode];
	}

	if (empty($token))
		return [];

	$headers = array (
		'Authorization: Bearer '.$token,
		'Accept: application/json',
		'Content-Type: application/json',
		'Duffel-Version: v1',
	);
 
  	$curl = curl_init();
  	curl_setopt($curl, CURLOPT_URL, $url);
  	curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
  	curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
  	curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);    
 
  	if (!empty($data))
    	curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($data));
 
  	$response = curl_exec($curl);
 
  	if (curl_errno($curl))
    	return curl_errno($curl);
 
  	curl_close($curl);

  	$response = json_decode($response);
 
  	return $response;
}


/**
 * @type
 * @from
 * @to
 * @depart
 * @return
 */
function duffel_offer_requests($params) {
	$flights_engine = get_option('flights_engine', []);

	$passengers = [];

	foreach(['class', 'type', 'origin', 'destination', 'depart', 'return', 'passengers'] as $name) {
		if ($name == 'class' and empty($params[$name]))
			$params[$name] = 'economy';

		if ($name == 'type' and empty($params[$name]))
			$params[$name] = 'one-way';

		if ($name == 'passengers' and empty($params[$name]))
			$params[$name] = ['adult' => 1];

		if ($name == 'return' and $params['type'] == 'one-way')
			continue;

		if (empty($params[$name]))
			return false;
	}

	foreach(['adult', 'child', 'infant'] as $type) {
		if ($type == 'infant')
			$type = 'infant_without_seat';

		if (!empty($params['passengers'][$type])) {
			for ($i = 0; $i < intval($params['passengers'][$type]); $i++)
				$passengers[] = ['type' => $type];
		}
	}

	$data = [
		'slices' => [
			[
				'origin' => $params['origin'],
				'destination' => $params['destination'],
				'departure_date' => $params['depart'],
			],
		],
		'passengers'  => $passengers,
		'cabin_class' =>$params['class']		
	];

	if ($params['type'] == 'round-trip')
		$data['slices'][] = [
			'origin' => $params['destination'],
			'destination' => $params['origin'],
			'departure_date' => $params['return'],
		];

	$supplier_timeout = '';
	if (!empty($flights_engine['settings']['duffel']['supplier_timeout']))
		$supplier_timeout = 'supplier_timeout='.$flights_engine['settings']['duffel']['supplier_timeout'];

	$json = duffel_request(
		'https://api.duffel.com/air/offer_requests?'.$supplier_timeout,
		[ 'data' => $data ]
	);

	if (!empty($json->data)) {
		return $json->data;
	} else
		return [];
}


/**
 * 
 */
function http_request($url, $data = []) { 
  	$curl = curl_init();
  	curl_setopt($curl, CURLOPT_URL, $url);
  	curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
  	curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);   
 
  	if (!empty($data))
    	curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($data));
 
  	$response = curl_exec($curl);
 
  	if (curl_errno($curl))
    	return curl_errno($curl);
 
  	curl_close($curl);
 
  	return $response;
}

?>
