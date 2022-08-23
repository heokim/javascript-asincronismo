function* fnGenerador() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = fnGenerador();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

function* iterador(arreglo) {
  for (let item of arreglo) {
    yield item;
  }
}

const it = iterador(['Andres', 'Moises', 'Isaac', 'Gloria', 'Ana']);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
