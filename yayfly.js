window.airports = [];
window.travelers = {
	adults: 1,
	children: 0,
	infants: 0,
	cabinClass: 'economy',
};


const cabinClasses = {
	'economy': 'Economy',
	'premium-economy': 'Premium Economy',
	'business': 'Business',
	'first-class': 'First Class',
};


jQuery(document).ready(($) => {
	const searchForm = $('form.searchForm');

	if (searchForm.length) {
		const dates     = searchForm.find('[placeholder="Dates"]'),
			  travelers = searchForm.find('[placeholder="Who are the travelers?"]');


		setInterval(() => {
			if (window.device.current === 'mobile') {
				if ($('.yayfly-dropdown-list.show').length || $('.daterangepicker:visible').length) {
					$('body').css({ overflow: 'hidden' });
				} else {
					$('body').css({ overflow: 'auto' });
				}
			}
		}, 1000);


		searchForm.attr('data-tab', 'round-trip');


		/**
		 * 
		 */
		window.device = { current: '', before: '' };


		/**
		 * 
		 */
		$(window).resize(() => {
			window.device.before = window.device.current;

			if ($(window).width() > 767)
				window.device.current = 'desktop';
			else
				window.device.current = 'mobile';

			if (window.device.current !== window.device.before) {
				if (window.device.current === 'mobile') {
					searchForm.find('[name="whereFrom"]').attr('readonly', true);
					searchForm.find('[name="whereTo"]').attr('readonly', true);
				} else {
					searchForm.find('[name="whereFrom"]').attr('readonly', false);
					searchForm.find('[name="whereTo"]').attr('readonly', false);
				}

				dates.daterangepicker({
					locale: { format: 'ddd MMM D' },    		
					autoApply: window.device.current === 'desktop' ? true : false,
				}, function(start, end, label) {
					console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
				});				
			}
		});


		/**
		 * 
		 */
		$(window).trigger('resize');


		/**
		 * 
		 */
		const updateTravelers = () => {
			let result = [];

			if (window.travelers.adults)
				result.push(`${window.travelers.adults} ${window.travelers.adults > 1 ? 'Adults' : 'Adult'}`);

			if (window.travelers.children)
				result.push(`${window.travelers.children} ${window.travelers.children > 1 ? 'Children' : 'Child'}`);

			if (window.travelers.infants)
				result.push(`${window.travelers.infants} ${window.travelers.infants > 1 ? 'Infants' : 'Infant'}`);

			result.push(`${cabinClasses[window.travelers.cabinClass]}`);

			searchForm.find('[name="travelers"]').val(result.join(', '));
		}


		updateTravelers();


		/**
		 * 
		 */
		const search = (value) => {
			let items = [];

			if (value.length >= 3) {
				for (var airport of window.airports) {
					if (new RegExp(value, 'i').test(airport.text))
                        items.push(airport);
				}

				if (!items.length) {
					items.push({ value: 'null', text: 'Not Found' });
				}				
			}			

			return items;
		};


		/**
		 * 
		 */
		const liveSearch = (e) => {
			const value  = e.target.value,
				  parent = $(e.target).parent();

			let items = [];

			let icon = '/wp-content/plugins/yayfly/images/plane-departure.svg';

			if (e.target.name === 'whereTo')
				icon = '/wp-content/plugins/yayfly/images/plane-arrival.svg';

			if (window.device.current === 'desktop' && value.length >= 3)
				items = search(value);

			if ((window.device.current === 'desktop' && value.length >= 3) || window.device.current === 'mobile') {
				parent.find('.yayfly-dropdown-list').remove();
				parent.append(`
					<div class="yayfly-dropdown-list show">
						<input value="${value}" placeholder="Please type at least 3 letters">
						<ul>
							${items.map((item) => {
								return `<li data-value="${item.value}">
									<img src="${icon}">
									<span>${item.text}</span>
								</li>`;
							}).join('')}
						</ul>
						<button class="done">Done</button>
					</div>
				`);

				parent.find('.yayfly-dropdown-list input').on('input', (e) => {
					const value = e.target.value;

					let items = search(value);

					parent.find('.yayfly-dropdown-list ul').html(`
						${items.map((item) => {
							return `<li data-value="${item.value}">
								<img src="${icon}">
								<span>${item.text}</span>
							</li>`;
						}).join('')}
					`);
				});

				if (window.device.current === 'mobile')
					parent.find('.yayfly-dropdown-list input').trigger('input').focus();
			}
		} 


		/**
		 * 
		 */
		searchForm.on('input', '[name="whereFrom"], [name="whereTo"]', liveSearch);


		/**
		 * 
		 */
		searchForm.on('click', '.error', (e) => {
			const el = $(e.target);

			el.removeClass('error');
		});


		/**
		 * 
		 */
		searchForm.on('click', '[name="whereFrom"],[name="whereTo"],[name="travelers"]', (e) => {
			const el     = $(e.target),
				  parent = el.parent();

			if (el.attr('name') === 'travelers') {
				parent.find('.yayfly-dropdown-list').remove();
				parent.append(`
					<div class="yayfly-dropdown-list show yayfly-p15">
						<div class="yayfly-row">
							<div class="yayfly-col yayfly-w50">
								<h5>Adults</h5>
								+ 12 years old
							</div>
							<div class="yayfly-col yayfly-w50 yayfly-text-right">
								<button class="minus">-</button>
								<span class="count" data-type="adults">${window.travelers.adults}</span>
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
								<span class="count" data-type="children">${window.travelers.children}</span>
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
								<span class="count" data-type="infants">${window.travelers.infants}</span>
								<button class="plus">+</button>
							</div>
						</div>
						<div class="yayfly-row">
							<div class="yayfly-col yayfly-w100 yayfly-cabin-class">
								<span>Cabin class</span>
								<select>
									${Object.keys(cabinClasses).map((name) => {
										return `<option ${window.travelers.cabinClass == name ? 'selected' : ''} value="${name}">${cabinClasses[name]}</option>`;
									})}
								</select>
							</div>
						</div>

						<button class="done">Done</button>
					</div>
				`);
			} else {
				el.trigger('input');
			}
		});


		/**
		 * 
		 */
		dates.attr('readonly', true);
		travelers.attr('readonly', true);


		/**
		 * 
		 */
		$.get('/api/airports', (airports) => {
			window.airports = airports;
		});


		/**
		 * 
		 */
		travelers.on('keypress', (e) => {
			return false;
		})


		/**
		 * 
		 */
		$(document).on('click', '.yayfly-dropdown-list .done', (e) => {
			const el       = $(e.target),
				  dropdown = el.closest('.yayfly-dropdown-list');

			dropdown.removeClass('show');
		});


		/**
		 * 
		 */
		$(document).on('click', '.yayfly-dropdown-list li', (e) => {
			let el     = $(e.target),
				parent = el.closest('.yayfly-dropdown-list').parent();

			if (e.target.tagName !== 'LI')
				el = el.closest('li');

			parent.find('input').val(el.attr('data-value'));

			el.closest('.yayfly-dropdown-list').removeClass('show');
		});


		/**
		 * 
		 */
		$(document).on('change', '.yayfly-dropdown-list select', (e) => {
			const el    = $(e.target),
				  value = el.val();

			window.travelers.cabinClass = value;

			updateTravelers();
		});


		/**
		 * 
		 */
		$(document).on('click', '.yayfly-dropdown-list button', (e) => {
			const el      = $(e.target),
				  elCount = el.parent().find('.count'),
				  type    = elCount.data('type');

			if (el.hasClass('done'))
				return;

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

			if (type == 'adults') {
				if (count < 1)
					count = 1;

				if (window.travelers.infants > count) {
					window.travelers.infants = count;
					$('.count[data-type="infants"]').text(count);
				}
			}

			if (type == 'infants') {
				if (count > window.travelers.adults)
					count = window.travelers.adults;
			}

			window.travelers[type] = count;

			elCount.text(count);

			updateTravelers();
		});


		/**
		 * 
		 */
		$(document).on('click', (e) => {
			if (window.device.current === 'mobile')
				return;

			const el = $(e.target);

			if (el.closest('.yayfly-dropdown-list').length)
				return;

			searchForm.find('.yayfly-dropdown-list').removeClass('show');

			if ((e.target.name === 'whereFrom' || e.target.name === 'whereTo') && e.target.value.length >=3)
				$(e.target).parent().find('.yayfly-dropdown-list').addClass('show');

			if (e.target.name === 'travelers')
				$(e.target).parent().find('.yayfly-dropdown-list').addClass('show');
		});	


		/**
		 * 
		 */
		searchForm.on('click', '.initialSearch', (e) => {
			searchForm.removeClass('collapsed');
		});


		/**
		 * 
		 */
		searchForm.on('click', '.formTab button', (e) => {
			e.preventDefault();

			const el = $(e.target);

			if (window.device.current === 'desktop')
				searchForm.removeClass('collapsed');

			searchForm.attr('data-tab', el.attr('name'));

			searchForm.find('.formTab button').removeClass('active');
			el.addClass('active');

			searchForm.find('.addFlightBtn').css({ display: 'none' });

			if (el.attr('name') == 'multi-city') {
				searchForm.find('.addFlightBtn').css({ display: 'flex' });
			} else {
				$(searchForm).find('.wrapperItem:not(:first)').remove();
			}

			searchForm.find('[name="dates"]').prop('placeholder', 'Dates');

			if (el.attr('name') == 'one-way' || el.attr('name') == 'multi-city') {
				searchForm.find('[name="dates"]').prop('placeholder', 'Date');

				dates.daterangepicker({
					singleDatePicker: true,
					locale: { format: 'ddd MMM D' },    		
					autoApply: window.device.current === 'desktop' ? true : false,
				}, (start, end, label) => {

				});
			} else {
				dates.daterangepicker({
					locale: { format: 'ddd MMM D' },    		
					autoApply: window.device.current === 'desktop' ? true : false,
				}, (start, end, label) => {

				});
			}

			searchForm.find('.error').removeClass('error');
		});


		/**
		 * 
		 */
		searchForm.on('click', '.addFlightBtn', (e) => {
			searchForm.find('.error').removeClass('error');

			const wrapper = searchForm.find('.wrapper'),
				  item    = searchForm.find('.wrapperItem:eq(0)').clone();

			item.find('input').val('');
			item.find('[name="dates"]').daterangepicker({
				singleDatePicker: true,
				locale: { format: 'ddd MMM D' },    		
				autoApply: window.device.current === 'desktop' ? true : false,
			}, function(start, end, label) {

			});

			wrapper.append(item);

			updateTravelers();
		});


		/**
		 * 
		 */
		searchForm.on('click', '[type="submit"]', (e) => {
			const tab = searchForm.attr('data-tab');

			let trips   = [],
				options = [];

			searchForm.find('.wrapperItem').each((i, e) => {
				const whereFrom = $(e).find('[name="whereFrom"]'),
					  whereTo   = $(e).find('[name="whereTo"]'),
					  dateRange = searchForm.find('[name="dates"]').data('daterangepicker');

				if (whereFrom.val().trim() === '')
					whereFrom.addClass('error');

				if (whereTo.val().trim() === '')
					whereTo.addClass('error');

				if (tab === 'round-trip')
					trips.push(`${whereFrom.val()},${whereTo.val()},${dateRange.startDate.format('YYYY-MM-DD')},${dateRange.endDate.format('YYYY-MM-DD')}`);
				else
					trips.push(`${whereFrom.val()},${whereTo.val()},${dateRange.startDate.format('YYYY-MM-DD')}`);
			});

			for (const name of ['luggage', 'direct', 'layover']) {
				if (searchForm.find(`[name="${name}"]`).is(':checked'))
					options.push(name);	
			}

			if (!searchForm.find('.error').length) {
				const t = window.travelers;
				location.href = `/search/${tab}/${trips.join(';')}/${t.cabinClass}/${t.adults}/${t.children}/${t.infants}${options.length ? `?${options.join('=true&')}=true` : ''}`;
			}
		});


		/**
		 * 
		 */
		searchForm.on('click', 'img.iconimg', (e) => {
			const el   = $(e.target),
				  from = el.closest('.inputRow').find('[name="whereFrom"]'),
				  to   = el.closest('.inputRow').find('[name="whereTo"]'),
				  temp = from.val();
			
			from.val(to.val());
			to.val(temp);
		});


		/**
		 * 
		 */
		searchForm.on('submit', (e) => {
			e.preventDefault(e);
		});
	}
});
