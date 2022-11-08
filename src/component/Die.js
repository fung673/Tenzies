import react from 'react'

export default function Die() {
 return <div className='die'>
  <div className='top-container'>
   <div className='title'>Tenzies</div>
   <div class="break"></div>
   <p className='description'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
  </div>
  <div className='dice'>
   <div id='dice1' value="1" />
   <div id='dice2' value="1" />
   <div id='dice3' value="1" />
   <div id='dice4' value="1" />
   <div id='dice5' value="1" />
   <div id='dice6' value="1" />
   <div id='dice7' value="1" />
   <div id='dice8' value="1" />
   <div id='dice9' value="1" />
   <div id='dice10' value="1" /></div>
 </div>

}