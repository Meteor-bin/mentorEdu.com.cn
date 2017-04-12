define(['jquery','scrollto'], function($,scrollto) {
	// el:按钮  opts:参数
	function BackTop(el, opts) {
		this.opts = $.extend({},BackTop.DEFAULTS, opts);
		this.$el = $(el);
		this.scrollto = new scrollto.ScrollTo({
			dest:0,
			speed: this.opts.speed
		});

		if (this.opts.mode == 'move') {
			this.$el.on('click', $.proxy(this._move,this));
		} else {
			this.$el.on('click', $.proxy(this._go, this));
		}
		$(window).on('scroll', $.proxy(this._checkPosition, this));
	} 

	BackTop.DEFAULTS = {
		mode: 'move',
		pos: $(window).height()
	};

	BackTop.prototype._move = function(){
		this.scrollto.move();
	};

	BackTop.prototype._go = function() {
		this.scrollto.go();
	};

	BackTop.prototype._checkPosition = function(){
		var $el = this.$el;
		if ($(window).scrollTop() > this.opts.pos) {
			$el.fadeIn();
		} else {
			$el.fadeOut();
		}
	};

	$.fn.extend({
		backTop: function(opts){
			return this.each(function(){
				new BackTop(this,opts)
			});
		}
	});

	return {
		BackTop: BackTop
	};
});