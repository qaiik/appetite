class Plate { 
  constructor(a) {
    this.a = a;
  }
  
  int8() {
    return this.a.shift()
  }
  
  eat(b) {
    const out = []
    for (let i = 0; i < b; i++) {
      out.push(this.int8())
    }
    return out
  }
  
  string() {
    const out = []
    let s = this.int8()
    while (s != 0) {
      out.push(String.fromCharCode(s))
      s = this.int8()
    }
    return out.join("")
  }
}
