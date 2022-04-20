//multiplos de 3 fizz
//multiplos de 5 buzz
//multiplos de 3 y 5 fizzbuzz

for (i = 1; i < 31; i++) {
  if (i % 5 == 0 && i % 3 == 0) console.log("fizzbuzz", i);
  else if (i % 5 == 0) console.log("buzz", i);
  else if (i % 3 == 0) console.log("fizz", i);
}
