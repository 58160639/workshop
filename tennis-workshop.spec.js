function TennisGame(){
  this.reset = () =>{

 }
  this.echo = () =>{
    return 'Love - Love'
  }
}
test('try success test case',() =>{

  expect(true).toBe(true)
})
test('Echo "Love - Love"when game start', () => {


let app = new TennisGame ()
app.reset()


let result = app.echo()


 
 expect(result).toBe('Love - Love')
})