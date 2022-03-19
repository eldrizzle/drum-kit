










var numberofdrums=document.querySelectorAll(".drum").length;

for(var i=0;i<numberofdrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
     var data=this.innerHTML;
        switch (data) {
            case "w":
                const w = new Audio('crash.mp3');
                w.play();


                
                break;
            
            case "a":
                const a = new Audio('tom-1.mp3');
                a.play();
    
    
                    
                break;
        
            case "s":
                const s= new Audio('tom-2.mp3');
                s.play();
    
    
                    
                break;
            
            case "d":
                const d = new Audio('tom-3.mp3');
                d.play();
    
    
                    
                break;  

                
            case "j":
                const j = new Audio('tom-4.mp3');
                j.play();
    
    
                    
                break; 
                
            case "k":
                const k = new Audio('kick.mp3');
                k.play();
        
        
                        
                break;
                    
                
            case "l":
                const l= new Audio('kick-bass.mp3');
                l.play();
    
    
                    
            break;
                   
        }

    });

    
    
}

document.addEventListener("keypress",function(){
    alert("Key was pressed");
});
