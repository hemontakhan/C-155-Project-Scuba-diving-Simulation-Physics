AFRAME.registerComponent('diver-rotation-reader',{
 schema:{
     rotationAdjusment: {type:'number', default:0},
     positionAdjustment : {type:'number',default:0}
 },
 init:function(){
     window.addEventListener('keydown', (e) =>{
       
       this.data.rotationAdjusment = this.el.getAttribute('rotation')
       this.data.positionAdjustment = this.el.getAttribute('position') 

       var scubaRotation = this.data.rotationAdjusment
       var scubaPosition = this.data.positionAdjustment

       if(e.key === 'ArrowRight'){
             scubaRotation.x += 0.05
             this.el.setAttribute('rotation',scubaRotation)
       }
      if(e.key === 'ArrowLeft'){
        
            scubaPosition.x -= 0.05;
            this.el.setAttribute('position',scubaPosition)
      }
     if(e.key === 'ArrowUp'){
       
           scubaPosition.y += 0.5
           this.el.setAttribute('position',scubaPosition)
     }
     if(e.key === 'ArrowDown'){
       
           scubaPosition.z += 0.03
           this.el.setAttribute('position',scubaPosition)
     }
     })
 }

})