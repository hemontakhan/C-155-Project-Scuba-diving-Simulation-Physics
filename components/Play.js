AFRAME.registerComponent('game-rules',{
 schema:{
     elementId:{type:"string", default:'#coin1'}
 },

 update:function(){
     this.collisionDetector(this.data.elementId)
 },

 collisionDetector: function(elementId){
  const object = document.querySelector(elementId)
  object.addEventListener('collide', (e)=>{
      if(elementId.include('#ring')){
         console.log('You have collided with'+ elementId )
      } 
  })
 }

})