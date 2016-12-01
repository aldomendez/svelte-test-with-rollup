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

	var text = document.createTextNode("Hola mi ");
	h1.appendChild(text);

	var text1 = document.createTextNode(root.name);
	h1.appendChild(text1);

	target.appendChild(h1);

	var text2 = document.createTextNode("\n");
	target.appendChild(text2);

	var p = document.createElement('p');

	var text3 = document.createTextNode(root.a);
	p.appendChild(text3);

	var text4 = document.createTextNode(" + ");
	p.appendChild(text4);

	var text5 = document.createTextNode(root.b);
	p.appendChild(text5);

	var text6 = document.createTextNode(" = ");
	p.appendChild(text6);

	var text7 = document.createTextNode(root.a + root.b);
	p.appendChild(text7);

	target.appendChild(p);

	return {
		update: function update(changed, root) {
			text1.data = root.name;

			text3.data = root.a;

			text5.data = root.b;

			text7.data = root.a + root.b;
		},

		teardown: function teardown(detach) {
			if (detach) h1.parentNode.removeChild(h1);

			if (detach) text.parentNode.removeChild(text);

			if (detach) text2.parentNode.removeChild(text2);

			if (detach) p.parentNode.removeChild(p);

			if (detach) text4.parentNode.removeChild(text4);

			if (detach) text6.parentNode.removeChild(text6);
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

			if (newValue === oldValue && (typeof newValue === "undefined" ? "undefined" : _typeof(newValue)) !== 'object') continue;

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
    name: 'Corazon',
    a: 1,
    b: 6
  }
});

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbInNyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWxsb1dvcmxkIGZyb20gJy4vY29tcG9uZW50cy9IZWxsb1dvcmxkLmh0bWwnXG5cbnZhciBhcHAgPSBuZXcgSGVsbG9Xb3JsZCh7XG4gIHRhcmdldDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpLFxuICBkYXRhOiB7XG4gICAgbmFtZTogJ0NvcmF6b24nLFxuICAgIGE6IDEsXG4gICAgYjogNlxuICB9XG59KVxuIl0sIm5hbWVzIjpbImFwcCIsIkhlbGxvV29ybGQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsTUFBTSxJQUFJQyxVQUFKLENBQWU7VUFDZkMsU0FBU0MsYUFBVCxDQUF1QixNQUF2QixDQURlO1FBRWpCO1VBQ0UsU0FERjtPQUVELENBRkM7T0FHRDs7Q0FMRyxDQUFWOzsifQ==
