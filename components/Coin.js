AFRAME.registerComponent('coin',{
init:function(){
    for(var i=1;i <= 5;i++){
        
        var id = `coin${i}`

        var posX = Math.floor(Math.random()* 1 + 0.5)
        var posY = Math.floor(Math.random()* 2 + 2)
        var posz = math.floor(Math.random()*3 + 0)
      
        var position = {x: posX ,y : posY , z: posz}
          
        this.createCoins(id,position)

    }
},
createCoins: function(id,position){
 var islandEntity = document.querySelector('#oceanic-island')
 var coinEl = document.createElement('a-entity')

 coinEl.setAttribute(id,'id')
 coinEl.setAttribute(position,'position')
 coinEl.setAttribute('material','color','yellow')

 coinEl.setAttribute('geometry',{primitive:'circle', radius:'1'})

 coinEl.setAttribute('animation',{
     property : 'rotation',
     to:'0 360 0',
     loop: 'true',
     dur:10000
 })

 islandEntity.appendChild(coinEl)

}


})