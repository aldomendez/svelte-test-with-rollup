(function () {
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





















var get$1 = function get$1(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get$1(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

















var set$1 = function set$1(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent !== null) {
      set$1(parent, property, value, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    desc.value = value;
  } else {
    var setter = desc.set;

    if (setter !== undefined) {
      setter.call(receiver, value);
    }
  }

  return value;
};

var template = function () {
	return {
		data: function data() {
			return {
				categories: ['animal', 'vegetal', 'mineral'],
				count: 0
			};
		},

		methods: {
			select: function select(name) {
				console.log(name);
			}
		}
	};
}();

function renderMainFragment(root, component, target) {
	var p = document.createElement('p');

	var text = document.createTextNode("Count: ");
	p.appendChild(text);

	var text1 = document.createTextNode(root.count);
	p.appendChild(text1);

	target.appendChild(p);

	var text2 = document.createTextNode("\n");
	target.appendChild(text2);

	var button = document.createElement('button');
	function clickHandler(event) {
		var root = this.__svelte.root;

		component.set({ count: root.count + 1 });
	}

	button.addEventListener('click', clickHandler, false);
	button.__svelte = {
		root: root
	};

	var text3 = document.createTextNode("+1");
	button.appendChild(text3);

	target.appendChild(button);

	var text4 = document.createTextNode("\n\n");
	target.appendChild(text4);

	var p1 = document.createElement('p');

	var text5 = document.createTextNode("Select Category:");
	p1.appendChild(text5);

	target.appendChild(p1);

	var text6 = document.createTextNode("\n\n");
	target.appendChild(text6);

	var eachBlock_0_anchor = document.createComment("#each categories");
	target.appendChild(eachBlock_0_anchor);

	var eachBlock_0_value = root.categories;
	var eachBlock_0_fragment = document.createDocumentFragment();
	var eachBlock_0_iterations = [];

	for (var i = 0; i < eachBlock_0_value.length; i += 1) {
		eachBlock_0_iterations[i] = renderEachBlock_0(root, eachBlock_0_value, eachBlock_0_value[i], i, component, eachBlock_0_fragment);
	}

	eachBlock_0_anchor.parentNode.insertBefore(eachBlock_0_fragment, eachBlock_0_anchor);

	return {
		update: function update(changed, root) {
			text1.data = root.count;

			button.__svelte.root = root;

			var eachBlock_0_value = root.categories;

			for (var i = 0; i < eachBlock_0_value.length; i += 1) {
				if (!eachBlock_0_iterations[i]) {
					eachBlock_0_iterations[i] = renderEachBlock_0(root, eachBlock_0_value, eachBlock_0_value[i], i, component, eachBlock_0_fragment);
				} else {
					eachBlock_0_iterations[i].update(changed, root, eachBlock_0_value, eachBlock_0_value[i], i);
				}
			}

			for (var i = eachBlock_0_value.length; i < eachBlock_0_iterations.length; i += 1) {
				eachBlock_0_iterations[i].teardown(true);
			}

			eachBlock_0_anchor.parentNode.insertBefore(eachBlock_0_fragment, eachBlock_0_anchor);
			eachBlock_0_iterations.length = eachBlock_0_value.length;
		},

		teardown: function teardown(detach) {
			if (detach) p.parentNode.removeChild(p);

			if (detach) text.parentNode.removeChild(text);

			if (detach) text2.parentNode.removeChild(text2);

			button.removeEventListener('click', clickHandler, false);
			if (detach) button.parentNode.removeChild(button);

			if (detach) text3.parentNode.removeChild(text3);

			if (detach) text4.parentNode.removeChild(text4);

			if (detach) p1.parentNode.removeChild(p1);

			if (detach) text5.parentNode.removeChild(text5);

			if (detach) text6.parentNode.removeChild(text6);

			for (var i = 0; i < eachBlock_0_iterations.length; i += 1) {
				eachBlock_0_iterations[i].teardown(detach);
			}

			if (detach) eachBlock_0_anchor.parentNode.removeChild(eachBlock_0_anchor);
		}
	};
}

function renderEachBlock_0(root, eachBlock_0_value, category, category__index, component, target) {
	var button = document.createElement('button');
	function clickHandler(event) {
		var eachBlock_0_value = this.__svelte.eachBlock_0_value,
		    category__index = this.__svelte.category__index,
		    category = eachBlock_0_value[category__index];

		component.select(category);
	}

	button.addEventListener('click', clickHandler, false);
	button.__svelte = {
		eachBlock_0_value: eachBlock_0_value,
		category__index: category__index
	};

	var text = document.createTextNode("Select ");
	button.appendChild(text);

	var text1 = document.createTextNode(category);
	button.appendChild(text1);

	target.appendChild(button);

	return {
		update: function update(changed, root, eachBlock_0_value, category, category__index) {
			var category = eachBlock_0_value[category__index];

			button.__svelte.eachBlock_0_value = eachBlock_0_value;
			button.__svelte.category__index = category__index;

			text1.data = category;
		},

		teardown: function teardown(detach) {
			button.removeEventListener('click', clickHandler, false);
			if (detach) button.parentNode.removeChild(button);

			if (detach) text.parentNode.removeChild(text);
		}
	};
}

function HelloWorld(options) {
	var component = this;
	var state = Object.assign(template.data(), options.data);

	var observers = {
		immediate: Object.create(null),
		deferred: Object.create(null)
	};

	var callbacks = Object.create(null);

	function dispatchObservers(group, newState, oldState) {
		for (var key in group) {
			if (!(key in newState)) continue;

			var newValue = newState[key];
			var oldValue = oldState[key];

			if (newValue === oldValue && (typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) !== 'object') continue;

			var callbacks = group[key];
			if (!callbacks) continue;

			for (var i = 0; i < callbacks.length; i += 1) {
				var callback = callbacks[i];
				if (callback.__calling) continue;

				callback.__calling = true;
				callback.call(component, newValue, oldValue);
				callback.__calling = false;
			}
		}
	}

	this.fire = function fire(eventName, data) {
		var handlers = eventName in callbacks && callbacks[eventName].slice();
		if (!handlers) return;

		for (var i = 0; i < handlers.length; i += 1) {
			handlers[i].call(this, data);
		}
	};

	this.get = function get(key) {
		return key ? state[key] : state;
	};

	this.set = function set(newState) {
		var oldState = state;
		state = Object.assign({}, oldState, newState);

		dispatchObservers(observers.immediate, newState, oldState);
		if (mainFragment) mainFragment.update(newState, state);
		dispatchObservers(observers.deferred, newState, oldState);
	};

	this.observe = function (key, callback, options) {
		var group = options && options.defer ? observers.deferred : observers.immediate;

		(group[key] || (group[key] = [])).push(callback);

		if (!options || options.init !== false) {
			callback.__calling = true;
			callback.call(component, state[key]);
			callback.__calling = false;
		}

		return {
			cancel: function cancel() {
				var index = group[key].indexOf(callback);
				if (~index) group[key].splice(index, 1);
			}
		};
	};

	this.on = function on(eventName, handler) {
		var handlers = callbacks[eventName] || (callbacks[eventName] = []);
		handlers.push(handler);

		return {
			cancel: function cancel() {
				var index = handlers.indexOf(handler);
				if (~index) handlers.splice(index, 1);
			}
		};
	};

	this.teardown = function teardown(detach) {
		this.fire('teardown');

		mainFragment.teardown(detach !== false);
		mainFragment = null;

		state = {};
	};

	var mainFragment = renderMainFragment(state, this, options.target);
}

HelloWorld.prototype = template.methods;

var app = new HelloWorld({
  target: document.querySelector('main'),
  data: {
    name: 'Corazon',
    a: 1,
    b: 6
  }
});

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbInNyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWxsb1dvcmxkIGZyb20gJy4vY29tcG9uZW50cy9IZWxsb1dvcmxkLmh0bWwnXG5cbnZhciBhcHAgPSBuZXcgSGVsbG9Xb3JsZCh7XG4gIHRhcmdldDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpLFxuICBkYXRhOiB7XG4gICAgbmFtZTogJ0NvcmF6b24nLFxuICAgIGE6IDEsXG4gICAgYjogNlxuICB9XG59KVxuIl0sIm5hbWVzIjpbImFwcCIsIkhlbGxvV29ybGQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLE1BQU0sSUFBSUMsVUFBSixDQUFlO1VBQ2ZDLFNBQVNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FEZTtRQUVqQjtVQUNFLFNBREY7T0FFRCxDQUZDO09BR0Q7O0NBTEcsQ0FBVjs7In0=
