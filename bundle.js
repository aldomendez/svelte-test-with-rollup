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

function renderMainFragment(root, component, target) {
	var h1 = document.createElement('h1');

	var text = document.createTextNode("Hello ");
	h1.appendChild(text);

	var text1 = document.createTextNode(root.name);
	h1.appendChild(text1);

	target.appendChild(h1);

	return {
		update: function update(changed, root) {
			text1.data = root.name;
		},

		teardown: function teardown(detach) {
			if (detach) h1.parentNode.removeChild(h1);

			if (detach) text.parentNode.removeChild(text);
		}
	};
}

function HelloWorld(options) {
	var component = this;
	var state = options.data || {};

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

var app = new HelloWorld({
  target: document.querySelector('main'),
  data: {
    name: 'Sandra Quilantan'
  }
});

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbInNyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWxsb1dvcmxkIGZyb20gJy4vY29tcG9uZW50cy9IZWxsb1dvcmxkLmh0bWwnXG5cbnZhciBhcHAgPSBuZXcgSGVsbG9Xb3JsZCh7XG4gIHRhcmdldDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpLFxuICBkYXRhOiB7XG4gICAgbmFtZTogJ1NhbmRyYSBRdWlsYW50YW4nXG4gIH1cbn0pXG4iXSwibmFtZXMiOlsiYXBwIiwiSGVsbG9Xb3JsZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxNQUFNLElBQUlDLFVBQUosQ0FBZTtVQUNmQyxTQUFTQyxhQUFULENBQXVCLE1BQXZCLENBRGU7UUFFakI7VUFDRTs7Q0FIQSxDQUFWOzsifQ==
