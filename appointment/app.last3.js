var hrf = location.protocol+'//'+location.host+location.pathname;
if(hrf == "https://monashivf.com/fertility-treatments/fertility-treatments/the-ivf-process/"){
function initjQuery(callback) {
	var script = document.createElement( "script" )
	script.type = "text/javascript";
	if(script.readyState) {
	script.onreadystatechange = function() {
		if ( script.readyState === "loaded" || script.readyState === "complete" ) {
			script.onreadystatechange = null;
			callback();
		}
	};
  } else {
	script.onload = function() {
		callback();
	};
  }
  script.src = '//code.jquery.com/jquery-3.3.1.min.js';
  document.getElementsByTagName( "head" )[0].appendChild( script );
}
if (!window.jQuery) {
	initjQuery(function() {
		readyjQueryinit();
	});
}else{
	readyjQueryinit();
}
	function readyjQueryinit(){
		jQuery(function($) {
			var hrf = location.protocol+'//'+location.host+location.pathname;
				$('.col-sm-4.sidebar').css('opacity','0');
				$('.col-sm-4.sidebar').html('');
				$projectlocation = "https://htmldiz.github.io/appointment/";
				$('body').append('<link rel="stylesheet" href="'+$projectlocation+'css/style3.last.css" />');
				var sidebar = $('#sidebar').clone();
				var form = $('#form-bottom').clone();
				$('#sidebar').remove();
				$('.col-sm-8.inner-content>h3').remove();
				$('.monash-o-btn').remove();
				$.ajax({
					url: 'https://monashivf.com/resources/free-ivf-nurse-chat/',
					type: 'POST',
					dataType: 'html',
				}) 
				.done(function(html) {
					$('.col-sm-4.sidebar').css('opacity','1');
					var clone = $(html).find('#form-bottom').clone();
					clone.attr('id','form-bottom2');
					clone.find('[enctype="multipart/form-data"]').removeAttr('target').removeAttr('id');
					clone.find('.datepicker_with_icon').after('<img class="ui-datepicker-trigger" src="https://monashivf.com/assets/plugins/gravityforms/images/calendar.png" alt="..." title="...">');
					clone.appendTo('.col-sm-4.sidebar');
					$('body').find('.col-sm-4.sidebar .datepicker').addClass('datepicker-here');
					$('body').find('.col-sm-4.sidebar .datepicker').removeClass('datepicker');
					$('body').on('click', '.col-sm-4.sidebar .ui-datepicker-trigger', function(event) {
						var init_datepicker = false;
						if($(this).data('init_datepicker') !== undefined){
							init_datepicker = $(this).data('init_datepicker');
						}
						if(init_datepicker === false){
							$(this).data('init_datepicker',true);
						}
						event.preventDefault();
					}); 
					$('body').find('#form-bottom2').css('padding-bottom','600px');
					$('body').find('#form-bottom2').prepend('<h3 style="padding-top:10px;">Get a free consultation on the IVF process</h3>');
					$('body').find('#form-bottom2 .gfield_label.gfield_label_before_complex').remove();
					$('body').find('#form-bottom2 .field_description_below:not(.recieved-occ-mail) .gfield_label').remove();
						var clone_btn = $('body').find('#form-bottom2 [value="Submit"]').clone();
						clone_btn.attr('value','BOOK YOUR FREE NURSE CALL');
						clone_btn.attr('onkeypress','');
						clone_btn.attr('onclick','');
						clone_btn.attr('id','');
						clone_btn.insertAfter('#form-bottom2 [value="Submit"]');
					$('body').find('#form-bottom2 [value="Submit"]').css('display','none');
					gformInitDatepicker_int1(); 
				});
				$('body').on('click','.ui-datepicker-trigger', function(){
					$(this).parent().find('input').focus();
				});

				$('body').on('blur','[enctype="multipart/form-data"] .datepicker_with_icon',function(){
					validatefn($(this));
				});
				$('body').on('blur','[enctype="multipart/form-data"] [placeholder="First Name"]',function(){
					validatefn($(this));
				});
				$('body').on('focus','[enctype="multipart/form-data"] [placeholder="First Name"]',function(){
					window.dataLayer = window.dataLayer || [];
					dataLayer.push({
					'event': 'gtm-cro-event',
					'gtm-cro-event-category': 'EXP - Sticky Form',
					'gtm-cro-event-action': 'click',
					'gtm-cro-event-label': 'First Name'
					});
					$(this).removeClass('lv_invalid');
					$(this).removeClass('LV_invalid_field');
				});
				$('body').on('blur','[enctype="multipart/form-data"] [name="input_38.6"]',function(){
					validatefn($(this));
				});
				$('body').on('focus','[enctype="multipart/form-data"] [name="input_38.6"]',function(){
					window.dataLayer = window.dataLayer || [];
					dataLayer.push({
					'event': 'gtm-cro-event',
					'gtm-cro-event-category': 'EXP - Sticky Form',
					'gtm-cro-event-action': 'click',
					'gtm-cro-event-label': 'First Name'
					});
					$(this).removeClass('lv_invalid');
					$(this).removeClass('LV_invalid_field');
					$(this).removeClass('lv_valid');
					$(this).removeClass('LV_valid_field');
				});
				$('body').on('blur','[enctype="multipart/form-data"] [placeholder="Your Phone"]',function(){
					window.dataLayer = window.dataLayer || [];
					dataLayer.push({
					'event': 'gtm-cro-event',
					'gtm-cro-event-category': 'EXP - Sticky Form',
					'gtm-cro-event-action': 'click',
					'gtm-cro-event-label': 'Your Phone'
					});
					var val = $(this).val();
					if(validatefn($(this),false) === true && validatePhone(val) === true){
						$(this).addClass('lv_valid');
						$(this).addClass('LV_valid_field');
					}else{
						$(this).addClass('lv_invalid');
						$(this).addClass('LV_invalid_field');
					}
				});
				$('body').on('focus','[enctype="multipart/form-data"] [placeholder="Your Phone"]',function(){
					window.dataLayer = window.dataLayer || [];
					dataLayer.push({
					'event': 'gtm-cro-event',
					'gtm-cro-event-category': 'EXP - Sticky Form',
					'gtm-cro-event-action': 'click',
					'gtm-cro-event-label': 'Your Phone'
					});
					$(this).removeClass('lv_invalid');
					$(this).removeClass('LV_invalid_field');
					$(this).removeClass('lv_valid');
					$(this).removeClass('LV_valid_field');
				});
				$('body').on('blur','[enctype="multipart/form-data"] [placeholder="Your Email"]',function(){
					window.dataLayer = window.dataLayer || [];
					dataLayer.push({
					'event': 'gtm-cro-event',
					'gtm-cro-event-category': 'EXP - Sticky Form',
					'gtm-cro-event-action': 'click',
					'gtm-cro-event-label': 'Your Phone'
					});
					var val = $(this).val();
					if(validatefn($(this),false) && validateEmail(val)){
						$(this).addClass('lv_valid');
						$(this).addClass('LV_valid_field');
					}else{
						$(this).addClass('lv_invalid');
						$(this).addClass('LV_invalid_field');
					}
				});
				$('body').on('focus','[enctype="multipart/form-data"] [placeholder="Your Email"]',function(){
					window.dataLayer = window.dataLayer || [];
					dataLayer.push({
					'event': 'gtm-cro-event',
					'gtm-cro-event-category': 'EXP - Sticky Form',
					'gtm-cro-event-action': 'click',
					'gtm-cro-event-label': 'Your Phone'
					});
					$(this).removeClass('lv_invalid');
					$(this).removeClass('LV_invalid_field');
					$(this).removeClass('lv_valid');
					$(this).removeClass('LV_valid_field');
				});
				$('body').on('click','[enctype="multipart/form-data"] [value="BOOK YOUR FREE NURSE CALL"]',function(){
					$(this).closest('[enctype="multipart/form-data"]').submit();
				});
				$('body').on('submit', '[enctype="multipart/form-data"]', function(event) {
					var action = $(this).attr('action');
					var fieldFirstName   = $('[placeholder="First Name"]',this);
					var fieldLastname    = $('[name="input_38.6"]',this);
					var fieldPhoneNumber = $('[placeholder="Your Phone"]',this);
					var fieldEmail       = $('[placeholder="Your Email"]',this);
					var datepicker       = $('.datepicker_with_icon',this);
					var validateFirstName   = validatefn(fieldFirstName);
					var validateLastname    = validatefn(fieldLastname);
					var validatePhoneNumber = validatefn(fieldPhoneNumber) && validatePhone(fieldPhoneNumber.val());
					var validatefieldEmail  = validatefn(fieldEmail)    && validateEmail(fieldEmail.val());
					var validatedatepicker  = validatefn(datepicker);
					if(validateFirstName && validateLastname && validatePhoneNumber && validatefieldEmail && validatedatepicker){
						var serialize           = $(this).serialize();
						var form                = $(this);
						$(this).find('.loader-form').css('display','block');
						$.ajax({
							url: action,
							type: 'POST',
							dataType: 'html',
							data: serialize,
						})
						.done(function(data) {
							var dataitem = $(data);
							if(data.search('gformRedirect') > 0){
								form.append(dataitem);
								gformRedirect();
							}else{
								dataitem.find('iframe').remove();
								dataitem.find('[type="text/javascript"]').remove();
								dataitem.find('.datepicker_with_icon').after('<img class="ui-datepicker-trigger" src="https://monashivf.com/assets/plugins/gravityforms/images/calendar.png" alt="..." title="...">');
								dataitem.find('[enctype="multipart/form-data"]').removeAttr('id').removeAttr('target').removeAttr('onsubmit');
								dataitem.find('.gfield_error input').addClass('lv_invalid');
								dataitem.find('.gform_button.button').removeAttr('onclick').removeAttr('onkeypress').removeAttr('onkeypress').after('<img src="https://monashivf.com/assets/plugins/gravityforms/images/spinner.gif" class="loader-form" />');
								$('#form-bottom').html('');
								$('#form-bottom').append(dataitem);
								setTimeout(function() {
									gformInitDatepicker_int1();
								},100);
							}
						});
					}
					return false;
				});
			
		});
	}
}
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
function validatePhone(p) {
  var phoneRe = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
  return phoneRe.test(p);
} 
function validatefn(p,addClasses=true) {
	var val = p.val();
	var placeholder = p.attr('placeholder').length > 0 ? p.attr('placeholder') : ' ';
	if(val === "" || val === placeholder){
		if(addClasses === false){}else{
			p.addClass('lv_invalid');
			p.addClass('LV_invalid_field');
			p.removeClass('lv_valid');
			p.removeClass('LV_valid_field');
		}
		return false;
	}else{
		if(addClasses === false){}else{
			p.removeClass('lv_invalid');
			p.removeClass('LV_invalid_field');
			p.addClass('lv_valid');
			p.addClass('LV_valid_field');
		}
		return true;
	}
}
function gformInitDatepicker_int1() {
	jQuery('body').find('[enctype="multipart/form-data"] .datepicker_with_icon').each(function() {
		jQuery(this).val(jQuery(this).attr('placeholder'));
		jQuery(this).removeClass( "hasDatepicker" );
		var a = jQuery(this);
		var r = Math.floor(Math.random() * (10000 - 1) ) + 1;
			a.attr('id','input_'+r);
			b = a.attr('id'),
			c = {
				yearRange: "-100:+20",
				showOn: "focus",
				dateFormat: "dd/mm/yy",
				onSelect:function(dateText) {
					validatefn(jQuery(this));
				}
			};
		c.dateFormat = "dd/mm/yy";
		a.datepicker(c);
	})
}