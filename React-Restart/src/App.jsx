function App(){

  return (
    <div style={{display:"flex"}}>
      <Card>
        <div>
        What do you want to post?
        <br />
        <input type="text" />
         </div>
      </Card>
      

    </div>

  )

}

function Card({children}){
  return <div style={{background:"gray", borderRadius:10 , color:"black", padding: 10, margin: 10}}>
    {children}
  </div>

}



export default App;