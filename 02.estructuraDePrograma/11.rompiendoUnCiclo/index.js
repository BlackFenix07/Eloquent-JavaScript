for (let actual = 20; ; actual += 1) {
  if (actual % 7 === 0) {
    console.log(actual);
    break;
  }
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}