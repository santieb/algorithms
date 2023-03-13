const fibonacci = (length) => {
  const res = [0, 1]
  for (let i = 1;i<length;i++) 
    res.push(res[i] + res[i-1])
  
  return res
}

console.log(fibonacci(5))