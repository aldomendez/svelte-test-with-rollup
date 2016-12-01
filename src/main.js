import HelloWorld from './components/HelloWorld.html'

var app = new HelloWorld({
  target: document.querySelector('main'),
  data: {
    name: 'Corazon',
    a: 1,
    b: 6
  }
})
