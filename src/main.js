import HelloWorld from './components/HelloWorld.html'

var app = new HelloWorld({
  target: document.querySelector('main'),
  data: {
    name: 'Sandra Quilantan'
  }
})
