if (!kiz) {
	var kiz = {
		/*
		 * Common stuff
		 */
		disp: function (id) {
			var el = document.getElementById(id);
			if (el)
				el.style.display = 'block';
			for (var i = 1; i < arguments.length; ++i) {
				el = document.getElementById(arguments[i]);
				if (el)
					el.style.display = 'none';
			}
			return false;
		},
		display: function (id, hideEl, displVal) {
			var el = document.getElementById(id);
			if (el)
				el.style.display = (displVal) ? displVal : 'block';
			if (hideEl)
				hideEl.style.display = 'none';
			return false;
		},
		toggleOneButton: function (id, displVal) {
			var el = document.getElementById(id);
			if (el) {
				if (el.style.display == 'none') {
					el.style.display = (displVal) ? displVal : 'block';
				} else {
					el.style.display = 'none';
				}
			}
			return false;
		},
		toggleTwoButtons: function (id, dispButtonId, hideButtonId, displVal, dispButtonVal, hideButtonVal) {
			var el = document.getElementById(id);
			var dispButtonEl = document.getElementById(dispButtonId);
			var hideButtonEl = document.getElementById(hideButtonId);

			if (el && dispButtonEl && hideButtonEl) {
				if (el.style.display == 'none') {
					el.style.display = (displVal) ? displVal : 'block';

					dispButtonEl.style.display = 'none';
					hideButtonEl.style.display = (hideButtonVal) ? hideButtonVal : 'block';

				} else {
					el.style.display = 'none';

					hideButtonEl.style.display = 'none';
					dispButtonEl.style.display = (dispButtonVal) ? dispButtonVal : 'block';
				}
			}
			return false;
		},
		setById: function (elemId, val) {
			var elem = document.getElementById(elemId);
			if (elem) {
				elem.value = val;
				return false;
			}
			return true;
		},
		setParentFormInputValue: function (curEl, inputSuffId, val) {
			while (curEl) {
				var inpEl = document.getElementById(curEl.id + ':' + inputSuffId);
				if (inpEl) {
					inpEl.value = val;
					return false;
				}
				curEl = curEl.parentNode;
			}
			return true;
		}
	};
}