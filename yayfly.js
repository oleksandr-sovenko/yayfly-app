jQuery(document).ready(($) => {
	const searchForm = $('form.searchForm');

	if (searchForm.length) {
		const whereFrom = searchForm.find('[placeholder="Where from?"]'),
			  whereTo   = searchForm.find('[placeholder="Where to?"]'),
			  dates     = searchForm.find('[placeholder="Dates"]'),
			  travelers = searchForm.find('[placeholder="Who are the travelers?"]');

		travelers.on('keypress', (e) => {
			return false;
		})
			  
		whereFrom.parent().css({ position: 'relative' });

		whereFrom.parent().append(`
			<div class="yayfly-dropdown-list">
				<ul>
					<li>Item 1</li>
					<li>Item 2</li>
					<li>Item 3</li>
					<li>Item 4</li>
					<li>Item 5</li>
					<li>Item 6</li>
				</ul>
			</div>
		`);


		/**
		 * 
		 */
		whereTo.parent().append(`
			<div class="yayfly-dropdown-list">
				<ul>
					<li>Item 11</li>
					<li>Item 12</li>
					<li>Item 13</li>
					<li>Item 14</li>
					<li>Item 15</li>
					<li>Item 16</li>
				</ul>
			</div>
		`);


		/**
		 * 
		 */
		travelers.parent().append(`
			<div class="yayfly-dropdown-list yayfly-p15">
				<div class="yayfly-row">
					<div class="yayfly-col yayfly-w50">
						<h5>Adults</h5>
						+ 12 years old
					</div>
					<div class="yayfly-col yayfly-w50 yayfly-text-right">
						<button class="minus">-</button>
						<span class="count">0</span>
						<button class="plus">+</button>
					</div>
				</div>
				<div class="yayfly-row">
					<div class="yayfly-col yayfly-w50">
						<h5>Children</h5>
						Between 2 and 11 years old included
					</div>

					<div class="yayfly-col yayfly-w50 yayfly-text-right">
						<button class="minus">-</button>
						<span class="count">0</span>
						<button class="plus">+</button>
					</div>
				</div>
				<div class="yayfly-row">
					<div class="yayfly-col yayfly-w50">
						<h5>Infants</h5>
						- 2 years old
					</div>
					<div class="yayfly-col yayfly-w50 yayfly-text-right">
						<button class="minus">-</button>
						<span class="count">0</span>
						<button class="plus">+</button>
					</div>
				</div>
			</div>
		`);


		dates.daterangepicker({
    		"startDate": "03/03/2023",
    		"endDate": "03/09/2023",
    		autoApply: true,
		}, function(start, end, label) {
  			console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
		});		


		$(document).on('click', '.yayfly-dropdown-list li', (e) => {
			const el = $(e.target);

			el.closest('.yayfly-dropdown-list').removeClass('show');
		});


		$(document).on('click', '.yayfly-dropdown-list button', (e) => {
			const el      = $(e.target),
				  elCount = el.parent().find('.count');

			let count = parseInt(elCount.text());

			if (isNaN(count))
				count = 0;

			if (el.hasClass('minus'))
				count--;

			if (el.hasClass('plus'))
				count++;

			if (count < 0)
				count = 0;

			if (count > 7)
				count = 7;

			elCount.text(count);
		});


		/**
		 * 
		 */
		$(document).on('click', (e) => {
			const el = $(e.target);

			if (el.closest('.yayfly-dropdown-list').length)
				return;

			searchForm.find('.yayfly-dropdown-list').removeClass('show');			

			if (el[0] === whereFrom[1]) {
				// console.log('adasd');
				whereFrom.parent().find('.yayfly-dropdown-list').addClass('show');
			}

			if (el[0] === whereTo[0]) {
				whereTo.parent().find('.yayfly-dropdown-list').addClass('show');
			}

			if (el[0] === travelers[0]) {
				travelers.parent().find('.yayfly-dropdown-list').addClass('show');
			}
		});


		/**
		 * 
		 */
		$(searchForm).on('click', '.formTab button', (e) => {
			e.preventDefault();

			const el = $(e.target);

			searchForm.find('.formTab button').removeClass('active');
			el.addClass('active');
		});


		/**
		 * 
		 */
		$(searchForm).on('click', '.addFlightBtn', (e) => {
			console.log('addFlightBtn')
		});


		/**
		 * 
		 */
		$(searchForm).on('click', '[type="submit"]', (e) => {
			location.href = '/search';
		});


		/**
		 * 
		 */
		$(searchForm).on('click', 'img.iconimg', (e) => {
			console.log('swap')
		});


		/**
		 * 
		 */
		$(searchForm).on('submit', (e) => {
			e.preventDefault(e);
		});
	}
});
