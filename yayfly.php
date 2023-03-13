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
	wp_deregister_script('jquery');
	wp_register_script('jquery', 'https://code.jquery.com/jquery-3.6.4.min.js', false);
	wp_enqueue_script('jquery');

	wp_register_script('moment', 'https://cdn.jsdelivr.net/momentjs/latest/moment.min.js', false);
	wp_enqueue_script('moment');	

	wp_register_style('daterangepicker', 'https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css', false);
	wp_enqueue_style('daterangepicker');
	wp_register_script('daterangepicker', 'https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js', array('jquery', 'moment'));
	wp_enqueue_script('daterangepicker');	

	wp_register_style('yayfly', plugin_dir_url(__FILE__).'yayfly.css', false, time());
	wp_enqueue_style('yayfly');
	wp_register_script('yayfly', plugin_dir_url(__FILE__).'yayfly.js', NULL, time(), true);
	wp_enqueue_script('yayfly');
}, 11);


/**
 * 
 */
add_action('init', function() {
	if (
		strstr($_SERVER['REQUEST_URI'], '/search') or
		$_SERVER['REQUEST_URI'] == '/booking-details' or
		$_SERVER['REQUEST_URI'] == '/confirm-booking' or
		$_SERVER['REQUEST_URI'] == '/payment'		
	) {
		$path = '/wp-content/plugins/yayfly/build';
		$content = file_get_contents(__DIR__.'/build/index.html');
		$content = str_replace([
			'href="/',
			// 'src="/static/'
		], [
			'href="'.$path.'/',
			// 'src="'.$path.'/static/'
		], $content);

		die($content);
	}


	if (strstr($_SERVER['REQUEST_URI'], '/api/')) {
		header('Access-Control-Allow-Origin: *');
		header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
		header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With');
		header('Content-Type: application/json');


		// /api/airports
		if ($_SERVER['REQUEST_URI'] == '/api/airports') {
			die(file_get_contents(__DIR__.'/airports.json'));
			// $input = json_decode(file_get_contents('php://input'));
			// // wp_send_json($input);

			// $data = [ 'data' => [
			// 	'type' => 'instant',
			// 	'services' => $input->services,
			// 	'selected_offers' => [$input->offer->id],
			// 	'payments' => [
			// 		['type' => 'balance', 'currency' => 'USD', 'amount' => round($input->amount, 2)]
			// 	],
			// 	'passengers' => $input->passengers,					
			// ] ];

			// $data = duffel_request('https://api.duffel.com/air/orders', $data);

			// wp_send_json($data);
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
			wp_send_json(json_decode(file_get_contents('/tmp/example.json')));

			$input = json_decode(file_get_contents('php://input'), true);
			if (empty($input))
				$input = [];

			$required_fields = [];

			if (empty($input['type']))
				$input['type'] = 'round';

			foreach(['from', 'to', 'depart', 'return'] as $field) {
				if (empty($input[$field])) {
					if ($field == 'return' and $input['type'] == 'one')
						continue;

					$required_fields[] = $field;
				}
			}

			if (!empty($required_fields))
				wp_send_json([]);

			$data = duffel_offer_requests([
				'class'      => !empty($input['class'])      ? $input['class']      : '',
				'type'       => !empty($input['type'])       ? $input['type']       : '',
				'from'       => !empty($input['from'])       ? $input['from']       : '',
				'to'         => !empty($input['to'])         ? $input['to']         : '',
				'depart'     => !empty($input['depart'])     ? $input['depart']     : '',
				'return'     => !empty($input['return'])     ? $input['return']     : '',
				'passengers' => !empty($input['passengers']) ? $input['passengers'] : '',
			]);

			if (!$data)
				wp_send_json($data);
			
			$data = duffel_request('https://api.duffel.com/air/offer_requests/'.$data->id);

			file_put_contents('/tmp/example.json', json_encode($data));
			// wp_send_json(json_decode(file_get_contents('/tmp/example.json')));

			wp_send_json($data);
		}


		// /api/offer/:id
		if (strstr($_SERVER['REQUEST_URI'], '/api/offer/')) {
			$id   = preg_replace('@.*\/@', '', $_SERVER['REQUEST_URI']);	
			$data = duffel_request('https://api.duffel.com/air/offers/'.$id.'?return_available_services=true');
			if (!empty($data->data))
				$data->data->seatmaps = duffel_request('https://api.duffel.com/air/seat_maps?offer_id='.$id);
			wp_send_json($data);
		}		

		wp_send_json([]);
	}	
});


/**
 * 
 */
function duffel_request($url, $data = []) {
	$headers = array (
		'Authorization: Bearer duffel_test_3O7Bl3sP-YmxCXxWK0Is--nLVqs9i91-K8cm53cy89O',
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
	$passengers = [];

	foreach(['class', 'type', 'from', 'to', 'depart', 'return', 'passengers'] as $name) {
		if ($name == 'class' and empty($params[$name]))
			$params[$name] = 'economy';

		if ($name == 'type' and empty($params[$name]))
			$params[$name] = 'one';

		if ($name == 'passengers' and empty($params[$name]))
			$params[$name] = ['adult' => 1];

		if ($name == 'return' and $params['type'] == 'one')
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
				'origin' => $params['from'],
				'destination' => $params['to'],
				'departure_date' => $params['depart'],
			],
		],
		'passengers'  => $passengers,
		'cabin_class' =>$params['class']		
	];

	if ($params['type'] == 'round')
		$data['slices'][] = [
			'origin' => $params['to'],
			'destination' => $params['from'],
			'departure_date' => $params['return'],
		];

	$json = duffel_request(
		'https://api.duffel.com/air/offer_requests?supplier_timeout=10000',
		[ 'data' => $data ]
	);

	if (!empty($json->data)) {
		return $json->data;
	} else
		return [];
}

?>
